const palindrome = (s) => {
  let str = s.split("");

  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    [str[i], str[str.length - 1 - i]] = [str[str.length - 1 - i], str[i]];
  }
  return s === str.join("");
};

console.log(palindrome("string"));
console.log(palindrome("stts"));
