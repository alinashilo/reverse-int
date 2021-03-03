module.exports = function reverse (n) {
    return +String(n >= 0 ? n : -n).split('').reverse().join('');
}
