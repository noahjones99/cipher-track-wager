import { useReadContract, useWriteContract, useAccount } from 'wagmi';
import { CONTRACT_ADDRESSES, CONTRACT_ABIS } from '../lib/contracts';

export const useCipherTrackWager = () => {
  const { address } = useAccount();
  const { writeContract } = useWriteContract();

  // Create Race
  const createRace = async (name: string, description: string, duration: number) => {
    return writeContract({
      address: CONTRACT_ADDRESSES.CipherTrackWager,
      abi: CONTRACT_ABIS.CipherTrackWager,
      functionName: 'createRace',
      args: [name, description, duration],
    });
  };

  // Register Participant
  const registerParticipant = async (name: string) => {
    return writeContract({
      address: CONTRACT_ADDRESSES.CipherTrackWager,
      abi: CONTRACT_ABIS.CipherTrackWager,
      functionName: 'registerParticipant',
      args: [name],
    });
  };

  // Add Participant to Race
  const addParticipantToRace = async (raceId: number, participantId: number) => {
    return writeContract({
      address: CONTRACT_ADDRESSES.CipherTrackWager,
      abi: CONTRACT_ABIS.CipherTrackWager,
      functionName: 'addParticipantToRace',
      args: [raceId, participantId],
    });
  };

  // Place Wager
  const placeWager = async (raceId: number, participantId: number, amount: string, inputProof: string) => {
    return writeContract({
      address: CONTRACT_ADDRESSES.CipherTrackWager,
      abi: CONTRACT_ABIS.CipherTrackWager,
      functionName: 'placeWager',
      args: [raceId, participantId, amount, inputProof],
      // No value transfer - all handled through encrypted contract state
    });
  };

  // Finish Race
  const finishRace = async (raceId: number, winnerId: string) => {
    return writeContract({
      address: CONTRACT_ADDRESSES.CipherTrackWager,
      abi: CONTRACT_ABIS.CipherTrackWager,
      functionName: 'finishRace',
      args: [raceId, winnerId],
    });
  };

  // Distribute Winnings
  const distributeWinnings = async (raceId: number, wagerId: number, encryptedWinnings: string) => {
    return writeContract({
      address: CONTRACT_ADDRESSES.CipherTrackWager,
      abi: CONTRACT_ABIS.CipherTrackWager,
      functionName: 'distributeWinnings',
      args: [raceId, wagerId, encryptedWinnings],
    });
  };

  return {
    createRace,
    registerParticipant,
    addParticipantToRace,
    placeWager,
    finishRace,
    distributeWinnings,
    address,
  };
};

export const useRaceInfo = (raceId: number) => {
  const { data, isLoading, error } = useReadContract({
    address: CONTRACT_ADDRESSES.CipherTrackWager,
    abi: CONTRACT_ABIS.CipherTrackWager,
    functionName: 'getRaceInfo',
    args: [raceId],
  });

  return {
    raceInfo: data,
    isLoading,
    error,
  };
};
