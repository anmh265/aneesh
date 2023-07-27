function stringPalindrome(str) {
  if (typeof str !== "string") return false;
  let isStringList = true;
  let i = 0;
  let j = 0;
  let newStr = "";

  let myStr = str.toLowerCase();
  while (i < myStr.length) {
    if (myStr.charCodeAt(i) >= 97 && myStr.charCodeAt(i) <= 122) {
      newStr += myStr[i];
    }
    i++;
  }

  while (j < Math.floor(newStr.length / 2)) {
    if (newStr[j] !== newStr[newStr.length - 1 - j]) {
      return false;
    }
    j++;
  }
  return true;
}

const testCase = [
  { value: "A man, a plan, a canal, Panama!", expected: true },
  { value: "Racecar", expected: true },
  { value: "Hello", expected: false },
  { value: 123, expected: false },
  { value: "madaM", expected: true },
  { value: "121", expected: true },
];

function testCase_stringPalindrom(tstCs) {
  tstCs.forEach((tst, idx) => {
    result = stringPalindrome(tst.value);
    console.log(
      `Test case ${idx} ${
        result === tst.expected ? "passed" : "failed"
      }, expected: ${tst.expected} result: ${result}`
    );
  });
}

testCase_stringPalindrom(testCase);
