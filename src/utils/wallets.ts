export const WALLET_ADDRESSES = {
  ADMIN: '7HpacqP8F5EiZZgsGv4aQ5UwBUijcKHq65vbf3fa3GA7',
  PLATFORM_FEE: 'DUkcBKmZEWFAfCqcUW6EvQPLdCDj4tej6eQ4CQ8zKFcn',
  ESCROW: '4bdgups27anmpz3j1VP1RfiFwCUFxh9jREvtoX9sXaza',
} as const;

export const RAFFLE_CONFIG = {
  ENTRY_FEE: 0.035, // SOL
  PLATFORM_FEE_PERCENTAGE: 3.50,
  CREATOR_FEE_PERCENTAGE: 1.50,
  TOTAL_FEE_PERCENTAGE: 5.00,
} as const;

export const TOKENOMICS = {
  TOTAL_SUPPLY: 888_888_888,
  ALLOCATIONS: {
    RAFFLE_PARTICIPANTS: 69.00,
    LIQUIDITY_POOL: 18.62,
    TEAM_CREATOR: 8.88,
    POPPERS_TREASURY: 3.50,
  },
} as const;

export const POPPER_TAX = {
  TOTAL: 3.50,
  BREAKDOWN: {
    LIQUIDITY_POOL: 1.50,
    STAKERS: 0.75,
    TOKEN_CREATOR: 0.50,
    JACKPOT_FUND: 0.75,
  },
} as const;

/**
 * Distribute raffle entry fees according to the official split:
 * - 3.50% to platform treasury (hardcoded)
 * - 1.50% to raffle creator (dynamic)
 *
 * @param ticketPrice Ticket price in SOL
 * @param creatorWallet Raffle creator's wallet address
 */
export function distributeRaffleFees(ticketPrice: number, creatorWallet: string) {
  const treasuryWallet = WALLET_ADDRESSES.PLATFORM_FEE;
  const treasuryPercent = 3.5;
  const creatorPercent = 1.5;
  const totalPercent = treasuryPercent + creatorPercent;

  const treasuryAmount = (ticketPrice * treasuryPercent) / 100;
  const creatorAmount = (ticketPrice * creatorPercent) / 100;

  // Log the split (replace with real Solana transaction logic later)
  console.log('--- Raffle Fee Distribution ---');
  console.log(`Total Ticket Price: ${ticketPrice} SOL`);
  console.log(`Treasury (${treasuryPercent}%): ${treasuryAmount} SOL → ${treasuryWallet}`);
  console.log(`Creator (${creatorPercent}%): ${creatorAmount} SOL → ${creatorWallet}`);
  console.log('-------------------------------');

  // TODO: Replace with real Solana transaction logic
  // sendSol(treasuryWallet, treasuryAmount);
  // sendSol(creatorWallet, creatorAmount);

  return {
    treasury: { wallet: treasuryWallet, amount: treasuryAmount },
    creator: { wallet: creatorWallet, amount: creatorAmount },
  };
} 