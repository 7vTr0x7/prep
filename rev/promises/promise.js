function PromisePollyFill(executor) {
  let onRessolve, onReject;

  const resolve = (value) => {
    onRessolve(value);
  };
  const reject = (value) => {
    onReject(value);
  };

  this.then = (callback) => {
    onRessolve = callback;
    return this;
  };

  this.catch = (callback) => {
    onReject = callback;
    return this;
  };

  executor(resolve, reject);
}

const ex = new PromisePollyFill((res, rej) => {
  setTimeout(() => {
    res("res");
  }, 1000);
});

ex.then((d) => {
  console.log(d);
}).catch((e) => {
  console.log(e);
});
