const longestUniqueSubstring = (str) => {
  if (str.length === 0) return null;

  let map = {};
  let start = 0;
  let maxLen = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (map[char] !== undefined && map[char] >= start) {
      start = map[char] + 1;
    }

    map[char] = i;

    let len = i - start + 1;

    if (len > maxLen) {
      maxLen = len;
    }
  }

  return maxLen;
};

console.log(longestUniqueSubstring("abcabcbb")); // 3
console.log(longestUniqueSubstring("bbbbb")); // 1
console.log(longestUniqueSubstring("pwwkew")); // 3
