function toUpper(string) {
    return string.toUpperCase();
}

function reverseString(string) {
    let reversed = "";
    for (let i = 1; i <= string.length; i++) {
        reversed += string.at(i*-1);
    }
    return reversed;
}

module.exports = { toUpper, reverseString };