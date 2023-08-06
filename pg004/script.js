function checkAnagram(str1, str2) {
  let found = false;
  let count = 0;
  if (str1.length !== str2.length) return false;
  if (typeof str1 !== "string" || typeof str2 !== "string") return false;

  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        count++;
        break;
      }
    }
  }

  if (count === str1.length) return true;
  else return false;
}

const testCases = [
  { value1: "listen", value2: "silent", expected: true },
  { value1: "hello", value2: "helo", expected: false },
  { value1: "restful", value2: "fluster", expected: true },
  { value1: "a gentleman", value2: "elegant man", expected: true },
  { value1: 2, value2: "2", expected: false },
  { value1: " ", value2: " ", expected: true }
];

function testCase_checkAnagram(tstCs) {
  tstCs.forEach((tst, idx) => {
    result = checkAnagram(tst.value1, tst.value2);

    console.log(
      `Test case ${idx} ${
        result === tst.expected ? "passed" : "failed"
      } for values ${tst.value1} and ${tst.value2}, expected ${
        tst.expected
      }, got ${result}`
    );
  });
}

testCase_checkAnagram(testCases);
