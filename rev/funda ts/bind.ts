
const newObj = {
    name: "non"
}

function newNormal(this: typeof newObj, city: string, state: string) {
    console.log(this.name, city, state);
}


interface Function {
    newBind<T extends Record<string, unknown>, U extends unknown[], V extends unknown[]>(
        context: T,
        ...args: U
    ): (...newArgs: V) => void
}

Function.prototype.newBind = function <T extends Record<string, unknown>, U extends unknown[], V extends unknown[]>(context: T, ...args: U): (...newArgs: V) => void {

    const contextValue = context as T & { fn?: (...args: [...U, ...V]) => void }

    contextValue.fn = this as (...args: [...U, ...V]) => void

    return function (...newArgs: V) {
        contextValue.fn?.(...args, ...newArgs)
    }
}

const newFunction = newNormal.bind(newObj, "non")
newFunction("no6")