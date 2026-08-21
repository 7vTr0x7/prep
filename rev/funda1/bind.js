const obj = {
  name: "non",
};

function fun(v) {
  console.log(this.name, v);
}

Function.prototype.newBind = function (context, ...args) {
  context.fn = this;
  return function (...newArgs) {
    context.fn(...args, ...newArgs);
  };
};

const f = fun.newBind(obj, "non1");
f();
