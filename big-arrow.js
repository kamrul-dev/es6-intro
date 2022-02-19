const add = (num1, num2) => num1 + num2;
const sum = add(22, 10);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const multResult = multiply(2, 3, 4);

const fiveTimes = (num) => num * 5;
const timeResult = fiveTimes(10);

// for single parameter no need paranthesis
const sixTimes = num => num * 6;
const sixResult = sixTimes(10);

// for no parameter we have to write emtpy parenthesis
const getName = () => 'Kamrul Hasan';
const name = getName();

// for multiline operation used curly brackets
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;

    return output;
}
const total = doMath(12, 4);
console.log(total);
console.log(sum, multResult, timeResult, sixResult, name);