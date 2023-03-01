/*function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true*/

let user = {
    name: 'Vasya',
};

function A() { return user; }
function B() { return user; }

console.log(new A() == new B()); //true