function reverseString(strList) {
  let word = "";
  let reversedWord = "";
  for (let i = 0; i < strList.length; i++) {
    word += strList[i];
    if(strList[i] === ' '){
        reversedWord = reverseWord(word);
    }
  }
  
  return reversedWord
}

function reverseWord(str) {
  let letter = "";
  if (str !== " ") {
    for (let i = str.length - 1; i >= 0; i--) {
      letter += str[i];
    }
  } else {
    letter = " ";
  }
  return letter;
}

let ans = reverseString("Programmers are awesome")
console.log(ans)