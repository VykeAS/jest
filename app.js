const sum = (a, b) => {
    return a + b;
}

let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen = (dollar) => {
    let yen = (dollar / oneEuroIs.USD) * oneEuroIs.JPY;
    let bigYen = Math.floor(yen * 100) / 100;
    return bigYen
}


const fromYenToPound = (yen) => {
    let pound = (yen / oneEuroIs.JPY) * oneEuroIs.GBP;
    let bigPound = Math.floor(pound * 1000) / 1000;
    return bigPound
}

console.log(sum(7, 3) + fromDollarToYen(1), fromEuroToDollar(1), fromYenToPound(1));

module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };
