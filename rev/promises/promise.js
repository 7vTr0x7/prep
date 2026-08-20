function PromisePollyFill(executor) {
  let onRessolve,
    onReject,
    isFulfilled = false,
    isRejected = false,
    isCalled = false,
    value;

  const resolve = (val) => {
    isFulfilled = true;
    value = val;
    if (typeof onRessolve === "function") {
      onRessolve(val);
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

  this.then = (callback) => {
    onRessolve = callback;
    if (isFulfilled && !isCalled) {
      isCalled = true;
      onRessolve(value);
    }
    return this;
  };

  this.catch = (callback) => {
    onReject = callback;
    if (isRejected && !isCalled) {
      isCalled = true;
      onReject(value);
    }
    return this;
  };

  executor(resolve, reject);
}

const ex = new PromisePollyFill((res, rej) => {
  //   setTimeout(() => {
  rej("res");
  //   }, 1000);
});

ex.then((d) => {
  console.log(d);
}).catch((e) => {
  console.log(e);
});
