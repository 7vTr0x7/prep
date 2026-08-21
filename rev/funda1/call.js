const obj = {
  name: "non",
};

function fun(v) {
  console.log(this.name, v);
}

Function.prototype.newCall = function (context, ...args) {
  context.fn = this;
  context.fn(...args);
};

fun.newCall(obj, "non1");
