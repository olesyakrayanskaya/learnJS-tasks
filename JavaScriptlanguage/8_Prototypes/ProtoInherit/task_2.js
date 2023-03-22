let animal = {
    eat() {
        this.full = true;
        return this.full;
    }
};

let rabbit = {
    __proto__: animal
};

console.log(rabbit.eat());
console.log(animal.eat());