function letterFrequency(str) {
  let letterFreqObj = {};
  str = str.toLowerCase()

  for (let i = 0; i < str.length; i++) {
    if (letterFreqObj[str[i]]) {
      letterFreqObj[str[i]] = letterFreqObj[str[i]] + 1
    } else {
      letterFreqObj[str[i]] = 1;
    }
  }
  return letterFreqObj
}

console.log(letterFrequency('apple'))