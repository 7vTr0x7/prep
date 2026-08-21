const PromisePolyfill = function (executor) {
  let state = "pending";
  let value;

  const resolve = (val) => {
    if (state !== "pending") return;

    state = "fulfilled";
    value = val;
  };
  const reject = (val) => {};

  try {
    executor(resolve, reject);
  } catch (error) {}
};

const promise = new PromisePolyfill((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});

promise
  .then((data) => {
    console.log(data); // 10
    return data * 2;
  })
  .then((data) => {
    console.log(data); // 20
    return data * 2;
  })
  .then((data) => {
    console.log(data); // 40
  })
  .catch((error) => {
    console.log(error);
  });
