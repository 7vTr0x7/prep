const obj = {
  name: "non",
};

function normal(city, state) {
  console.log(this.name, city, state);
}

Function.prototype.newBind = function (context, ...args) {
  context.fn = this;

  return function (...newArgs) {
    context.fn(...args, newArgs);
  };
};

const newFunc = normal.bind(obj, "non2");
newFunc("non5");
