// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { SepoliaConfig } from "@fhevm/solidity/config/ZamaConfig.sol";
import { euint32, externalEuint32, euint8, ebool, FHE } from "@fhevm/solidity/lib/FHE.sol";

contract CipherTrackWager is SepoliaConfig {
    using FHE for *;
    
    struct Race {
        euint32 raceId;
        euint32 totalPool;
        euint32 participantCount;
        euint32 winnerId;
        bool isActive;
        bool isFinished;
        string name;
        string description;
        address organizer;
        uint256 startTime;
        uint256 endTime;
    }
    
    struct Wager {
        euint32 wagerId;
        euint32 amount;
        euint32 participantId;
        euint32 raceId;
        address bettor;
        uint256 timestamp;
        bool isWinning;
    }
    
    struct Participant {
        euint32 participantId;
        euint32 totalWagers;
        euint32 winCount;
        euint32 reputation;
        string name;
        address owner;
        bool isActive;
    }
    
    struct LeaderboardEntry {
        euint32 participantId;
        euint32 totalWinnings;
        euint32 winRate;
        address participant;
        uint256 lastActivity;
    }
    
    mapping(uint256 => Race) public races;
    mapping(uint256 => Wager) public wagers;
    mapping(uint256 => Participant) public participants;
    mapping(address => euint32) public userReputation;
    mapping(address => euint32) public userWinnings;
    mapping(uint256 => mapping(uint256 => bool)) public raceParticipants; // raceId => participantId => isParticipating
    
    uint256 public raceCounter;
    uint256 public wagerCounter;
    uint256 public participantCounter;
    
    address public owner;
    address public verifier;
    euint32 public platformFee; // Encrypted platform fee percentage
    
    event RaceCreated(uint256 indexed raceId, address indexed organizer, string name);
    event WagerPlaced(uint256 indexed wagerId, uint256 indexed raceId, address indexed bettor, uint32 amount);
    event RaceFinished(uint256 indexed raceId, uint32 winnerId);
    event ParticipantRegistered(uint256 indexed participantId, address indexed owner, string name);
    event WinningsDistributed(uint256 indexed raceId, uint32 totalWinnings);
    event ReputationUpdated(address indexed user, uint32 reputation);
    
    constructor(address _verifier) {
        owner = msg.sender;
        verifier = _verifier;
        platformFee = FHE.asEuint32(5); // 5% platform fee
    }
    
    function createRace(
        string memory _name,
        string memory _description,
        uint256 _duration
    ) public returns (uint256) {
        require(bytes(_name).length > 0, "Race name cannot be empty");
        require(_duration > 0, "Duration must be positive");
        
        uint256 raceId = raceCounter++;
        
        races[raceId] = Race({
            raceId: FHE.asEuint32(0), // Will be set properly later
            totalPool: FHE.asEuint32(0),
            participantCount: FHE.asEuint32(0),
            winnerId: FHE.asEuint32(0),
            isActive: true,
            isFinished: false,
            name: _name,
            description: _description,
            organizer: msg.sender,
            startTime: block.timestamp,
            endTime: block.timestamp + _duration
        });
        
        emit RaceCreated(raceId, msg.sender, _name);
        return raceId;
    }
    
    function registerParticipant(
        string memory _name
    ) public returns (uint256) {
        require(bytes(_name).length > 0, "Participant name cannot be empty");
        
        uint256 participantId = participantCounter++;
        
        participants[participantId] = Participant({
            participantId: FHE.asEuint32(0), // Will be set properly later
            totalWagers: FHE.asEuint32(0),
            winCount: FHE.asEuint32(0),
            reputation: FHE.asEuint32(100), // Starting reputation
            name: _name,
            owner: msg.sender,
            isActive: true
        });
        
        emit ParticipantRegistered(participantId, msg.sender, _name);
        return participantId;
    }
    
    function addParticipantToRace(
        uint256 raceId,
        uint256 participantId
    ) public {
        require(races[raceId].organizer == msg.sender, "Only organizer can add participants");
        require(races[raceId].isActive, "Race must be active");
        require(participants[participantId].isActive, "Participant must be active");
        require(!raceParticipants[raceId][participantId], "Participant already in race");
        
        raceParticipants[raceId][participantId] = true;
        races[raceId].participantCount = FHE.add(races[raceId].participantCount, FHE.asEuint32(1));
    }
    
    function placeWager(
        uint256 raceId,
        uint256 participantId,
        externalEuint32 amount,
        bytes calldata inputProof
    ) public returns (uint256) {
        require(races[raceId].isActive, "Race must be active");
        require(raceParticipants[raceId][participantId], "Participant must be in race");
        require(block.timestamp <= races[raceId].endTime, "Race has ended");
        
        uint256 wagerId = wagerCounter++;
        
        // Convert externalEuint32 to euint32 using FHE.fromExternal
        euint32 internalAmount = FHE.fromExternal(amount, inputProof);
        
        wagers[wagerId] = Wager({
            wagerId: FHE.asEuint32(0), // Will be set properly later
            amount: internalAmount,
            participantId: FHE.asEuint32(participantId),
            raceId: FHE.asEuint32(raceId),
            bettor: msg.sender,
            timestamp: block.timestamp,
            isWinning: false
        });
        
        // Update race total pool with encrypted amount
        races[raceId].totalPool = FHE.add(races[raceId].totalPool, internalAmount);
        
        // Update participant stats with encrypted data
        participants[participantId].totalWagers = FHE.add(participants[participantId].totalWagers, internalAmount);
        
        // Update user reputation based on encrypted wager amount
        userReputation[msg.sender] = FHE.add(userReputation[msg.sender], FHE.asEuint32(1));
        
        emit WagerPlaced(wagerId, raceId, msg.sender, 0); // Amount will be decrypted off-chain
        return wagerId;
    }
    
    function finishRace(
        uint256 raceId,
        euint32 winnerId
    ) public {
        require(races[raceId].organizer == msg.sender, "Only organizer can finish race");
        require(races[raceId].isActive, "Race must be active");
        require(block.timestamp > races[raceId].endTime, "Race must be ended");
        
        races[raceId].isActive = false;
        races[raceId].isFinished = true;
        races[raceId].winnerId = winnerId;
        
        emit RaceFinished(raceId, 0); // Winner ID will be decrypted off-chain
    }
    
    function distributeWinnings(
        uint256 raceId,
        uint256 wagerId,
        euint32 encryptedWinnings
    ) public {
        require(races[raceId].isFinished, "Race must be finished");
        require(wagers[wagerId].bettor == msg.sender, "Only bettor can claim winnings");
        require(!wagers[wagerId].isWinning, "Winnings already claimed");
        
        // Mark wager as winning
        wagers[wagerId].isWinning = true;
        
        // Update user winnings with encrypted amount
        userWinnings[msg.sender] = FHE.add(userWinnings[msg.sender], encryptedWinnings);
        
        // Update participant win count with encrypted data
        participants[wagers[wagerId].participantId].winCount = FHE.add(
            participants[wagers[wagerId].participantId].winCount, 
            FHE.asEuint32(1)
        );
        
        // Update user reputation based on encrypted winnings
        userReputation[msg.sender] = FHE.add(userReputation[msg.sender], FHE.asEuint32(1));
        
        emit WinningsDistributed(raceId, 0); // Winnings will be decrypted off-chain
    }
    
    function updateReputation(
        address user,
        euint32 reputation
    ) public {
        require(msg.sender == verifier, "Only verifier can update reputation");
        require(user != address(0), "Invalid user address");
        
        userReputation[user] = reputation;
        emit ReputationUpdated(user, 0); // FHE.decrypt(reputation) - will be decrypted off-chain
    }
    
    function getRaceInfo(uint256 raceId) public view returns (
        string memory name,
        string memory description,
        uint8 totalPool,
        uint8 participantCount,
        bool isActive,
        bool isFinished,
        address organizer,
        uint256 startTime,
        uint256 endTime
    ) {
        Race storage race = races[raceId];
        return (
            race.name,
            race.description,
            0, // FHE.decrypt(race.totalPool) - will be decrypted off-chain
            0, // FHE.decrypt(race.participantCount) - will be decrypted off-chain
            race.isActive,
            race.isFinished,
            race.organizer,
            race.startTime,
            race.endTime
        );
    }
    
    function getWagerInfo(uint256 wagerId) public view returns (
        uint8 amount,
        uint8 participantId,
        uint8 raceId,
        address bettor,
        uint256 timestamp,
        bool isWinning
    ) {
        Wager storage wager = wagers[wagerId];
        return (
            0, // FHE.decrypt(wager.amount) - will be decrypted off-chain
            0, // FHE.decrypt(wager.participantId) - will be decrypted off-chain
            0, // FHE.decrypt(wager.raceId) - will be decrypted off-chain
            wager.bettor,
            wager.timestamp,
            wager.isWinning
        );
    }
    
    function getParticipantInfo(uint256 participantId) public view returns (
        string memory name,
        uint8 totalWagers,
        uint8 winCount,
        uint8 reputation,
        address owner,
        bool isActive
    ) {
        Participant storage participant = participants[participantId];
        return (
            participant.name,
            0, // FHE.decrypt(participant.totalWagers) - will be decrypted off-chain
            0, // FHE.decrypt(participant.winCount) - will be decrypted off-chain
            0, // FHE.decrypt(participant.reputation) - will be decrypted off-chain
            participant.owner,
            participant.isActive
        );
    }
    
    function getUserReputation(address user) public view returns (uint8) {
        return 0; // FHE.decrypt(userReputation[user]) - will be decrypted off-chain
    }
    
    function getUserWinnings(address user) public view returns (uint8) {
        return 0; // FHE.decrypt(userWinnings[user]) - will be decrypted off-chain
    }
    
    function withdrawWinnings() public {
        // Winnings are managed through encrypted state updates
        // No direct transfers to avoid security issues
        // All winnings are tracked through encrypted userWinnings mapping
        // Actual fund transfers should be handled by external systems
        emit WinningsDistributed(0, 0); // Emit event for external processing
    }
}
