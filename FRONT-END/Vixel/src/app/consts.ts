import { HexString } from '@gear-js/api';

interface ContractSails {
  programId: HexString,
  idl: string
}

export const ACCOUNT_ID_LOCAL_STORAGE_KEY = 'account';

export const ADDRESS = {
  NODE: import.meta.env.VITE_NODE_ADDRESS,
  BACK: import.meta.env.VITE_BACKEND_ADDRESS,
  GAME: import.meta.env.VITE_CONTRACT_ADDRESS as HexString,
};

export const ROUTES = {
  HOME: '/',
  EXAMPLES: '/examples',
  NOTFOUND: '*',
};

// To use the example code, enter the details of the account that will pay the vouchers, etc. (name and mnemonic)
// Here, you have an example account that contains tokens, in your dApp, you need to put a sponsor name
// and a sponsor mnemonic
export const sponsorName = 'Alice';
export const sponsorMnemonic = 'bottom drive obey lake curtain smoke basket hold race lonely fit walk';
// El CONTRACT_DATA solo es un ejemplo de este template, ya que es un contrato inteligente de vara para hacer las transacciones de prueba, en cambio los otros dos son mios, utilizando asi vft, porque eso me sirva

export const VIXEL_CONTRACT: ContractSails = {
  programId: '0xd6e4e6bffa2a48886f235625d80c02c4c899d981a0daee5a51f8fa27baf63a0b',
  idl: `
  type CheemsScapeEvents = enum {
  ScoreRegistred: struct { message: str, id_actor: actor_id, score: u32 },
  PlayerDontHaveEnoughScore,
  FirstTeenBestPlayers: vec DataPlayerCheemsScape,
};

type DataPlayerCheemsScape = struct {
  address: actor_id,
  username: str,
  score: u32,
};

type VixelcoinSystemEvents = enum {
  UserRegistred: struct { message: str, actor_id: actor_id, username: str },
  VixecoinsBought: struct { message: str, actor_id: actor_id, username: str, vara_amount: u128, vixelcoin_bought: u128, total_vixelcoin: u128 },
  VixelcoinsEarned: struct { message: str, actor_id: actor_id, vixelcoins_amount: u128 },
  VarasBought: struct { message: str, actor_id: actor_id, username: str, vixelcoin_amount: u128, vara_bought: u128, total_vixelcoin: u128 },
  VixelcoinsSpended: u128,
  VarasTransfered: struct { message: str, from: actor_id, to: actor_id, vixelcoin_amount: u128 },
  SeeUser: struct { actor_id: actor_id, username: str, total_vixelcoins: u128 },
  SeeBalanceOfTheProgram: struct { vixelcoins: u128, varas: u128 },
  VixelcoinsAdded: u128,
  VixelcoinsBurned: u128,
  Error: VixelCoinSystemErrors,
};

type VixelCoinSystemErrors = enum {
  UserNotFound,
  UserExists,
  WithoutSomeInputs,
  MustBeGreaterThan0,
  InsuficentBalanceInTheContract: u128,
  InsuficentBalanceOfVixelcoinsInTheContract,
  InsuficentVixelcoins: u128,
  ErrorInTheTransaction,
  StateNotInicializated,
};

type WhaleXPaceEvents = enum {
  ScoreRegistred: struct { message: str, id_actor: actor_id, score: u32 },
  PlayerDontHaveEnoughScore,
  FirstTeenBestPlayers: vec DataPlayerWhaleXPace,
};

type DataPlayerWhaleXPace = struct {
  address: actor_id,
  username: str,
  score: u32,
};

constructor {
  New : (vixel_coins: u128);
};

service CheemsCapeServices {
  SetScore : (username: str, score: u32) -> CheemsScapeEvents;
  query GetFirstTeenPlayers : () -> CheemsScapeEvents;
};

service VixelcoinSystem {
  AddVixelcoinsToTheContract : (amount_of_vixelcoins: u128) -> VixelcoinSystemEvents;
  BurnVixelcoinsToTheContract : (amount_of_vixelcoins: u128) -> VixelcoinSystemEvents;
  BuyVixelcoins : () -> VixelcoinSystemEvents;
  EarnAwardOfVixelcoins : (amount_of_vixelcoins: u128) -> VixelcoinSystemEvents;
  RegisterUser : (user_name: str) -> VixelcoinSystemEvents;
  SellVixelcoins : (amount_of_vixelcoins: u128) -> VixelcoinSystemEvents;
  SpendVixelcoinsInTheSystem : (amount_of_vixelcoins: u128) -> VixelcoinSystemEvents;
  TransferVixelcoins : (amount_of_vixelcoins: u128, destinatary: actor_id) -> VixelcoinSystemEvents;
  query SeeVixelcoinsOfAnUser : (adress: actor_id) -> VixelcoinSystemEvents;
  query SeeVixelcoinsOfTheProgram : () -> VixelcoinSystemEvents;
};

service WhaleXPaceServices {
  SetScore : (username: str, score: u32) -> WhaleXPaceEvents;
  query GetFirstTeenPlayers : () -> WhaleXPaceEvents;
};


  `
};

