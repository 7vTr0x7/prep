const reverse = (w) => {
  let str = w.split("");

  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    [str[i], str[str.length - 1 - i]] = [str[str.length - 1 - i], str[i]];
  }

  return str.join("");
};

const reverseWords = (sen) => {
  const words = sen.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = reverse(words[i]);
  }

  return words.join(" ");
};

console.log(reverseWords("string is here"));
