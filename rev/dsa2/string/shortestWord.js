const shortestWord = (sen) => {
  if (sen.length === 0) return null;

  let words = sen.split(" ");
  let shortest = words[0];

  for (let i = 1; i < words.length; i++) {
    if (shortest.length > words[i].length) {
      shortest = words[i];
    }
  }

  return shortest;
};

console.log(shortestWord("I love JavaScript")); // I
console.log(shortestWord("Find the shortest word")); // the
