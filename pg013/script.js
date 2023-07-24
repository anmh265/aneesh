function findlongestWord(arr) {
  const stringArr = returnStringList(arr);
  if (!stringArr.length) return "";

  let longestWord = stringArr[0];

  for (let i = 1; i < stringArr.length; i++) {
    if (longestWord.length < stringArr[i].length) {
      longestWord = stringArr[i];
    }
  }
  return longestWord;
}

function returnStringList(arr) {
  return arr.filter((item) => typeof item === "string");
}

const testCases = [
  { value: ["programming", "is", "fun"], expected: "programming" },
  { value: [], expected: "" },
  { value: [1, 2, 4, 5], expected: "" },
];

const testCases_findLongestWord = (tstCs) => {
  tstCs.forEach((tst, idx) => {
    const result = findlongestWord(tst.value);
    console.log(
      `Test case ${idx} ${
        result === tst.expected ? "passed" : "failed"
      }, expected: ${tst.expected} result: ${result}`
    );
  });
};

testCases_findLongestWord(testCases);
