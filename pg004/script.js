function checkAnagram(str1, str2) {
  let found = false;
  let count = 0
  if(str1.length !== str2.length) return false

  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]){
        count++
        break
      }
    }
  }

  if(count === str1.length) return true
  else return false
}


console.log(checkAnagram("listen", "silent"))