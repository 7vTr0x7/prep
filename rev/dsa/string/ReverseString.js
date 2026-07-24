const reverseString = (string) => {
  const str = string.split("");
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    let temp = str[i];
    str[i] = str[str.length - 1 - i];
    str[str.length - 1 - i] = temp;
  }

  return str.join("");
};

console.log(reverseString("string"));
// T - On
// S - On