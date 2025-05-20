const sum = (a, b) => {
    return a + b;
}

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = (dollar) => {
    let yen = (dollar / oneEuroIs.USD) * oneEuroIs.JPY;
    // primero paso a euro
    let truncoYen = Math.floor(yen * 100) / 100;

    return truncoYen
}


const fromYenToPound = (yen) => {
    let pound = (yen / oneEuroIs.JPY) * oneEuroIs.GBP;
    // primero paso a euro  

    let truncoPound = Math.floor(pound * 1000) / 1000;

    return truncoPound
}

console.log(sum(7, 3) + fromDollarToYen(1), fromEuroToDollar(1), fromYenToPound(1));

module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };