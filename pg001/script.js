function isPrime(num) {
  let primeFound = true
  if(typeof num !== 'number') return false
  if(Math.round(num) !== num) return false

  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      primeFound = false
      break
    }
  }

  return primeFound 
}

let testCase = [
  {value: 2, expected: true},
  {value: 5, expected: true},
  {value: 6, expected: false},
  {value: 6.6, expected: true},
  {value: 6.0, expected: false},
  {value: 'hello', expected: false},
  {value: -2, expected: false},
  {value: 1000000000, expected: false}
]

function testCase_isPrime(tstCs){
  tstCs.forEach((tst, i) => {
    let got = isPrime(tst.value)
    if(got === tst.expected){
      console.log(`Test for ${i} passed, got = ${got}, expected = ${tst.expected}, value = ${tst.value}`)
    } else {
      console.log(`Test for ${i} failed, got = ${got}, expected = ${tst.expected}, value = ${tst.value}`)
    }
  })
}

testCase_isPrime(testCase)