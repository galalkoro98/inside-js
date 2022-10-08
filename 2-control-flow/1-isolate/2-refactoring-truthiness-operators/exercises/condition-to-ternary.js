// #todo

'use strict';

console.log('-- begin --');

// refactor this code to use a _?_:_ instead of a conditional

// try different values and different types
const isLoggedIn = 'abc';
const secretInformation = 'secrate';
const warningMessage = 'attention';
console.log(isLoggedIn, secretInformation, warningMessage);

let toDisplay;
/*
if (isLoggedIn) {
  toDisplay = secretInformation;
} else {
  toDisplay = warningMessage;
}*/

toDisplay = isLoggedIn === secretInformation === warningMessage ? 'match' : 'does not match';
console.log(toDisplay);

console.log('-- end --');
