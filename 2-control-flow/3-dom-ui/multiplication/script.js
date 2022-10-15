import { readNumber, display } from '../../../lib/dom-io.js';

document.getElementById('do-math').addEventListener('click', () => {
  debugger;

  // read user values

  let userV1 =  readNumber('left');
  let userV2 = readNumber('right');
  let userM = 0;

  // use a for loop to multiply the two numbers
  for(let i = userV1; i <= userV2; i++){
    userM = userV1 * userV2;
    userV1++;
    
  }
 

  // display the product

  display('product', userM);
});
