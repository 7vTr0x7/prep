const countOccurrences = (str) => {
  const map = {};

  for (let i = 0; i < str.length; i++) {
    if (map[str[i]] === undefined) {
      map[str[i]] = 1;
    } else {
      map[str[i]] += 1;
    }
  }

  return map;
};

console.log(countOccurrences("ssstringting"));