export const CONTRACT_DATA: ContractSails = {
  programId: '0x615556ca4bb31c9b3b9a5c30b20e110ffd51ffc78784308ea6ac2f9fbac13aa5',
  idl: `
    type KeyringData = struct {
      address: str,
      encoded: str,
    };

    type KeyringEvent = enum {
      KeyringAccountSet,
      Error: KeyringError,
    };

    type KeyringError = enum {
      KeyringAddressAlreadyEsists,
      UserAddressAlreadyExists,
      UserCodedNameAlreadyExists,
      UserDoesNotHasKeyringAccount,
      KeyringAccountAlreadyExists,
      SessionHasInvalidCredentials,
      UserAndKeyringAddressAreTheSame,
    };

    type PingEvent = enum {
      Ping,
      Pong,
      KeyringError: KeyringError,
    };

    type KeyringQueryEvent = enum {
      LastWhoCall: actor_id,
      SignlessAccountAddress: opt actor_id,
      SignlessAccountData: opt KeyringData,
    };

    constructor {
      New : ();
    };

    service KeyringService {
      BindKeyringDataToUserAddress : (user_address: actor_id, keyring_data: KeyringData) -> KeyringEvent;
      BindKeyringDataToUserCodedName : (user_coded_name: str, keyring_data: KeyringData) -> KeyringEvent;
    };

    service Ping {
      Ping : () -> PingEvent;
      PingNoWallet : (user_coded_name: str) -> PingEvent;
      PingSignless : (user_address: actor_id) -> PingEvent;
      Pong : () -> PingEvent;
      PongNoWallet : (user_coded_name: str) -> PingEvent;
      PongSignless : (user_address: actor_id) -> PingEvent;
    };

    service QueryService {
      query LastCaller : () -> actor_id;
      query KeyringAccountData : (keyring_address: actor_id) -> KeyringQueryEvent;
      query KeyringAddressFromUserAddress : (user_address: actor_id) -> KeyringQueryEvent;
      query KeyringAddressFromUserCodedName : (user_coded_name: str) -> KeyringQueryEvent;
    };
  `
};

