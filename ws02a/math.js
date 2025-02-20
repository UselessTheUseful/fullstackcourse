function add(x, ...y) {
    let sum = x;
    for (let i of y) {
        sum += i;
    }
    return sum;
}

function sub(x, ...y) {
    let sum = x;
    for (let i of y) {
        sum -= i;
    }
    return sum;
}

module.exports = { add, sub };