const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p1");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p2");
  }, 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p3");
  }, 3000);
});

Promise.newAny = (promises) => {
  return new Promise((res, rej) => {
    let rejected = [];
    let rejectedCount = 0;

    if (!promises?.length)
      return rej(new AggregateError(rejected, "All promises rejected"));

    promises.forEach((p, i) => {
      Promise.resolve(p)
        .then(res)
        .catch((e) => {
          rejected[i] = e;
          rejectedCount += 1;
          if (rejectedCount === promises.length) {
            rej(new AggregateError(rejected, "All promises rejected"));
          }
        });
    });
  });
};

const all = Promise.newAny([p1, p2, p3]);

all
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  });
