function letterFrequency(str) {
  let letterFreqObj = {};

  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].toLowerCase();
    if (letterFreqObj[str[i]]) {
      letterFreqObj[str[i]] = letterFreqObj[str[i]] + 1;
    } else {
      letterFreqObj[str[i]] = 1;
    }
  }
  return letterFreqObj;
}

const testCases = [{ value: "hello", expected: { h: 1, e: 1, l: 2, o: 1 } }];

function testCase_letterFrequency(tstCs) {
  tstCs.forEach((tst, idx) => {
    const result = letterFrequency(tst.value);
    console.log(Object.values(result));
  });
}

// console.log(letterFrequency("apple"));
testCase_letterFrequency(testCases);
