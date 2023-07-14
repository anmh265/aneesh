function findLongestWord(strList) {
  let currStr = "";
  let longestStr = "";

  if (typeof strList !== "string") return "";

  for (let i = 0; i <= strList.length; i++) {
    console.log(strList[i].charCodeAt(0));
    if (
      (strList[i].charCodeAt(0) < 65 && strList[i].charCodeAt(0) > 90) ||
      (strList[i].charCodeAt(0) < 97 && strList[i].charCodeAt(0) > 122)
    ) {
      return "";
    }

    if (strList[i] !== " " && i !== strList.length) {
      currStr += strList[i];
    } else {
      if (longestStr.length < currStr.length) {
        longestStr = currStr;
      }
      currStr = "";
    }
  }

  return longestStr;
}

const testcase = [
  { value: "Helo world", expected: "world" },
  // { value: "", expected: "" },
  // { value: 234, expected: "" },
];

function testCase_findLongestWord(tstCs) {
  tstCs.forEach((tst, idx) => {
    const result = findLongestWord(tst.value);
    console.log(
      `Test ${
        result === tst.expected ? "passed" : "failed"
      } for expected value ${tst.expected}, result ${result}`
    );
  });
}

// console.log(findLongestWord("Hello world of programming"));
console.log(testCase_findLongestWord(testcase));
