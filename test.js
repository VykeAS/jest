// Import the function sum from the app.js file
const { sum, fromDollarToYen, fromYenToPound, fromEuroToDollar } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    expect(total).toBe(23);
});

test('convertir un dollar a yen = 146.26', () => {
    
    let yen = fromDollarToYen(1);

    expect(yen).toBe(146.26);
});

test('convertir un euro a dollar = 1.07', () => {
    let dollar = fromEuroToDollar(1);

    expect(dollar).toBe(1.07);
});

test('convertir un yen a pound = 0.005', () => {
    let pound = fromYenToPound(1);

    expect(pound).toBe(0.005); 
});
