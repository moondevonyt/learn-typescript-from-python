console.log("we some ghetto boys building AFI because we dont want wall street to try to lock us out")


// basic types - fimilar to pythons type hints
let moonName: string = "Moon Dev" // in python mon_name: str = "moon dev"
let followers: number = 1000 // py: followers int = 1000 
let isStreaming: boolean = true // py is_streamng: bool = True 

// print staatements with emojis
console.log("welcome ${moonName}!")
console.log("current followers: ${followers}")
console.log("streaming status: ${isStreaming}")

// arrays - two ways to define them 
let cryptoCoins: string[] = ['SOL', 'BONK', 'JUP'] 
let prices: Array<number> = [70.42, 0.0000001, 1.23]

// interface - similar to python typedict or dataclass
interface CryptoToken{
    name: string;
    price: number;
    isMemeCoin?: boolean; // ? means its an optional property 
}

// using the interface
const solana: CryptoToken = {
    name: "Solana",
    price: 70.42, 
    isMemeCoin: false
}

// function with type annotations 
function analyzeCrypto(token: CryptoToken): string {
    console.log(`mooon devs crypto analyzer processing ${token.name}...`)
    return `${token.name} is ${token.isMemeCoin ? 'definitely' : 'not'} a memecoin!`
}

console.log('analsis result: ${analyzeCrypto(solana)}')

// union types - can be one of multipel types 
let priceOrNull: number | null = null 
console.log('current price: ${priceOrNull ?? "Not available"}')

// enums - smiilar to pythons enum class
enum CoinNetwork {
    Solana = 'SOL',
    Ethereum = 'ETH',
    Bitcoin = "BTC"
}

// numeric enum (auto-incrementating)
enum MemeLevel {
    Low, // 0 
    Medium, // 1 
    High, // 2 
    MoonDev // obvi the highest 
}

// string enum 
enum TradeSignal {
    Buy = 'BUY', 
    Sell = 'SELL', 
    Hold = 'HODL' 
}

// using enums 
function analyzeTrade(signal: TradeSignal, level: MemeLevel): void {
    console.log(`Moon Dev Signal: ${signal} at meme level ${level}`)
}

analyzeTrade(TradeSignal.Buy, MemeLevel.MoonDev)

// literal types - more pricise than just string or number
type MoonPhase = "new" | "full" | "based"
type AcceptedNumber = 1 | 2 | 3 | 69 | 420

// function using literal types 
function moonStatus(phase: MoonPhase): void {
    console.log(`moon dev status: ${phase} moon`)
}

moonStatus("based") // works 

// basic class - similar to python 
class CryptoWallet {
    
    // private fields use # in in TS (like pythons _private)
    // prvaite means only the crupto wallet class can access balance 
    private balance: number;

    // public fields are accessible from outside
    // public readonly means anyone can read owner but no one can mod it 
    public readonly owner: string;

        // constructor is like pythons init w/ a default param for intial balance
    constructor(owner: string, intitialBalance: number = 0) {
        this.owner = owner;
        this.balance = intitialBalance; 
        console.log(`moon devs wallet created for ${owner}`)
    }

    // public method - anyone can call this 
    // void return type means the func doesnt return anything (like None in python)
    public deposit(amount: number): void {
        this.balance += amount; 
        console.log(`${amount} deposit! new balance ${this.balance}`)
    }

    // protected method (accesible by child classes) 
     // only this class and children can call this
    protected getBalance(): number { 
        return this.balance; 
    }

}

// child class 
// inheritance - like pythoncs class Child(Parent)
class SolanaWallet extends CryptoWallet {
    private solTokens: string[];

    constructor(owner: string) {
        // super() is like pythons super{}.__init__()
        super(owner,0); // this calls the parents constructor
        this.solTokens = []; // child class adds its own property, solTokens 
        console.log(`solana wallet intialized for ${owner}`)
    }

    // method using protected parent method
    // using parents protected get balance... can access public owner prop from parent... adds sol specific functionality 
    public displayBalance(): void {
        console.log(`${this.owner}s balance: ${this.getBalance()} SOL`)
    }

    // new method specific to solana wallet 
    public addToken(token: string): void {
        this.solTokens.push(token);
        console.log(`added ${token} to walllet`)
    }
}

// using our classes
const moonWallet = new SolanaWallet("Moon Dev");
moonWallet.deposit(42.0); // uses parents method 
moonWallet.displayBalance(); // uses childs method 
moonWallet.addToken("BONK"); 
// moonWallet.balance // would cause an error cause its private
// moonWallet.getBalance() // would cause error protected




// basic function with type annotations
// function takes two parameters both must be numbers
// : number specifies return type 
function calculateProfit(buyPrice: number, sellPrice: number): number {
    console.log(`moon devs profit calc`)
    return sellPrice - buyPrice 
}

// function with optional paramater (?)
// price? means this parameter is optional
// void means function returns None
// if (price ) checks if optional parameter was provided
// since ? price isnt needed
function logTrade(coin: string, amount: number, price?: number): void {
    console.log(`moon dev trade log:`)
    console.log(`${coin}: ${amount} units`)
    if (price) {
        console.log(`at ${price} each`)
    }
}

