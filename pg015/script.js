function reverseString(strList) {
  let word = "";
  let wordArr = [];
  let reversedWordSentence = "";

  // for (let i = 0; i < strList.length; i++) {
  //   if((strList[i].charCodeAt(0) >= 65 && strList[i].charCodeAt(0) <= 122) && i !== strList.length){
  //     word += strList[i];
  //   }
  //   else {
  //     // wordArr.push(reverseWord(word))
  //     // if(strList[i] === " " && i !== strList.length - 1){
  //     //   wordArr.push(strList[i])
  //     // }
  //     // word = ''
  //     wordArr.push(word)

  //   }

  //   // else if(strList[i] === " "){
  //   //   console.log(word)
  //   //   word = reverseWord(word) + " "
  //   //   wordArr.push(word)
  //   // }

  //   // else if(strList[i] === " " || i !== strList.length){
  //   //   console.log(word)
  //   //   wordArr.push(reverseWord(word))
  //   //   wordArr.push(' ')
  //   // }
  //   // console.log(wordArr)
  // }

  for (let i = 0; i <= strList.length; i++) {
    if (strList[i] !== " " && i !== strList.length) {
      word += strList[i];
    } else {
      wordArr.push(reverseWord(word));
      if (i !== strList.length) {
        wordArr.push(" ");
      }
      word = "";
    }
  }

  for (let i = 0; i < wordArr.length; i++) {
    reversedWordSentence += wordArr[i];
  }
  return reversedWordSentence;
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

let ans = reverseString("Hello world");
console.log(ans);
