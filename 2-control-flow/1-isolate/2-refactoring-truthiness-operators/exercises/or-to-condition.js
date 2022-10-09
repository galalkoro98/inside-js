// #todo

'use strict';

console.log('-- begin --');

// refactor this code to use a condition instead of ||

// try different values and different types
const firstName = 'A1';
const lastName = '1A';
console.log(firstName, lastName);

// const hasAnAName = firstName[0] === 'A' || lastName[0] === 'A';
// console.log(hasAnAName);

if(firstName[0] === 'A' && lastName[0] === 'A'){
console.log('True');
} else{
  console.log('false');
}

console.log('-- end --');
