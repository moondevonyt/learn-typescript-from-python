import { Token, TradeType, Network } from './types';
import { formatPrice, calculateTotal } from './utils';

// default export (only one per file) - main class of this module
export default class TradingBot { 
    // private means this property is only accesible inside the class
    constructor(private network: Network) {
        console.log(`moon devs trading bot intialized on ${network}`)
    }

    executeTrade(token: Token, type: TradeType, amount: number): void {
        const total = calculateTotal(token, amount)
        console.log(`
            moon dev trade alert:
            ${type} ${amount} ${token.symbol}
            price: ${formatPrice(token.price)}
            total: ${formatPrice(total)}
            network: ${this.network}
        
            `)
    }
}

// named exports can exist alongside default export
// additional named export - helper function 
export function validateToken(token: Token): boolean {
    console.log(`moon dev token validator`)
    return token.price > 0 && token.symbol.length > 0 
}

// this file has both default and named exports 
// in python this iwould be like having a main class and utility functions 