function stringPalindrome(str) {
  let myStr = str.toLowerCase();
  let i = 0;
  let j = 0
  let newStr = ''

  while(i < myStr.length){
    if(myStr.charCodeAt(i) >= 97 && myStr.charCodeAt(i) <= 122){
      newStr += myStr[i]
    }
    i++
  }

  while(j < Math.floor(newStr.length / 2)){
    if(newStr[j] !== newStr[newStr.length - 1 - j]){
      return false
    } 
    j++
  }
  
  return true;
}

let ans = stringPalindrome('A man, a plan, a canal, Panama!')
console.log(ans)