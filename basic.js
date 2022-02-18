// Simple Recap of JavaScript six core parts

//variable
var deposit = 400;

//condition
if(deposit > 500){

}

if(deposit < 200){

}
else if(deposit == 500){

}
else if(deposit !=500){

}
else if(deposit <= 500){

}
else{

}

//array
const numbers = [23, 32, 4523, 32, 232, 34, 5343];
const numberCount = numbers.length;
numbers.pop();
numbers.push(111);
numbers [2] = 552;

// check whether 222 included in array
if(numbers.indexOf(222) != -1){

}

if(numbers.includes(222)){

}

//loop
//while, for

for(const number of numbers){

}

// function
function fullName(first, second){
    const name = first + ' ' + second;
}
 const student = fullName('kamrul', 'hasan');

 //object
 const bottle = {color: 'yellow', contain: 'water', price: 50};