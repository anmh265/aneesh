function findLongestWord(strList) {
  let currStr = "";
  let longestStr = "";

  for (let i = 0; i <= strList.length; i++) {
    if (strList[i] !== " " && i !== strList.length) {
      currStr += strList[i];
    } else {
      if (longestStr.length < currStr.length) {
        longestStr = currStr;
      }
      currStr = "";
    }
  }

  return longestStr;
}

console.log(findLongestWord("Hello world of programming"));
