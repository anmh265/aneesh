function checkValidEmail(mail) {
  let char = "";
  let validity = false;

  if (mail[0].charCodeAt(0) >= 65 && mail[0].charCodeAt(0) <= 122) {
    for (let i = mail.length - 4; i < mail.length; i++) {
      char += mail[i];
    }

    if (char === ".com") {
      if (
        mail[mail.length - 5].charCodeAt(0) < 65 ||
        mail[mail.length - 5].charCodeAt(0) > 122
      ) {
        return false;
      }
      for (let i = 0; i < mail.length - 4; i++) {
        if (mail[i] === "@") {
          if (
            mail[i - 1] === "." ||
            mail[i + 1] === "." ||
            mail[i - 1] === "@" ||
            mail[i + 1] === "@"
          ) {
            return false;
          }
        }
      }
    }
  }
  return true;
}

console.log(checkValidEmail("abc@xyz.com"));
