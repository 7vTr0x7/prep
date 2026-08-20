const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("p1");
  }, 10000);
});
const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("p2");
  }, 20000);
});
const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("p3");
  }, 3000);
});

Promise.newRace = (promises) => {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) return res([]);

    promises.forEach((promise) => {
      Promise.resolve(promise).then(resolve).catch(reject);
    });
  });
};

let race = Promise.newRace([p1, p2, p3]);

race
  .then((d) => {
    console.log(d);
  })
  .catch((e) => {
    console.log(e);
  });
