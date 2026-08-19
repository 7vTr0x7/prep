const allSubstrings = (s) => {
  if (!s.length) return null;

  let result = [];
  for (let i = 0; i < s.length; i++) {
    let current = "";

    for (let j = i; j < s.length; j++) {
      current += s[j];
      result.push(current);
    }
  }

  return result;
};

console.log(allSubstrings("abc"));
console.log(allSubstrings("abcabcbb")); // abc
console.log(allSubstrings("bbbbb")); // b
