const movieList = document.getElementById('movie-list');

let person = {
    name: 'Jose',
    age: 28,
    hobbies: ['Sports', 'Gym', 'Cooking'],
    greet: function() {
        alert('Hi there!!!!!');
    }
};

//216.Adding,Modifying & Deleting Properties
//Add & Modify
person.age =40;
person.isAdmin = true;
console.log(person);

//Delete
delete person.age;
person.age = undefined;
person.age = null;

//217.Special key names & Square Brackets Property Access

let person1 = {
    'first name': 'Jose',
    age: 28,
    hobbies: ['Sports', 'Gym', 'Cooking'],
    greet: function() {
        alert('Hi there!!!!!');
    }
};


// movieList.style['background-color'] = 'red';
// movieList.style.display = 'block';


//218. Property types & Property Order 

let person2 = {
    'first name': 'Jose',
    age: 28,
    hobbies: ['Sports', 'Gym', 'Cooking'],
    greet: function() {
        alert('Hi there!!!!!');
    },
    1.5: 'hello'
};

console.log(person2[1.5]);
console.log(person2);


//219. Dynamic Properties Access & Settings Properties Dynamically


const keyName = 'first name';
console.log(person2[keyName]);

const userChosenKeyName = 'level';

let person3 = {
    'first name': 'Jose',
    age: 28,
    hobbies: ['Sports', 'Gym', 'Cooking'],
    [userChosenKeyName]: "....",
    greet: function() {
        alert('Hi there!!!!!');
    },
    1.5: 'hello'
};
