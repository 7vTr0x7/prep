const throttle = (fn, d) => {
  let prev = 0;

  return function (...args) {
    let now = new Date().getTime();
    if (now - prev < d) return;
    prev = now;
    fn(...args);
  };
};
