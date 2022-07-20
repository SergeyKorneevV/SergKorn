const { Calculator } = require('../function');
const { cases } = require('jasmine-parameterized');
beforeAll (async() => {
    console.log('Tests calculator')
});
const calc = new Calculator;
const resAdd = calc.add (1,2,3);
let resMult = calc.multiply (4,2,3);
describe(`Check Add functionality1`, function() {
    it ('should be number', async () => {
    expect (typeof resAdd).toEqual('number');
    })
})
describe(`Check Add functionality2`, function() {
    it ('should be result add1', async () => {
    expect (calc.add(-1,1)).toEqual(0);
    })
})
describe(`Check Add functionality3`, function() {
    it ('should be result add2', async () => {
    expect (resAdd).toEqual(6);
    })
})
describe(`Check Mult functionality1`, function() {
    it ('should be number', async () => {
    expect (typeof resMult).toEqual('number');
    })
})
describe(`Check Mult functionality2`, function() {
    it ('should be result mult', async () => {
    expect (resMult).toEqual(24);
    })
})
describe(`Check Mult functionality3`, function() {
    it ('should be result mult', async () => {
    expect (calc.multiply(-2,5)).toEqual(-10);
    })
})
describe(`Check Mult functionality4`, function() {
    it ('should be result mult', async () => {
    expect (typeof calc.multiply('str',5)).not.toBe('number');
    })
})
describe(`Check Div functionality1`, function() {
    it ('should be result Div', async () => {
    expect (calc.divide(12,5)).toEqual(2.4);
    })
})    
describe(`Check Div functionality2`, function() {
        it ('should be result Infinity', async () => {
        expect (calc.divide(12,0)).toEqual(Infinity);
        })
})
describe(`Check Exp functionality`, function() {
    it ('should be result exp', async () => {
    expect (calc.exponentiation(3)).toEqual(9);
    })
})
cases ([
    [-1,2,1],
    [0,0,0],
    [2,0,2],
]).it ('should be', async ([num1, num2, equal]) => {
    const res = calc.add(num1, num2);
expect(res).toEqual(equal);
})
