describe("Возводит x в степень n", function () {
    it("5 в степени 1 равно 5", function () {
        assert.equal(pow(5, 1), 5);
    });

    it("5 в степени 2 равно 25", function () {
        assert.equal(pow(5, 2), 25);
    });

    it("5 в степени 3 равно 125", function () {
        assert.equal(pow(5, 3), 125);
    });
});