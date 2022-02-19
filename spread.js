const numbers = [23, 34, 43, 56, 53, 34];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(23, 34, 56);
const maxInArray = Math.max(...numbers);
console.log(max, maxInArray);

// numbers.push(100);
// console.log(numbers)

// const numbers2 = numbers;
// numbers.push(100);
// console.log(numbers2);


const numbers2 = [12, ...numbers, 200];
numbers.push(100);
console.log(numbers);
console.log(numbers2);

