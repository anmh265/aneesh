function findLongestPrefix(arr) {
  let commonChar = "";
  let len = shortestWordLength(arr);
  let i = 0;
  let j = 1;

  while (i < len) {
    let char = arr[0][i];
    while (j < arr.length) {
      if (arr[j][i] !== char) {
        return commonChar;
      }
      j++;
    }
    j = 0;
    i++;
    commonChar += char;
  }

  return commonChar;
}

function shortestWordLength(arr) {
  let len = 0;
  let shortest = arr[0];
  for (let i = 1; i < arr.length - 1; i++) {
    if (shortest > arr[i]) {
      shortest = arr[i];
    }
  }
  return shortest.length;
}

let ans = findLongestPrefix(["flower", "flow", "flight"]);
console.log(ans);
