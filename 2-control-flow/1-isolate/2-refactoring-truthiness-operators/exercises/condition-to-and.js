// #todo

'use strict';

console.log('-- begin --');

// refactor this code to use && instead of a conditional

// try different values and different types
const input = 1;
const password = 'pickles';
//console.log(input, password);

let isValidPassword;

//let isValidPassword = typeof input === 'string';
/*
if (isValidPassword) {
  isValidPassword = input === password;
}*/

isValidPassword = typeof(input) && typeof(password);

console.log(isValidPassword);

console.log('-- end --');