export const CONTRACT_MANAGER_DATA: ContractSails = {
  programId: '0x822489c083f9b8d6bb895681a33092e010a1b335f421258efab3cd7e353222a6',
  idl: `
    type MiniDexsEvents = enum {
  RefundOfVaras: u128,
  VFTContractIdSet,
  MinTokensToAddSet,
  TokensAdded,
  SetTokensPerVaras,
  TotalSwapInVaras: u128,
  TokensSwapSuccessfully: struct { total_tokens: u128, total_varas: u128 },
  Error: MiniDexsErrors,
};

type MiniDexsErrors = enum {
  MinTokensToAdd: u128,
  CantSwapTokens: struct { tokens_in_vft_contract: u256 },
  CantSwapUserTokens: struct { user_tokens: u256, tokens_to_swap: u256 },
  ContractCantMint,
  CantSwapTokensWithAmount: struct { min_amount: u128, actual_amount: u128 },
  OnlyOwnerCanDoThatAction,
  VftContractIdNotSet,
  ErrorInVFTContract,
  ErrorInGetNumOfVarasToSwap,
  OperationWasNotPerformed,
};

type MiniDexsQueryEvents = enum {
  ContractBalanceInVaras: u128,
  UserTotalTokensAsU128: u128,
  UserTotalTokens: u256,
  TotalTokensToSwap: u256,
  TotalTokensToSwapAsU128: u128,
  TokensToSwapOneVara: u128,
  NumOfTokensForOneVara: u128,
  Error: MiniDexsErrors,
};

constructor {
  New : ();
  NewWithData : (vft_contract_id: opt actor_id, min_tokens_to_add: u128, tokens_per_vara: u128);
};

service MiniDeXs {
  /// ## Add an amount of tokens to the vft contract for this contract
  /// Only the contract owner can perform this action
  AddTokensToContract : (tokens_to_add: u128) -> MiniDexsEvents;
  /// ## Change the minimum number of tokens to add to the contract
  /// Only the contract owner can perform this action
  SetMinTokensToAdd : (min_tokens_to_add: u128) -> MiniDexsEvents;
  /// ## Change the number of tokens to exchange for one rod
  /// Only the contract owner can perform this action
  SetTokensPerVara : (tokens_per_vara: u128) -> MiniDexsEvents;
  /// ## Change vft contract id
  /// Only the contract owner can perform this action
  SetVftContractId : (vft_contract_id: actor_id) -> MiniDexsEvents;
  /// ## Swap Varas for tokens
  /// Receive a certain amount of varas and then make a swap for a certain number of tokens
  SwapTokensByNumOfVaras : () -> MiniDexsEvents;
  /// ## Swap tokens for Varas
  SwapTokensToVaras : (amount_of_tokens: u128) -> MiniDexsEvents;
  /// ## Varas stored in contract
  query ContractTotalVarasStored : () -> MiniDexsQueryEvents;
  query TokensToSwapOneVara : () -> MiniDexsQueryEvents;
  /// ## Returns the total number of tokens in the contract (In U256 format)
  query TotalTokensToSwap : () -> MiniDexsQueryEvents;
  /// ## Returns the total number of tokens in the contract (In u128 format)
  query TotalTokensToSwapAsU128 : () -> MiniDexsQueryEvents;
};
  `
};

export const VFT_MANAGER_DATA: ContractSails = {
  programId: '0x822489c083f9b8d6bb895681a33092e010a1b335f421258efab3cd7e353222a6',
  idl: `
    constructor {
  New : (name: str, symbol: str, decimals: u8);
};

service Vft {
  Burn : (from: actor_id, value: u256) -> bool;
  GrantAdminRole : (to: actor_id) -> null;
  GrantBurnerRole : (to: actor_id) -> null;
  GrantMinterRole : (to: actor_id) -> null;
  Mint : (to: actor_id, value: u256) -> bool;
  RevokeAdminRole : (from: actor_id) -> null;
  RevokeBurnerRole : (from: actor_id) -> null;
  RevokeMinterRole : (from: actor_id) -> null;
  Approve : (spender: actor_id, value: u256) -> bool;
  Transfer : (to: actor_id, value: u256) -> bool;
  TransferFrom : (from: actor_id, to: actor_id, value: u256) -> bool;
  query Admins : () -> vec actor_id;
  query Burners : () -> vec actor_id;
  query Minters : () -> vec actor_id;
  query Allowance : (owner: actor_id, spender: actor_id) -> u256;
  query BalanceOf : (account: actor_id) -> u256;
  query Decimals : () -> u8;
  query Name : () -> str;
  query Symbol : () -> str;
  query TotalSupply : () -> u256;

  events {
    Minted: struct { to: actor_id, value: u256 };
    Burned: struct { from: actor_id, value: u256 };
    Approval: struct { owner: actor_id, spender: actor_id, value: u256 };
    Transfer: struct { from: actor_id, to: actor_id, value: u256 };
  }
};
  `
};