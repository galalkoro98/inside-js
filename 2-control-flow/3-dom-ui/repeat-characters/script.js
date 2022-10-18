import { readNumber, readString, display } from '../../../lib/dom-io.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  debugger;

  // read user values
  let chaN = readNumber('number-of-times');
  let chaS = readString('user-text');
  let repeatEachCha = 0;

  // repeat the characters in the text

  for (let i = chaN; i <= chaS; i++) {
    for (let j = chaS; j > i; j++) {
      repeatEachCha += readString[j]
    
    }

    readString += readNumber[i];
  }

  // display the text with repeated characters

display('repeated-output', repeatEachCha)
});
