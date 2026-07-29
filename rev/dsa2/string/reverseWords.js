const reverse = (word) => {
  let w = word.split("");

  for (let i = 0; i < Math.floor(w.length / 2); i++) {
    [w[i], w[w.length - 1 - i]] = [w[w.length - 1 - i], w[i]];
  }

  return w.join("");
};

const reverseWords = (string) => {
  let words = string.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = reverse(words[i]);
  }

  return words.join(" ");
};

console.log(reverseWords("string is here"));
