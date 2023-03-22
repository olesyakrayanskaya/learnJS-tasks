function pow(x, n) {
    for (let i = 1; i < n; i++) {
        x = x * x;
    };
    return x;
}

let x = prompt('введите x основание', '');
let n = prompt('введите n >= 1 показатель', '');

if (n < 1) {
    alert('введите натуральное число n');
} else {
    alert('результат = ' + pow(x, n));
};
