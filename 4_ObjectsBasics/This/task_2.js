let calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    read() {
        this.a = +prompt('введите число a:', 0);
        this.b = +prompt('введите число b:', 0);
    }
};

calculator.read();
alert('сумма равна ' + calculator.sum());
alert('произведение равно ' + calculator.mul());