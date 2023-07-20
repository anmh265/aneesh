function checkPerfectSquare(num) {
  if (num === 1) {
    return true;
  }
  for (let i = 2; i <= Math.floor(num / 2); i++) {
    if (i * i === num) {
      return true;
    }
  }
  return false;
}

const testCases = [
  { value: 4, expected: true },
  { value: 9, expected: true },
  { value: 5, expected: false },
];

function testCases_checkPerfectSquare(tstCs) {
  tstCs.forEach((tst, idx) => {
    const result = checkPerfectSquare(tst.value);
    console.log(
      `Test case for ${idx} ${
        result === tst.expected ? "passed" : "failed"
      }, expected: ${tst.expected} result ${result}`
    );
  });
}

// console.log(checkPerfectSquare(4));
testCases_checkPerfectSquare(testCases);
