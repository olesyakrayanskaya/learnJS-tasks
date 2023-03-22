function count(obj) {
    return Object.keys(obj).length;
}

let user = {
    name: 'John',
    age: 30,
    surname: 'Smith'
};

console.log(count(user));