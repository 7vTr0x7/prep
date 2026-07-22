
type NestedNumberArray =
    number
    | NestedNumberArray[]

const arr: NestedNumberArray[] = [1, [2, [3, [4, [5, [6]]]]]]

// console.log(arr.reduce((acc, curr, i, arr) => acc + curr, 0))

interface Array<T> {
    newFlat(
        depth: number
    ): number[]
}



Array.prototype.newFlat = function (depth: number
): number[] {

    if (!Array.isArray(this)) {
        throw new Error("invalid array")
    }


    if (depth <= 1) {
        return this
    }


    const result: number[] = []

    for (let i of this) {

        if (Array.isArray(i)) {
            result.push(...i.newFlat(depth - 1))
        } else {
            result.push(i)
        }

    }
    return result
}

console.log(arr.newFlat(6))

