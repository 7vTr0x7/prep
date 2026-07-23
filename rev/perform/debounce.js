const myDebouce = (cb, d) => {
  let timer;

  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, d);
  };
};

const func = () => {
  console.log("click");
};

const debounce = myDebouce(func, 1000);
