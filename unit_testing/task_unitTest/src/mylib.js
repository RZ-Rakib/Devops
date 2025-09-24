const validation = (x) => {
    if (typeof x !== "number" || Number.isNaN(x)) {
        throw new Error(`${String(x)} is not a number`)
    }
};
const add = (a, b) => {
    validation(a)
    validation(b)

    return a + b
}

const sub = (a, b) => {
    validation(a)
    validation(b)

    return a - b
}
const mul = (a, b) => {
    validation(a)
    validation(b)

    return a * b
}
const div = (a, b) => {
    validation(a)
    validation(b)

    if(b === 0)
        throw new Error("ZeroDivision");

    return a / b
}


export { add, sub, div, mul, validation };
