var amountDollar = 64;
var dollarRate = 4.91;
var amountEuro = 64;
var euroRate = 5.25;
var amountBitcoin = 2;
var bitcoinRate = 181131.15;
var personName = "Dev";

var amountRealDollar = amountDollar * dollarRate;
var amountRealBitcoin = amountBitcoin / bitcoinRate;
var amountRealEuro = amountEuro * euroRate;

amountRealDollar = amountRealDollar.toFixed(2);
amountRealBitcoin = amountRealBitcoin.toFixed(6);
amountRealEuro = amountRealEuro.toFixed(2);

alert(
  "Olá, " +
    personName +
    "! Os valores convertidos ficam assim:" +
    "\nDe USD$ para R$ = R$" +
    amountRealDollar +
    "\nDe BTC para R$ = R$" +
    amountRealBitcoin +
    "\nDe € para R$ = R$" +
    amountRealEuro
);
