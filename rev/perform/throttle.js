const myThrottle = (cb, d) => {
  let last = 0;

  return function (...args) {
    let now = new Date().getTime();
    if (now - last < d) return;
    last = now;
    return cb(...args);
  };
};

const func = () => {
  console.log("click");
};

const throttle = myThrottle(func, 1000);
