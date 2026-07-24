const palindrome = (string) => {
  let str = string.split("");

  for (let i = 0; i < Math.floor(string.length / 2); i++) {
    [str[i], str[str.length - 1 - i]] = [str[str.length - 1 - i], str[i]];
  }

  return str.join("") === string;
};

console.log(palindrome("string"));
console.log(palindrome("stts"));
