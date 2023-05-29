function sortStringList(arr) {
  let str = "";
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].length > arr[j].length) {
        str = arr[i];
        arr[i] = arr[j];
        arr[j] = str;
      }
    }
  }
  return arr;
}

console.log(sortStringList(["cat", "dog", "elephant", "tiger"]));