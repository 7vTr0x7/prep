const removeWhiteSpaces = (str) => {
  if (str.length === 0) {
    return "";
  }

  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      result += str[i];
    }
  }

  return result;
};

console.log(removeWhiteSpaces("hello world how are you"));
