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

// let incr = 10,
//     decr = 10;

// console.log(++incr);
// console.log(--decr);

// console.log(incr++);
// console.log(decr--);

// console.log(incr);
// console.log(decr);

// console.log(5 % 2);
// console.log('2' == 2);
// console.log('2' === 2);

// let isChecked = true,
//     isClose = true;

// console.log(isChecked && isClose);

// isClose = false;
// console.log(isChecked || isClose);
// console.log(isChecked && isClose);
// console.log(isChecked && !isClose);

                                    // УСЛОВИе

// if (2 * 3 == 8) {
//   console.log('true');
// } else {
//   console.log('false')
// }

/*
let num = 50;

if (num < 49) {
  console.log('false');
} else if (num > 100) {
  console.log('to much');
} else {
  console.log ('True');
}

(num == 50) ? console.log ('True') : console.log('false');

switch (num) {
  case num < 49:
    console.log('false');
    break;
  case num > 100:
    console.log('to much');
    break;
  case 50: //при сравнение на равенство не нужно использовать знак равенства ==, необходимо просто подставить сравняемое чило
    console.log ('True');
    break;
  default:
    console.log('something went wrong');
    break;
} 
*/

                                    // ЦИКЛЫ
/*

let num = 50;

// while (num < 55) {
//   console.log(num);
//   num++;
// }

// do {
//   console.log(num);
//   num++;
// }
// while (num < 55);

for (let i = 1; i < 8; i++) {
  if (i == 6) {
    break;
  }
  if (i == 3){
    continue;
  }
  console.log(i);
}

*/

                                    // Функции

/*
function showFirstMessage(text) {
  alert(text);
}

showFirstMessage('Hello World');
*/

/*

let num = 20;
function showFirstMessage(text) {
  alert(text);
  let num = 10;
  console.log(num);
}

showFirstMessage('Hello World');
console.log(num);

*/

/*
                                    // Global
console.log( calc(8, 3) );
console.log( calc(3, 9) );

function calc(a,b) {
  return (a + b);
}

*/

/*
                                    // Local
let calc = function(a, b) {
  return (a + b);
}

console.log( calc(8, 3) );
console.log( calc(3, 9) );

*/

/*
                                    // Global
let anotherNum = retVar();
console.log(anotherNum);

function retVar() {
  let num = 50;
  return num;
}

*/

/*
                                    // Local
let retVar = function() {
  let num = 50;
  return num;
}

let anotherNum = retVar();
console.log(anotherNum);

*/

/*

                                    // Arrow function

let calc = (a, b) => a + b;

console.log( calc(3, 8) );
console.log( calc(4, 9) );

*/

/*
                                    // Methods

let str = 'test';

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let num = 12.2;

console.log( Math.round(num) );

let pix = '12.2px';

console.log( parseInt(pix) );
console.log( parseFloat(pix) );

*/

                                    // CallBack

/*

function first() {
  setTimeout( function() {
    console.log(1);
  }, 500);
}

function second() {
  console.log(2);
}

first();
second();

*/

/*

function learnJS(leng, callback) {
  console.log('I learn ' + leng);
  callback();
}

learnJS('JavaScript', function() {
  console.log('I\'v done third lesson');
})

function done() {
  console.log('I\'v done forth lesson');
}

learnJS('JavaScript', done);

*/

                                    // objects

/*

let options = {
  width: 1024,
  height: 768,
  name: 'test'
};

console.log(options.width);
console.log(options.name);

options.bool = false;
options.colors = {
  border: 'black',
  background: 'red'
};

console.log(options);

delete options.bool;

console.log(options);

for (let key in options) {
  console.log('Property ' + key.toUpperCase() + ' value ' + options[key]);
}

console.log(Object.keys(options).length);

*/

                                    // arrays
/*

let arr = [1, 2, 3, 4, 5];

arr.pop();
arr.push('fifth');
arr.shift();
arr.unshift('first');

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

arr.forEach( function(item, i, mass) {
  console.log(i + ': ' + item + ' (array: ' + mass + ')');
});

*/

/*

let mass = [1, 3, 5, 7, 8, 54];

console.log('number of key in array');

for (let key in mass) {
  console.log(key);
}

console.log('key of array');

for (let key of mass) {
  console.log(key);
}

*/

/*
                             //arr.split() разделяет строку на отдельные части массива
let ans = prompt('', ''),
    arr = [];

arr = ans.split(',');
console.log(arr);

*/

/*
                             //arr.joun() обьеденяет эл. массива в строку
let arr = ['qwe', '123', 3242, 'zxczxc', 3123],
    i = arr.join(', ');

console.log(arr);
console.log(i);

*/
/*

                             //arr.sort() сортирует эл.массива по алфавиту
let arr = ['oijlkn', 'dfgsd', 'adfaf', 'qerer'],
    i = arr.sort();

console.log(i);

                             //arr.sort(compareNum) сортирует эл.массива по цифрам
let arra = [1, 5, 88, 32, 65, 76],
    e = arra.sort(compareNum);
  
function compareNum(a, b) {
  return a - b;
}

console.log(e);

*/
