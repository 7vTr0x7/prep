const countOccurrences = (str) => {
  let map = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (map[char] === undefined) {
      map[char] = 1;
    } else {
      map[char] += 1;
    }
  }

  return map;
};

console.log(countOccurrences("ssstringting"));
