const mostFrequentChar = (s) => {
  let map = {};
  let maxCount = 0;
  let maxChar = "";

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (map[char] !== undefined) {
      map[char] += 1;
    } else {
      map[char] = 1;
    }

    if (maxCount < map[char]) {
      maxCount = map[char];
      maxChar = char;
    }
  }

  return maxChar;
};

console.log(mostFrequentChar("banana")); // a
console.log(mostFrequentChar("hello")); // l
