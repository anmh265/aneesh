function findlongestWord(arr) {
  let longest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (longest.length < arr[i].length) {
      longest = arr[i];
    }
  }
  return longest;
}

let inputArr = ["programming", "is", "fun"];
let ans = findlongestWord(inputArr);
console.log(ans);
