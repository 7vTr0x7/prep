const reverseString = (str) => {
  let string = str.split("");

  for (let i = 0; i < Math.floor(string.length / 2); i++) {
    [string[i], string[string.length - 1 - i]] = [
      string[string.length - 1 - i],
      string[i],
    ];
  }

  return string.join("");
};

console.log(reverseString("string"));
