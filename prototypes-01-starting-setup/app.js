class AgedPerson {
    printAge(){
        console.log(this.age);
    }
}

class Person {
    name = 'Jose';

    constructor(){
        this.age = 30
        // this.greet = function() {...}
    }

    greet = () => {
        console.log(`Hi, i am ${this.name} and i am ${this.age} years old.`);
    };
}

// function Person() {
//     this.age = 30;
//     this.name = 'Jose';
//     this.greet = function() {
//         console.log(`Hi, i am ${this.name} and i am ${this.age} years old.`);
//     };
// }

// Person.prototype.greet = function(){
//     console.log(`Hi, i am ${this.name} and i am ${this.age} years old.`);
// };

// Person.describe = function() {
//     console.log('Creating persons.....');
// }

// // Person.prototype = {
// //     printAge(){
// //         console.log(this.age);
// //     }
// // };

// Person.prototype.printAge = function() {
//     console.log(this.age);
// }

// console.dir(Person);
// const p = new Person();
// p.greet();
// // console.log(p.__proto__ === Person.prototype);
// p.printAge();
// console.log(p.length);
// console.log(p.toString());
// const p2 = new p.__proto__.constructor();
// console.dir(Object);
// console.dir(Object.prototype.__proto__);

// const person = new Person();
// const person2 = new Person();
// person.greet()
// console.log(person);
// console.log(person.__proto__ === person.__proto__);


// const button = document.getElementById('btn');
// button.addEventListener('click', person.greet);

const course = { //new Object()
    title: 'Javascript - The Complete Guide',
    rating: 5
};

console.log(Object.getPrototypeOf(course));
Object.setPrototypeOf(course, {
    ...Object.getPrototypeOf(course),
    printRating: function(){
        console.log(`${this.rating}/5`);
    }
});

const student = Object.create({
    printProgress: function(){
        console.log(this.progress);
    }
}, {
    name: {
        configurable: true,
        enumerable: true,
        value: 'Jose',
        writable: true
    }
});
console.log(student);
student.name = 'Max';

Object.defineProperty(student, 'progress', {
    configurable: true,
    enumerable:  true,
    value: 0.8,
    writable: false
});

student.printProgress();
// console.log(course.__proto__);
// course.printRating();
