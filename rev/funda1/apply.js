const obj = {
  name: "non",
};

function fun(v) {
  console.log(this.name, v);
}

Function.prototype.newApply = function (context, args) {
  if (!Array.isArray(args)) return;
  context.fn = this;
  context.fn(...args);
};

fun.newApply(obj, ["non1"]);
