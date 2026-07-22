type TObject = ({
    v: number | string | TObject
}
)

type arrayType = number[] | string[] | TObject[]
const array: arrayType = [1, 2, 3, 4, 5]

interface Array<T> {
    newMap<U>(
        cb: (v: T, i: number, a: T[]) => U
    ): U[]
}


Array.prototype.newMap = function <T, U>(cb: (v: T, i: number, a: T[]) => U): U[] {

    if (!Array.isArray(this)) {
        throw new Error("invalid")
    }

    const result: U[] = []

    for (let i: number = 0; i < this.length; i++) {
        result.push(cb(this[i], i, this))
    }

    return result
}


console.log(array.newMap(a => a + 4))