const firstRepeatingChar = (str) => {
  const map = {};

  for (let i = 0; i < str.length; i++) {
    if (map[str[i]] !== undefined) {
      return str[map[str[i]]];
    }

    map[str[i]] = i;
  }
  return 0;
};

console.log(firstRepeatingChar("abcdbea"));
console.log(firstRepeatingChar("abcdef")); // null
