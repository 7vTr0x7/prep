const palindrome = (n) => {
  let og = n;
  let rev = 0;

  while (n > 0) {
    let rem = n % 10;
    n = Math.floor(n / 10);
    rev = rev * 10 + rem;
  }

  return og === rev;
};

console.log(palindrome(202));
