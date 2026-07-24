const longestSubstringChars = (str) => {
  const map = {};
  let start = 0;
  let maxLen = 0;
  let maxStart = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (map[char] !== undefined && map[char] >= start) {
      start = map[char] + 1;
    }

    map[char] = i;

    let length = i - start + 1;

    if (length > maxLen) {
      maxLen = length;

      maxStart = start;
    }
  }

  return str.substring(maxStart, maxStart + maxLen);
};

console.log(longestSubstringChars("abcabcbb")); // abc
console.log(longestSubstringChars("bbbbb")); // b
