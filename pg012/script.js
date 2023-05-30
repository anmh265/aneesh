function maxProduct(arr) {
  let max = 0;
  let i = 0;
  let len = arr.length;
  let firstNum = 0;
  let secondNum = 0;
  let thirdNum = 0;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        max = arr[i];
        arr[i] = arr[j];
        arr[j] = max;
      }
    }
  }

  if (arr[0] * arr[1] > arr[arr.length - 2] * arr[arr.length - 3]) {
    if (arr[arr.length - 1] < 0) {
      firstNum = arr[arr.length - 3];
      secondNum = arr[arr.length - 2];
    } else {
      firstNum = arr[0];
      secondNum = arr[1];
    }
  } else {
    firstNum = arr[arr.length - 3];
    secondNum = arr[arr.length - 2];
  }

  thirdNum = arr[arr.length - 1];

  return firstNum * secondNum * thirdNum;
}

console.log(maxProduct([-8, -6, -9, 6, 8, 7]));
