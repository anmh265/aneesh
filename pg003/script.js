function returnEvenNumberList(arr) {
  let myArr = [];
  let i = 0;

  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      myArr.push(arr[i]);
    }
    i++;
  }
  return myArr;
}

// console.log(returnEvenNumberList([1, 3, 5, 11]));

const testCases = [
  { value: [2, 1, 4, 5, 6, 9], expected: [2, 4, 6] },
  { value: [-2, 6, -4, 3], expected: [-2, 6, -4] },
  { value: [1, 3, 5, 11], expected: [] },
];

function testCase_returnEvenNumberList(tstCs) {
  tstCs.forEach((tst, idx) => {
    console.log(`********For test case ${idx + 1}`);
    let got = returnEvenNumberList(tst.value);

    for (let i = 0; i <= got.length; i++) {
      if (got.length === tst.expected.length) {
        if (got[i] === tst.expected[i]) {
          console.log(
            `Test for ${i} passed, got: ${got}, expected: ${tst.expected}`
          );
        } else {
          console.log(
            `Test for ${i} failed, got: ${got}, expected: ${tst.expected}`
          );
        }
      }
    }
  });
}

testCase_returnEvenNumberList(testCases);
