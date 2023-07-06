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

// let arr = [-2, 6, -4, 3];
// let ans = returnEvenNumberList(arr);
// console.log(ans);

const testCase = [
  { value: [2, 1, 4, 5, 6, 9], expected: [2, 4, 6] },
  { value: [-2, 6, -4, 3], expected: [-2, 6, -4] },
];

function testCase_returnEvenNumberList(tstCs) {
  tstCs.forEach((tst) => {
    let got = returnEvenNumberList(tst.value);

    for (let i = 0; i < got.length; i++) {
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
  });
}

testCase_returnEvenNumberList(testCase);
