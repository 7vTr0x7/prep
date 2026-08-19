const isRotation = (s1, s2) => {
  return (s1 + s1).includes(s2);
};

console.log(isRotation("abcde", "cdeab")); // true
console.log(isRotation("abcde", "deabc")); // true
console.log(isRotation("abcde", "abced")); // false
