function sortStringList(arr) {
  if (!arr.length) return [];
  let str = "";
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].length > arr[j].length) {
        str = arr[i];
        arr[i] = arr[j];
        arr[j] = str;
      }
    }
  }
  return arr;
}

const testCase = [
  {
    value: ["cat", "dog", "elephant", "tiger"],
    expected: ["cat", "dog", "tiger", "elephant"],
  },
  { value: [], expected: [] },
  { value: ["hello", "world"], expected: ["hello", "world"] },
];

function testCase_sortStringList(tstCs) {
  let isFound = true;
  tstCs.forEach((tst, idx) => {
    result = sortStringList(tst.value);
    if (result.length === tst.expected.length) {
      for (let i = 0; i < result.length; i++) {
        if (result[i] !== tst.expected[i]) {
          isFound = false;
          break;
        }
      }
      isFound
        ? console.log(
            `Test case ${idx} passed || expected: ${tst.expected} || result: ${result}`
          )
        : console.log(
            `Test case ${idx} failed || expected: ${tst.expected} || result: ${result}`
          );
    }
  });
}

testCase_sortStringList(testCase);
// console.log(sortStringList(["cat", "dog", "elephant", "tiger"]));
