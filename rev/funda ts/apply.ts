
const object1 = {
    name: "non",
};

function normalFunction(this: typeof object1, city: string, state: string) {
    console.log(this.name, city, state);
}


interface Function {
    newApply<T extends Record<string, unknown>, U extends unknown[]>(
        context: T,
        args: U
    ): void
}

Function.prototype.newApply = function <T extends Record<string, unknown>, U extends unknown[]>(context: T, args: U): void {

    const contextWithFunc = context as T & {
        fn?: (...args: U) => void
    }

    contextWithFunc.fn = this as (...args: U) => void
    contextWithFunc.fn(...args)

    delete contextWithFunc.fn

}



normalFunction.newApply(object1, ["non", "09"]);
