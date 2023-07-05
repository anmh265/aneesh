function findWordCount(str) {
  let count = 0;

  if (typeof str !== "string") return -1;
  if (str === "") {
    return 0;
  }

  let startPos = findStartEndPositon(str, "start");
  let endPos = findStartEndPositon(str);

  if (startPos === endPos) return 0;

  for (let i = startPos; i < endPos; i++) {
    if (str[i] === " ") {
      count++;
    }
  }
  return count + 1;
}

function findStartEndPositon(str, pos) {
  let index = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      (str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90) ||
      (str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122)
    ) {
      index = i;
      if (pos === "start") {
        break;
      }
    }
  }
  return index;
}

const testCase = [
  { value: "hello all", expected: 2 },
  { value: "  Hi all", expected: 2 },
  { value: "lets go out        ", expected: 3 },
  { value: 23, expected: -1 },
  { value: " ", expected: 0 },
  { value: "", expected: 0 },
];

function testCase_findWordCount(tstCs) {
  tstCs.forEach((tst, i) => {
    let wordCount = findWordCount(tst.value);
    if (wordCount === tst.expected) {
      console.log(
        `Test ${i} passed for value: ${tst.value}, wordCount: ${wordCount}, expected: ${tst.expected}`
      );
    } else {
      console.log(
        `Test ${i} failed for value: ${tst.value}, wordCount: ${wordCount}, expected: ${tst.expected}`
      );
    }
  });
}

testCase_findWordCount(testCase);

// "hello world" - 2;
// "world" - 1;
// "" - 0;
// 1234 - -1;
