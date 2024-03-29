function findLongestPrefix(arr) {
  let commonChar = "";

  if (!arr.length) return "";

  let len = shortestWordLength(arr);
  let i = 0;
  let j = 1;

  while (i < len) {
    let char = arr[0][i];
    while (j < arr.length) {
      if (arr[j][i] !== char) {
        return commonChar;
      }
      j++;
    }
    j = 0;
    i++;
    commonChar += char;
  }

  return commonChar;
}

function shortestWordLength(arr) {
  let len = 0;
  let shortest = arr[0];
  for (let i = 1; i < arr.length - 1; i++) {
    if (shortest > arr[i]) {
      shortest = arr[i];
    }
  }

  if (typeof shortest !== "object") return 0;

  return shortest.length;
}

const testCase = [
  { value: ["flower", "flow", "flight"], expected: "fl" },
  { value: ["all", "alright", "alligator"], expected: "al" },
  { value: [], expected: "" },
  { value: [1, 3, 5, 6], expected: "" },
];

function testCase_findLongestPrefix(tstCs) {
  tstCs.forEach((tst, idx) => {
    result = findLongestPrefix(tst.value);
    console.log(
      `Test for ${idx} ${
        result === tst.expected ? "passed" : "failed"
      }, expected: ${tst.expected}, result: ${result}`
    );
  });
}

testCase_findLongestPrefix(testCase);
