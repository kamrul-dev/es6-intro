/* const favPerson = 'kamrul';
favPerson = "hasan"; */  // not possible to change the value

let favPerson = 'bou';
favPerson = "tow";  //possible to change the value

const  hubby = "kamrul";  // const variable used for permanent value


// set default parameter
function calculate(x, y, z = 0){

}
function getName(first, last = 'khan'){
    return first + ' ' + last;
}

// template string
const myPeople = `My lovley persion is ${hubby} and his fullName is ${getName('kamrul hasan')} My name is ${favPerson}`;
console.log(myPeople);

// arrow function 
const getName2 = (first, last) => first + ' ' + last;

const fiveTimes = x => x * 5;

const bigArrowFunc = (x, y, z) => {
    const firsPart = x + y;
    const secondPart = x * z;
    const thirdPart = x / z ;
    const result = (firsPart + secondPart ) * thirdPart;

    return result;
}


// spread operator
const numbers = [12, 23, 42, 53, 53];
const min = Math.min(...numbers);