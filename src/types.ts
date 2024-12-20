// shared types and interfaces
// these are shared type defs that other files can import 
export interface Token {
    symbol: string;
    price: number; 
}

// can only be solana or ethereum 
export type Network = "Solana" | "Ethereum"; 

// Enum can be exported too 
export enum TradeType {
    BUY = "BUY",
    SELL = "SELL"
}
/// the export keword makes these available to other files 
// similar to pythons __all__ = ['token', 'network']