// default parameters (like python defailt args)
// can call this in multiple ways since there are default parameters
// createOrder(), createOrder('BONK'), or createOrder("BONK", 5)
// default values must be after required parameters
function createOrder(symbol: string = "SOL", quantity: number =1): void {
    console.log(`creating order: ${quantity}x ${symbol}`)
}

// rest paramerters like pyton args
// ...amounts collects all args into an array  like *args in python 
// reduce is like ptyhons sum()
// can call with any number of args: sumInvestments(100, 200, 300)
function sumInvestments(...amounts: number[]): number {
    console.log(`calculating total investments...`)
    return amounts.reduce((total, amount) => total + amount, 0)
}

// type inference - typescript can guess the return type 
// no need to specifify : string return type
// ts figures it out from the return statement 
// still typesafe just more concise
function getTokenName(symbol: string) { // return type inferred as string 
    return `moon devs ${symbol} token` // typescript knows this returns string 
}

// arrow function with explicit typing 
// madern javascript/typescrip function syntax
// stored in a constant vartiable 
// types work the sae as regular functions 
// => is like pythons lambda but more powerful 
const calculateROI = (investment: number, returns: number): string => {
    const roi = ((returns - investment)/ investment) * 100 
    return `roi ${roi}%`
}

// function overloads - diff parameter combos
// allows same function name with diff aprameter types
// first two lines are signatures (like function headers)
// last part is implemntation tht handles both types
// can call with number or string processTransaction(123) or processTransaction("TX123")
// no direct python equivalent (python uses duck typing instead)
function processTransaction(id: number): void; 
function processTransaction(id: string): void; 
function processTransaction(id: number | string): void {
    console.log(`processing transaction: ${id}`)
}

// using our functions 
logTrade("BONK", 1000) // price is optional 
logTrade("SOL", 10, 69.42) // all parameters
createOrder() // uses default values
console.log(sumInvestments(100, 200, 300)) // rest parameters -- multiple args collected
console.log(getTokenName("BONK")) // type interface in action
console.log(calculateROI(1000, 1500)) // arrow function 
processTransaction(123) // works with number overload 
processTransaction("TX123") // works with string overload

// type narrowing examples

// union type - can be diff types either a string or number
type CryptoAmount = string | number; 

// object type with option property
type CryptoAsset = {
    symbol: string; // required: toke symbol
    amount: CryptoAmount; // required: can be string or number
    network?: string;  // optional property 
}

// type guard using typeof 
function processAmount(amount: CryptoAmount): number {
    console.log(`moon dev checking amount type`)

    // typeof checks the runtime type
    if (typeof amount === "string") {
        // typescript knows amount is string here
        console.log(`converting string "${amount}" to number`)
        return parseFloat(amount) // converts string to number
    } else {
        // typescript knows amount is number here
        console.log(`amount is already a number: ${amount}`)
        return amount 
    }
}

// custom type guard using is 
// the is keyword tells typescript " of this returns true, the asset has network "solana"'
function isSolanaAsset(asset: CryptoAsset): asset is CryptoAsset & { network: "Solana"} {
    console.log(`moon dev checking if ${asset.symbol} is on solanan...`)
    return asset.network === "Solana"
}

// using instanceof for class checking
class SolanaToken {
    // public in construtor creates and assigns the property automatcally 
    constructor(public symbol: string) {
        console.log(`moon dev: created solaanana token ${symbol}`)
    }
}

class EthereumToken {
    constructor(public symbol: string) {
        console.log(`moon dv: create ethereum token ${symbol}`)
    }
}

// fucntion using instanceof type guard 
function processToken(token: SolanaToken | EthereumToken) {
    console.log(`processing token..`)

    // instanceof checks if object is instance of a class
    if (token instanceof SolanaToken) {
        // typescript knows this is a solana token here
        console.log(`processing solana token: ${token.symbol}`)
    } else {
        // typescript knows its ethereumToken here
        console.log(`processing eth token ${token.symbol}`)
    }
}

// using the type guards 
const amount1: CryptoAmount = "100.5" // string number
const amount2: CryptoAmount = 42.0 // numebr amount

console.log(processAmount(amount1)) // will conver string to a number
console.log(processAmount(amount2)) // will use number directly

// testing custom type guard
// const asset1: CryptoAsset = { symbol: "BONK", amount: 1000000, network: "Solana"}

// above can also be like below
const asset1: CryptoAsset = { 
    symbol: "BONK", 
    amount: 1000000, 
    network: "Solana"
}

const asset2: CryptoAsset = { symbol: "PEPE", amount: 100}

if (isSolanaAsset(asset1)) {
    // typescript knows asset1.network isn "Solana" here 
    console.log(`${asset1.symbol} is on ${asset1.network}`)
}

const solToken = new SolanaToken("BONK")
const ethToken = new EthereumToken("ETH")
processToken(solToken)
processToken(ethToken)

// GOING TO MAKE A FEW FILES IN ORDER TO LEARN ABOUT MODULES AND NAMESPACES

import TradingBot, { validateToken } from './trading';

import { Token, TradeType, Network } from './types';

// create a token object that matches token interface 
const bonk: Token = {
    symbol: "BONK", 
    price: 0.000001
}

// use the imported functions and classes 
if (validateToken(bonk)) {
    const bot = new TradingBot("Solana")
    bot.executeTrade(bonk, TradeType.BUY, 100000)
}