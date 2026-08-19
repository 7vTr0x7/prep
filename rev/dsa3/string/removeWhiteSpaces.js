const removeWhiteSpaces = (sen) => {
  let str = "";

  for (let i = 0; i < sen.length; i++) {
    if (sen[i] !== " ") {
      str += sen[i];
    }
  }

  return str;
};

console.log(removeWhiteSpaces("hello world how are you"));
