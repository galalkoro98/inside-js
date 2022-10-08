// #todo

'use strict';

console.log('-- begin --');

// refactor this code to use a conditional instead of &&

// try different values and different types
const a = 200;
console.log(a);

/*
const isBigNumber = typeof a === 'number' && a > 1000;
console.log(isBigNumber);
*/

if(a > 1000){
  console.log('isBigNumber');
}else{
  console.log('is not big number')
}

console.log('-- end --');
