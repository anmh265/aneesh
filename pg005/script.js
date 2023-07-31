function letterFrequency(str) {
  if (typeof str !== "string") return {};
  let letterFreqObj = {};

  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].toLowerCase();
    if (letterFreqObj[str[i]]) {
      letterFreqObj[str[i]] = letterFreqObj[str[i]] + 1;
    } else {
      letterFreqObj[str[i]] = 1;
    }
  }
  console.log(letterFreqObj);
  return letterFreqObj;
}

const testCases = [
  { value: "hello", expected: { h: 1, e: 1, l: 2, o: 1 } },
  { value: "World", expected: { W: 1, o: 1, r: 1, l: 1, d: 1 } },
  { value: 123, expected: {} },
  { value: " ", expected: {} },
];

function testCase_letterFrequency(tstCs) {
  tstCs.forEach((tst, idx) => {
    let count = 0;
    const result = letterFrequency(tst.value);
    if (Object.keys(result).length === Object.keys(tst.expected).length) {
      for (let property in tst.expected) {
        if (result[property] === tst.expected[property]) {
          count++;
        }
      }
      console.log(
        `Test for ${idx} ${
          count === Object.keys(tst.expected).length ? "passed" : "failed"
        }, expected: ${JSON.stringify(tst.expected)}, result: ${JSON.stringify(
          result
        )}`
      );
    }
  });
}

testCase_letterFrequency(testCases);
