function findLongestPrefix(arr) {
  let commonChar = "";
  let match = false;
  let len = shortestWordLength(arr);
  let i = 0;
  let j = 1;

  // for (let i = 0; i < arr.length - 1; i++) {
  //   // for(j = 0; j < len - 1; j++){
  //   //   console.log(arr[j + 1])
  //   //   console.log('j: ', j)
  //   // }
  //   // str += arr[i]
  // }

  // debugger;
  // for (let i = 0; i < arr.length - 1; i++) {
  //   while (j < len) {
  //     if (arr[j][i] === arr[i + 1][j]) {
  //       console.log(arr[i + 1]);
  //     }

  //     // console.log(arr[j][i])
  //   }
  //   j++;
  // }

  for(let i = 0; i < len; i++){
    let char = arr[0][i]
    for(let j = 1; j < arr.length;j++){
      if(arr[j][i] !== char){
        return commonChar
      }
    }
    commonChar += char
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

// shortestWordLength(["flower", "flow", "flight"])

let ans = findLongestPrefix(["flower", "flow", "flight"]);
console.log(ans);
