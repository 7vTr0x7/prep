const firstRepeatingChar = (s) => {
  const map = {};

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (map[char] === undefined) {
      map[char] = i;
    } else {
      return char;
    }
  }

  return null;
};

console.log(firstRepeatingChar("abcdbea"));
console.log(firstRepeatingChar("abcdef")); // null
