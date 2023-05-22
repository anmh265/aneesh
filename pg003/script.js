function returnEvenNumberList(arr) {
  let myArr = [];
  let i = 0;

  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      myArr.push(arr[i]);
    }
    i++;
  }
  return myArr
}

let arr = [1,3,4,8,9, 10]
let ans = returnEvenNumberList(arr)
console.log(ans)
