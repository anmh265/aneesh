function missingNum(arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i + 1] - arr[i] < arr[i + 2] - arr[i + 1]) {
      return `Missing num is ${arr[i + 1] + (arr[i + 1] - arr[i])}`;
    } else if (arr[i + 1] - arr[i] > arr[i + 2] - arr[i + 1]) {
      return `Missing num is ${arr[i] + (arr[i + 2] - arr[i + 1])}`;
    }
  }
  return `Missing num is ${arr[0] - (arr[1] - arr[0])}`
}

let ans = missingNum([10, 11, 13, 14, 15])
console.log(ans)
