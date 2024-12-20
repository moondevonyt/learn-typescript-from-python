var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("we some ghetto boys building AFI because we dont want wall street to try to lock us out");
// basic types - fimilar to pythons type hints
var moonName = "Moon Dev"; // in python mon_name: str = "moon dev"
var followers = 1000; // py: followers int = 1000 
var isStreaming = true; // py is_streamng: bool = True 
// print staatements with emojis
console.log("welcome ${moonName}!");
console.log("current followers: ${followers}");
console.log("streaming status: ${isStreaming}");
// arrays - two ways to define them 
var cryptoCoins = ['SOL', 'BONK', 'JUP'];
var prices = [70.42, 0.0000001, 1.23];
// using the interface
var solana = {
    name: "Solana",
    price: 70.42,
    isMemeCoin: false
};
// function with type annotations 
function analyzeCrypto(token) {
    console.log("mooon devs crypto analyzer processing ".concat(token.name, "..."));
    return "".concat(token.name, " is ").concat(token.isMemeCoin ? 'definitely' : 'not', " a memecoin!");
}
console.log('analsis result: ${analyzeCrypto(solana)}');
// union types - can be one of multipel types 
var priceOrNull = null;
console.log('current price: ${priceOrNull ?? "Not available"}');
// enums - smiilar to pythons enum class
var CoinNetwork;
(function (CoinNetwork) {
    CoinNetwork["Solana"] = "SOL";
    CoinNetwork["Ethereum"] = "ETH";
    CoinNetwork["Bitcoin"] = "BTC";
})(CoinNetwork || (CoinNetwork = {}));
// numeric enum (auto-incrementating)
var MemeLevel;
(function (MemeLevel) {
    MemeLevel[MemeLevel["Low"] = 0] = "Low";
    MemeLevel[MemeLevel["Medium"] = 1] = "Medium";
    MemeLevel[MemeLevel["High"] = 2] = "High";
    MemeLevel[MemeLevel["MoonDev"] = 3] = "MoonDev"; // obvi the highest 
})(MemeLevel || (MemeLevel = {}));
// string enum 
var TradeSignal;
(function (TradeSignal) {
    TradeSignal["Buy"] = "BUY";
    TradeSignal["Sell"] = "SELL";
    TradeSignal["Hold"] = "HODL";
})(TradeSignal || (TradeSignal = {}));
// using enums 
function analyzeTrade(signal, level) {
    console.log("Moon Dev Signal: ".concat(signal, " at meme level ").concat(level));
}
analyzeTrade(TradeSignal.Buy, MemeLevel.MoonDev);
// function using literal types 
function moonStatus(phase) {
    console.log("moon dev status: ".concat(phase, " moon"));
}
moonStatus("based"); // works 
// basic class - similar to python 
var CryptoWallet = /** @class */ (function () {
    // constructor is like pythons init w/ a default param for intial balance
    function CryptoWallet(owner, intitialBalance) {
        if (intitialBalance === void 0) { intitialBalance = 0; }
        this.owner = owner;
        this.balance = intitialBalance;
        console.log("moon devs wallet created for ".concat(owner));
    }
    // public method - anyone can call this 
    // void return type means the func doesnt return anything (like None in python)
    CryptoWallet.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("".concat(amount, " deposit! new balance ").concat(this.balance));
    };
    // protected method (accesible by child classes) 
    // only this class and children can call this
    CryptoWallet.prototype.getBalance = function () {
        return this.balance;
    };
    return CryptoWallet;
}());
// child class 
// inheritance - like pythoncs class Child(Parent)
var SolanaWallet = /** @class */ (function (_super) {
    __extends(SolanaWallet, _super);
    function SolanaWallet(owner) {
        // super() is like pythons super{}.__init__()
        var _this = _super.call(this, owner, 0) || this; // this calls the parents constructor
        _this.solTokens = []; // child class adds its own property, solTokens 
        console.log("solana wallet intialized for ".concat(owner));
        return _this;
    }
    // method using protected parent method
    // using parents protected get balance... can access public owner prop from parent... adds sol specific functionality 
    SolanaWallet.prototype.displayBalance = function () {
        console.log("".concat(this.owner, "s balance: ").concat(this.getBalance(), " SOL"));
    };
    // new method specific to solana wallet 
    SolanaWallet.prototype.addToken = function (token) {
        this.solTokens.push(token);
        console.log("added ".concat(token, " to walllet"));
    };
    return SolanaWallet;
}(CryptoWallet));
// using our classes
var moonWallet = new SolanaWallet("Moon Dev");
moonWallet.deposit(42.0); // uses parents method 
moonWallet.displayBalance(); // uses childs method 
moonWallet.addToken("BONK");
// moonWallet.balance // would cause an error cause its private
// moonWallet.getBalance() // would cause error protected
// basic function with type annotations
// function takes two parameters both must be numbers
// : number specifies return type 
function calculateProfit(buyPrice, sellPrice) {
    console.log("moon devs profit calc");
    return sellPrice - buyPrice;
}
// function with optional paramater (?)
// price? means this parameter is optional
// void means function returns None
// if (price ) checks if optional parameter was provided
// since ? price isnt needed
function logTrade(coin, amount, price) {
    console.log("moon dev trade log:");
    console.log("".concat(coin, ": ").concat(amount, " units"));
    if (price) {
        console.log("at ".concat(price, " each"));
    }
}
// default parameters (like python defailt args)
// can call this in multiple ways since there are default parameters
// createOrder(), createOrder('BONK'), or createOrder("BONK", 5)
// default values must be after required parameters
function createOrder(symbol, quantity) {
    if (symbol === void 0) { symbol = "SOL"; }
    if (quantity === void 0) { quantity = 1; }
    console.log("creating order: ".concat(quantity, "x ").concat(symbol));
}
// rest paramerters like pyton args
// ...amounts collects all args into an array  like *args in python 
// reduce is like ptyhons sum()
// can call with any number of args: sumInvestments(100, 200, 300)
function sumInvestments() {
    var amounts = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        amounts[_i] = arguments[_i];
    }
    console.log("calculating total investments...");
    return amounts.reduce(function (total, amount) { return total + amount; }, 0);
}
// type inference - typescript can guess the return type 
// no need to specifify : string return type
// ts figures it out from the return statement 
// still typesafe just more concise
function getTokenName(symbol) {
    return "moon devs ".concat(symbol, " token"); // typescript knows this returns string 
}
// arrow function with explicit typing 
// madern javascript/typescrip function syntax
// stored in a constant vartiable 
// types work the sae as regular functions 
// => is like pythons lambda but more powerful 
var calculateROI = function (investment, returns) {
    var roi = ((returns - investment) / investment) * 100;
    return "roi ".concat(roi, "%");
};
function processTransaction(id) {
    console.log("processing transaction: ".concat(id));
}
// using our functions 
logTrade("BONK", 1000); // price is optional 
logTrade("SOL", 10, 69.42); // all parameters
createOrder(); // uses default values
console.log(sumInvestments(100, 200, 300)); // rest parameters -- multiple args collected
console.log(getTokenName("BONK")); // type interface in action
console.log(calculateROI(1000, 1500)); // arrow function 
processTransaction(123); // works with number overload 
processTransaction("TX123"); // works with string overload
// type guard using typeof 
function processAmount(amount) {
    console.log("moon dev checking amount type");
    if (typeof amount === "string") {
        // typescript knows amount is string here
        console.log("converting string \"".concat(amount, "\" to number"));
        return parseFloat(amount);
    }
    else {
        // typescript knows amount is number here
        console.log("amount is already a number: ".concat(amount));
        return amount;
    }
}
// custom type guard using is 
function isSolanaAsset(asset) {
    console.log("moon dev checking if ".concat(asset.symbol, " is on solanan..."));
    return asset.network === "Solana";
}
// using instanceof for class checking
var SolanaToken = /** @class */ (function () {
    function SolanaToken(symbol) {
        this.symbol = symbol;
        console.log("moon dev: created solaanana token ".concat(symbol));
    }
    return SolanaToken;
}());
var EthereumToken = /** @class */ (function () {
    function EthereumToken(symbol) {
        this.symbol = symbol;
        console.log("moon dv: create ethereum token ".concat(symbol));
    }
    return EthereumToken;
}());
// fucntion using instanceof type guard 
function processToken(token) {
    console.log("processing token..");
    if (token instanceof SolanaToken) {
        console.log("processing solana token: ".concat(token.symbol));
    }
    else {
        // typescript knows its ethereumToken here
        console.log("processing eth token ".concat(token.symbol));
    }
}
// using the type guards 
var amount1 = "100.5";
var amount2 = 42.0;
console.log(processAmount(amount1));
console.log(processAmount(amount2));
var asset1 = { symbol: "BONK", amount: 1000000, network: "Solana" };
var asset2 = { symbol: "PEPE", amount: 100 };
if (isSolanaAsset(asset1)) {
    // typescript knows asset1.network isn "Solana" here 
    console.log("".concat(asset1.symbol, " is on ").concat(asset1.network));
}
var solToken = new SolanaToken("BONK");
var ethToken = new EthereumToken("ETH");
processToken(solToken);
processToken(ethToken);
