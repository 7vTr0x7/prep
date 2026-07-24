const shortestWord = (str) => {
  if (str.length === 0) return "";

  let words = str.split(" ");

  let shortest = words[0];

  for (let i = 0; i < words.length; i++) {
    if (shortest.length > words[i].length) {
      shortest = words[i];
    }
  }
  return shortest;
};

console.log(shortestWord("I love JavaScript")); // I
console.log(shortestWord("Find the shortest word")); // the
