// utility functions 
// first we import what we need from types.ts 
import { Token, TradeType } from './types';


// utility function 1: format a numer as usd 
export function formatPrice(price: number): string {
    console.log(`moon devs price formatter`)
    return `$${price.toFixed(2)}` // returns price with 2 decimal places
    
}

// utility function 2: calculate totla valye
export function calculateTotal(token: Token, amount: number): number {
    console.log(`moon devs total calc`)
    return token.price *amount
}

// these exported funcs can be imported by other files
// like pytons from utils import formatPrice, calculateTotal 

