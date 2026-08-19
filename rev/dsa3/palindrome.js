const palindrome = (n) => {
  let rev = 0;
  let og = n;

  while (n > 0) {
    let rem = n % 10;
    rev = rev * 10 + rem;
    n = Math.floor(n / 10);
  }

  return og === rev;
};

console.log(palindrome(101));
