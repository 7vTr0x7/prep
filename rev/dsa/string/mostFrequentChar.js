const mostFrequentChar = (str) => {
  if (str.length === 0) return "";

  let map = {};

  let maxChar = "";
  let maxC = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (map[char] === undefined) {
      map[char] = 1;
    } else {
      map[char] += 1;
    }

    if (maxC < map[char]) {
      maxC = map[char];
      maxChar = char;
    }
  }

  return maxChar;
};

console.log(mostFrequentChar("banana")); // a
console.log(mostFrequentChar("hello")); // l
