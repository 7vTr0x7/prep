const PromisePolyfill = function (executor) {
  let onResolve,
    onReject,
    value,
    isFulfilled = false,
    isRejected = false;
  isCalled = false;

  const resolve = (val) => {
    isFulfilled = true;
    value = val;
    if (typeof onResolve === "function") {
      onResolve(val);
      isCalled = true;
    }
  };
  const reject = (val) => {
    isRejected = true;
    value = val;

    if (typeof onReject === "function") {
      onReject(val);
      isCalled = true;
    }
  };

  this.then = function (callback) {
    onResolve = callback;

    if (isFulfilled && !isCalled) {
      onResolve(value);
    }

    return this;
  };

  this.catch = function (callback) {
    onReject = callback;
    if (isRejected && !isCalled) {
      onReject(value);
    }

    return this;
  };
  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
};

const promise = new PromisePolyfill((resolve, reject) => {
  setTimeout(() => {
    resolve("res");
  }, 1000);
});

promise
  .then((d) => {
    console.log(d);
  })
  .catch((e) => {
    console.log(e);
  });
