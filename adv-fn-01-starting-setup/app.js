function add(num1, num2) {
    return num1 + num2;
}

console.log(add(1, 5));
console.log(add(12, 15));
// impure function : you have no control of the result, in this case Math.random() create a 
// random number which is not provided by calling the function.

function addRandom(num1) {
    return num1 + Math.random();
}

console.log(addRandom(5));

let previousResult = 0;

function addMoreNumbers(num1, num2) {
    const sum = num1 + num2;
    previousResult = sum;
    return sum;
}

console.log(addMoreNumbers(1,5));

const hobbies = ['Sports', 'Cooking'];

function printHobbies(h) {
    h.push('NEW HOBBY');
    console.log(h);
}

printHobbies(hobbies);

let multiplier = 1.1;

function createTextCalculator(tax) {
    function calculateTax(amount, tax) {
        return amount * tax;
    }

    return calculateTax;
}

// const vatAmount = calculateTax(100, 0.19);
// const incomeTax = calculateTax(100, 0.25);

const calculateVatAmount = createTextCalculator(0.19);
const calculateIncomeTaxAmount = createTextCalculator(0.25);

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

let userName = 'Jose';
function greetUser() {
    let name = 'ANA';
    console.log('Hi' + name);
}
let name = 'David';
userName = 'Manuel';
greetUser();

// function powerOf(x,n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         return *= x;
//     }

//     return result;
// }


function powerOf(x,n) {
    // if (n === 1) {
    //     return x;
    // }
    // return x * powerOf(x,n -1);

    return n === 1 ? x : x * powerOf(x, n -1);
}

console.log(powerOf(2,3));// 2*2*2

const myself = {
    name: 'Max',
    friends: [
        {
            name: 'Manuel',
            friends:[
                {
                    name: 'Chris',
                    friends: [
                        {
                            name: 'Hari'
                        },
                        {
                            name: 'Amilia'
                        }
                    ]
                }
            ]
        },
        {
            name: 'Julia'
        }
    ]
}

function getFriendNames(person) {
    const collectedName = [];

    if (!person.friends) {
        return [];
    }

    for (const friend of person.friends) {
        collectedName.push(friend.name);
        collectedName.push(...getFriendNames(friend));
    }

    return collectedName;
}

console.log(getFriendNames(myself));
