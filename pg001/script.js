function isPrime(num) {
  num = returnNum(num)
  let count = 0;
  let flag = true
  if (num === 1) {
    return `Neither prime neither composite`;
  }

  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }
  console.log(count, num)

  if(count > 1){
    return `Not Prime`
  } else {
    return `Is Prime`
  }
}

function returnNum(x){
  if(x === '0') return 0
  if(x === '1') return 1
  if(x === '2') return 2
  if(x === '3') return 3
  if(x === '4') return 4
  if(x === '5') return 5
  if(x === '6') return 6
  if(x === '7') return 7
  if(x === '8') return 8
  if(x === '9') return 9

  return x
}

console.log(isPrime(5))
