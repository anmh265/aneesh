function checkValidEmail(mail) {
  let char = "";
  let validity = false;

  if (mail[0].charCodeAt(0) >= 65 && mail[0].charCodeAt(0) <= 122) {
    for (let i = mail.length - 4; i < mail.length; i++) {
      char += mail[i];
    }

    if (char === ".com") {
      if (mail[mail.length - 5] !== ".") {
        validity = true;
      }
    //   debugger
      for (let i = 0; i < mail.length; i++) {
        if (mail[i] === "@" && mail[mail.length - 1] !== "@") {
            if(mail[i - 1] !== '.' && mail[i + 1] !== '.'){
                validity = true;
            } else {
                validity = false
            }
          break
        } else {
          validity = false;
        }
      }
    } else {
      validity = false;
    }
  }
  //   console.log(char)
  if (validity) return true;
  else return false;
}

console.log(checkValidEmail("abc@xyz.com"));
