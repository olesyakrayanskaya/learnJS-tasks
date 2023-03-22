function User(name) {
    this.name = name;
}

let user = new User('John');
let userTwo = new user.constructor('Pete');

console.log(userTwo.name);


function Admin(name) {
    this.name = name;
}
Admin.prototype = {};

let admin = new Admin('John');
let adminTwo = new admin.constructor('Pete');

console.log(adminTwo.name); 