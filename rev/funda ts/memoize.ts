const expeFunction = (v1: number, v2: number): number => {
    for (let i = 0; i < 1000000000; i++) { }
    console.log(v1 * v2);
    return v1 * v2;
};

const newMemo = function <T extends unknown[], U>(fn: (...args: T) => U): (...args: T) => U {
    let cache: Record<string, U> = {}


    return function (...args: T): U {

        let key = JSON.stringify(args)
        if (!(key in cache)) {
            cache[key] = fn(...args);
        }

        return cache[key]
    }
}


const memoFunction = newMemo(expeFunction)


console.time("first");
memoFunction(100, 300);
console.timeEnd("first");

console.time("second");
memoFunction(100, 300);
console.timeEnd("second");