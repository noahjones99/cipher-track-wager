import { Address } from 'viem';

// Contract addresses (to be updated after deployment)
export const CONTRACT_ADDRESSES = {
  CipherTrackWager: '0x0000000000000000000000000000000000000000' as Address,
} as const;

// Contract ABIs (to be updated after deployment)
export const CONTRACT_ABIS = {
  CipherTrackWager: [
    {
      "inputs": [
        {"internalType": "address", "name": "_verifier", "type": "address"}
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {"indexed": true, "internalType": "uint256", "name": "raceId", "type": "uint256"},
        {"indexed": true, "internalType": "address", "name": "organizer", "type": "address"},
        {"indexed": false, "internalType": "string", "name": "name", "type": "string"}
      ],
      "name": "RaceCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {"indexed": true, "internalType": "uint256", "name": "wagerId", "type": "uint256"},
        {"indexed": true, "internalType": "uint256", "name": "raceId", "type": "uint256"},
        {"indexed": true, "internalType": "address", "name": "bettor", "type": "address"},
        {"indexed": false, "internalType": "uint32", "name": "amount", "type": "uint32"}
      ],
      "name": "WagerPlaced",
      "type": "event"
    },
    {
      "inputs": [
        {"internalType": "string", "name": "_name", "type": "string"},
        {"internalType": "string", "name": "_description", "type": "string"},
        {"internalType": "uint256", "name": "_duration", "type": "uint256"}
      ],
      "name": "createRace",
      "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {"internalType": "string", "name": "_name", "type": "string"}
      ],
      "name": "registerParticipant",
      "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {"internalType": "uint256", "name": "raceId", "type": "uint256"},
        {"internalType": "uint256", "name": "participantId", "type": "uint256"}
      ],
      "name": "addParticipantToRace",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {"internalType": "uint256", "name": "raceId", "type": "uint256"},
        {"internalType": "uint256", "name": "participantId", "type": "uint256"},
        {"internalType": "bytes", "name": "amount", "type": "bytes"},
        {"internalType": "bytes", "name": "inputProof", "type": "bytes"}
      ],
      "name": "placeWager",
      "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {"internalType": "uint256", "name": "raceId", "type": "uint256"},
        {"internalType": "bytes", "name": "winnerId", "type": "bytes"}
      ],
      "name": "finishRace",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {"internalType": "uint256", "name": "raceId", "type": "uint256"},
        {"internalType": "uint256", "name": "wagerId", "type": "uint256"},
        {"internalType": "bytes", "name": "encryptedWinnings", "type": "bytes"}
      ],
      "name": "distributeWinnings",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{"internalType": "uint256", "name": "raceId", "type": "uint256"}],
      "name": "getRaceInfo",
      "outputs": [
        {"internalType": "string", "name": "name", "type": "string"},
        {"internalType": "string", "name": "description", "type": "string"},
        {"internalType": "uint8", "name": "totalPool", "type": "uint8"},
        {"internalType": "uint8", "name": "participantCount", "type": "uint8"},
        {"internalType": "bool", "name": "isActive", "type": "bool"},
        {"internalType": "bool", "name": "isFinished", "type": "bool"},
        {"internalType": "address", "name": "organizer", "type": "address"},
        {"internalType": "uint256", "name": "startTime", "type": "uint256"},
        {"internalType": "uint256", "name": "endTime", "type": "uint256"}
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
} as const;
