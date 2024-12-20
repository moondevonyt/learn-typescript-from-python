// first we need to install type defs
// pnpm add -D @types/node @solana/web3.js @types/bs58 


// importing from a typed library 
import { Connection, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';

// importing a library that might need seprate type definitintions 
import bs58 from 'bs58'; // example of lib that might not have types

// define types for a libraty witout type defs 
// creating types for a lib that doesnt have them 
// declare module tells typescript about types for an external module 
declare module 'some-crypto-lib' {
    // define what response should look like 
    export interface CryptoResponse {
        price: number; 
        volume: number;
    }

    // define function signature
    export function getPrices(): Promise<CryptoResponse>;
}

// using a well typed library (@solana/web3.js)
async function checkBalance(address: string) {
    console.log(`moon dev checking balance for ${address}...`)

        // connects to sol network 
    const connection = new Connection('https://api.mainnet-beta.solana.com');
    // converts string ady to publick key obj
    const pubKey = new PublicKey(address);

    try {
        // get balance in lamports 
        const balance = await connection.getBalance(pubKey);
        // convert lamports to sol 
        console.log(`balance: ${balance / LAMPORTS_PER_SOL} SOL`);
    } catch (error) {
        console.error(`moon dev error: ${error}`);
    }
}

// example of handling libraries without type defintiions 
// we create a .d.ts file or inline declariotn 
declare function customCryptoFunction(input: string): Promise<number>;

// fucntion using the declared type 
async function processCustomCrypto(input: string) {
    console.log(`moon dev processing custom crypto...`);
    try {
        const result = await customCryptoFunction(input);
        return result;
    } catch (error) {
        console.error(`moon dev error: ${error}`);
        return 0;
    }
}

// using the types
// define out transaction type 
interface MoonDevTransactin {
    signature: string; 
    amount: number;
}

// example function using multiple libraries
// function using multiple libraries together 
async function processTx(tx: MoonDevTransactin) {
    console.log(`moon dev processing transaction... `);

    // using typed library 
    // using bs58 to decode signature
    const decoded = bs58.decode(tx.signature);

    // using our custom type definiteions 
    // check balance using our earlier function 
    await checkBalance(tx.signature);

    // returns combined results 
    return {
        decoded: decoded, 
        amount: tx.amount
    };
}

