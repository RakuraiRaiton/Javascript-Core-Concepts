// const id = new Set(['Hi', 'From', 'Set!']);
// // id.add(2);
// // console.log(id.has(2));
// // id.delete(2);

// if(id.has('Hi')){
//     id.delete('Hi');
// } 

// for (const entry of id.entries()) {
//     console.log(entry[0]);
// }

// const person1 = {name: 'Jose'};
// const person2 = {name: 'David'};

// const personData = new Map([[person1, [{date: 'yesterday', price: 10}]]]);

// personData.set(person2, [{date:'Two Weeks ago', price: 100}]);

// console.log(personData);
// console.log(personData.get(person1));

// for (const entry of personData.entries()) {
//     console.log(entry);
// }


// for (const [key, value] of personData.entries()) {
//     console.log(key, value);
// }

// for (const key of personData.keys()) {
//     console.log(key);
// }


// for (const values of personData.values()) {
//     console.log(values);
// }

let person = {name: 'Jose'};
const persons = new WeakSet();
persons.add(person);

//... some operations
//person = null;

console.log(persons);


const personData = new WeakMap();
personData.set(person, 'Extra Info!');

person = null;

console.log(personData);