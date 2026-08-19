const reverseString = (s) => {
  let str = s.split("");

  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    [str[i], str[str.length - 1 - i]] = [str[str.length - 1 - i], str[i]];
  }

  return str.join("");
};

console.log(reverseString("string"));
