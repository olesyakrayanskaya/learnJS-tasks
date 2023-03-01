function Calculator() {

    this.read = function () {
        this.a = +prompt('введите число a:', 0);
        this.b = +prompt('введите число b:', 0);
    };

    this.sum = function () {
        return this.a + this.b;
    };

    this.mul = function () {
        return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read();

alert('сумма равна ' + calculator.sum());
alert('произведение равно ' + calculator.mul());