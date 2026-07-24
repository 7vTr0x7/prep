const compressString = (str) => {
  if (str.length === 0) return "";

  let result = "";
  let count = 1;

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      count += 1;
    } else {
      result += str[i - 1] + count;
      count = 1;
    }
  }

  return result;
};

console.log(compressString("aaabbcdddd")); // a3b2c1d4
