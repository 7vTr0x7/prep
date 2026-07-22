
const arrayNumbers: number[] = [1, 2, 3, 4, 5, 6]

type CallBackType<T> = (v: T, i: number, a: T[]) => boolean

interface Array<T> {
    newFilter(
        cb: CallBackType<T>
    ): T[]
}

Array.prototype.newFilter = function <T>(cb: CallBackType<T>): T[] {


    if (!Array.isArray(this)) {
        throw new Error("Invalid")
    }

    let result = []

    for (let i: number = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            result.push(this[i])
        }
    }

    return result

}

console.log(arrayNumbers.newFilter((a) => a < 3))