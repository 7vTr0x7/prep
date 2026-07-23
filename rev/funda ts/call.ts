const object = {
    name: "non",
};

function normalFunc(this: typeof object, city: string, state: string) {
    console.log(this.name, city, state);
}

interface Function {
    newCall<T extends Record<string, unknown>, U extends unknown[]>(
        context: T,
        ...args: U
    ): void
}

Function.prototype.newCall = function <T extends Record<string, unknown>, U extends unknown[]>(context: T, ...args: U): void {


    const contextWithFunc = context as T & {
        fn?: (...args: U) => void
    }

    contextWithFunc.fn = this as (...args: U) => void;

    contextWithFunc.fn(...args);

    delete contextWithFunc.fn;

}
normalFunc.newCall(object, "non1", "non4");
