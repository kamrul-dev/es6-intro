const priya = 'Asif Akbar';
const meye = "Meye tumi ki dukkho chino";
const kobita = `kobita tumi shopno charinin hoye khobor niyona`;

const multiLine = 'This is my first line. \n' +
'this is my second line. \n' +
'third line \n' +
'fourth line';
// console.log(multiLine);


const multiLineNew  = `this is multi line
this is second line
this is third line
this is fourth line`
console.log(multiLineNew);

const friends = ['abul', 'babul', 'kabul', 'sabul'];

const count = 5;
const old = '<h3 class="friend-name">Friend-5</h3>';
const old2 = '<h3 class="friend-name">Friend- ' + count +' </h3>';
const new1 = `<h3 class="friend-name">Friend-${count}</h3>`;
const new2 = `<h3 class="friend-name">Friend-${friends.length}</h3>`;

// console.log(new1);
console.log(new2);

const first = 'kamrul';
const last = 'hasan';

const fullNamOld = first + ' ' + last;
const fullNew = `My name is: ${first} ${last} . I am a student. Has money ${(friends.length + 10) *500}`;
console.log(fullNew)
