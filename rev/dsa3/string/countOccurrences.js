const countOccurrences = (s) => {
  let map = {};

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (map[char] !== undefined) {
      map[char] += 1;
    } else {
      map[char] = 1;
    }
  }
  return map;
};

console.log(countOccurrences("ssstringting"));
