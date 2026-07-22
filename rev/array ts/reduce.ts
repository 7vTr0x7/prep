

const arrays: number[] = [1, 2, 3, 4, 5]

type CallBack<T, U> = (acc: U, curr: T, i: number, a: T[]) => U

interface Array<T> {
    newReduce<U, K>(
        cb: CallBack<T, U>,
        value: U
    ): U
}


Array.prototype.newReduce = function <T, U>(cb: CallBack<T, U>, value: U): U {

    if (!Array.isArray(this)) {
        throw new Error("invalid")
    }
    let acc: U = value ? value : this[0]

    for (let i = value ? 0 : 1; i < this.length; i++) {
        acc = cb(acc, this[i], i, this)
    }

    return acc
}


console.log(arrays.newReduce((acc, curr) => acc + curr, 0))