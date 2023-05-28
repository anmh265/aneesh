function checkPerfectSquare(num) {
    if(num === 1){
        return true
    }
  for (let i = 2; i <= Math.floor(num / 2); i++) {
    if (i * i === num) {
      return true;
    }
  }
  return false
}

console.log(checkPerfectSquare(4));
