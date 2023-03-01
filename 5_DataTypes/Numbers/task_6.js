function randomInteger(min, max) {
    let n = min + Math.random() * (max + 1 - min);
    return Math.floor(n);
}