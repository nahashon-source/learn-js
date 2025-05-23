const person = {
    name: 'Nashon',
    age: 28,
    city: 'New York',
    hobbies: ['eating', 'soccer'],
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY'
    }
};
person.email  = 'nashon@gmail.com'; // adding a property

console.log(person);
console.log(person.name);
console.log(person.age);

///You can do this instead this is an advanced feature
const {name, state, address: {city}} = person;
console.log(name);