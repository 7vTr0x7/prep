const allSubstrings = (str) => {
  if (str.length === 0) return 0;

  let result = [];

  for (let i = 0; i < str.length; i++) {
    let current = "";

    for (let j = i; j < str.length; j++) {
      current += str[j];

      result.push(current);
    }
  }

  return result;
};

console.log(allSubstrings("abc"));
console.log(allSubstrings("abcabcbb")); // abc
console.log(allSubstrings("bbbbb")); // b
