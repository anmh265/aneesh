function reverseString(strList) {
  if (typeof strList !== "string") return "";
  let word = "";
  let wordArr = [];
  let reversedWordSentence = "";

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

const testCases = [
  { value: "Programmers are awesome", expected: "sremmargorP era emosewa" },
  { value: "Hello world", expected: "olleH dlrow" },
  { value: 1234, expected: "" },
  { value: "", expected: "" },
];

function testCases_reverseString(tstCs) {
  tstCs.forEach((tst, idx) => {
    const result = reverseString(tst.value);
    console.log(
      `Testcase for ${idx} ${
        result === tst.expected ? "passed" : "failed"
      }, expected: ${tst.expected}, result: ${result}`
    );
  });
}

// let ans = reverseString("Hello world");
// console.log(ans);

testCases_reverseString(testCases);
