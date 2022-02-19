// function decalre
function add(num1, num2){
    // const sum = num1 + num2;
    return num1 + num2;
}

// function expression
const add2 = function add2(num1, num2){
    return num1 + num2;
}
//function expression (anonymous)
const add3 = function (num1, num2){
    return num1 + num2;
}

// arrow function
const add4 = (num1, num2) => num1 + num2;


const sum1 = add(2, 3);
const sum2 = add2(3, 4);
const sum3 = add3(8, 8);
const sum4 = add4(2, 3);
console.log(sum1, sum2, sum3, sum4);

// document.getElementById('my-button').onclick = function handleEvent(){

// }
