const reverse = (w) => {
  let word = w.split("");

  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    [word[i], word[word.length - 1 - i]] = [word[word.length - 1 - i], word[i]];
  }
  return word.join("");
};

const reverseWords = (sen) => {
  let arr = sen.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = reverse(arr[i]);
  }

  return arr.join(" ");
};

console.log(reverseWords("string is here"));
