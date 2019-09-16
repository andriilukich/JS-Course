'use strict';

// let persone = {
//   name: 'Andrii',
//   age: 28,
//   isMarried: 'false'
// };

// console.log(persone['age']);

// let arr = ['Andrii', 28, false];
// console.log(arr[1]);

// alert('Hello world');

// let answer = confirm('Are you here');
// console.log(answer);

// let question = +prompt('Are you 18 years old?', 'Yes');
// console.log( typeof(question) );

// console.log('Andrii' + 28);
// console.log('123123' + 'Andrii');

let incr = 10,
    decr = 10;

console.log(++incr);
console.log(--decr);

console.log(incr++);
console.log(decr--);

console.log(incr);
console.log(decr);

console.log(5 % 2);
console.log('2' == 2);
console.log('2' === 2);

let isChecked = true,
    isClose = true;

console.log(isChecked && isClose);

isClose = false;
console.log(isChecked || isClose);
console.log(isChecked && isClose);
console.log(isChecked && !isClose);