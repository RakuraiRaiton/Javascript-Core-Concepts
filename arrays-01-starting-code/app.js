// const numbers = [1, 2, 3];

// console.log(numbers);

// const moreNumbers = new Array(1,5);
//const moreNumbers = new Array(5); // if you use the constructor to create an array and assign only one value,
                                 //the constructor will create an empty array and set the lenght to the number you entered.
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1,2);
// console.log(yetMoreNumbers);

// const moreNumbers = Array.from("Hi!"); // it takes an iterable or an array like object
// console.log(moreNumbers);


// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ['cooking','sports'];
// const personalData = [30, 'Max', {moreDetail: []}];

// const analyticsData = [[1,1.6], [-5.4, 2.1]];

// for (const data of analyticsData){
//     for (const datapoints of data) {
//         console.log(datapoints);
//     }
// }

// console.log(personalData[1]);

// const hobbies = ['cooking','sports'];

// hobbies.push('reading');
// hobbies.unshift('Coding');
// const poppedValue = hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = 'Coding';
// //hobbies[5] = 'Reading'; //rarely used
// console.log(hobbies);

// hobbies.splice(1, 0, 'Good Food');
// console.log(hobbies);

// const removeElement = hobbies.splice(-2, 1);
// console.log(hobbies);

// const testResults = [1, 5.3, 1.5,10.99,-5,10];
// const storedResults = testResults.slice();
// const storedResults = testResults.slice(0,2); //you can specify a start and end
// const storedResults = testResults.slice(2); 

// const storedResults = testResults.concat([3.99, 2]);
// const storedResults = testResults.concat([3.99, 2]);

// console.log(storedResults, testResults);
// console.log(testResults.indexOf(1.5));
// console.log(testResults.lastIndexOf(1.5)); // works well for primitive values but no for reference values

// const personData = [{name: 'jose'}, {name: 'Max'}];

// console.log(personData.indexOf({ name: 'Max'}));

// const max = personData.find((person, index, persons) =>{
//     return person.name === 'Max';
// });

// const findMax = personData.findIndex((person, index, persons) =>{
//     return person.name === 'Max';
// });
// console.log(max);
// console.log(findMax);

// 194. Alternative to for Loops: forEach()

// const prices = [10.99, 5.99, 3.99,6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// //     taxAdjustedPrices.push(price * (1+tax));
// // }


// prices.forEach((price, idx, prices) =>{
//     const priceObj = { index: idx, taxAdjPrice: price * (1 + tax)}
//     taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

//195. Transforming Data with map()

// const prices = [10.99, 5.99, 3.99,6.59];
// const tax = 0.19;


// const taxAdjustedPrices = prices.map((price, idx, prices) =>{
//     const priceObj = { index: idx, taxAdjPrice: price * (1 + tax)}
//     return priceObj;
// });

// console.log(prices, taxAdjustedPrices);


//196. sort and reverse


// const prices = [10.99, 5.99, 3.99,6.59];
// const tax = 0.19;


// const taxAdjustedPrices = prices.map((price, idx, prices) =>{
//     const priceObj = { index: idx, taxAdjPrice: price * (1 + tax)}
//     return priceObj;
// });

// // console.log(prices, taxAdjustedPrices);

// const sortedPrices = prices.sort((a,b) =>{
//     if (a > b) {
//         return 1;
//     } else if (a === b){
//         return 0;
//     } else {
//         return -1;
//     } 
// });
// console.log(sortedPrices.reverse());

//197. Filtering Arrays with filter()

// const prices = [10.99, 5.99, 3.99,6.59];
// const tax = 0.19;


// const taxAdjustedPrices = prices.map((price, idx, prices) =>{
//     const priceObj = { index: idx, taxAdjPrice: price * (1 + tax)}
//     return priceObj;
// });

// // console.log(prices, taxAdjustedPrices);

// const sortedPrices = prices.sort((a,b) =>{
//     if (a > b) {
//         return 1;
//     } else if (a === b){
//         return 0;
//     } else {
//         return -1;
//     } 
// });
// console.log(sortedPrices);

// const filteredArray = prices.filter(price => price > 6);

// console.log(filteredArray);

//199.Reduce Method


// const prices = [10.99, 5.99, 3.99,6.59];
// const tax = 0.19;


// const taxAdjustedPrices = prices.map((price, idx, prices) =>{
//     const priceObj = { index: idx, taxAdjPrice: price * (1 + tax)}
//     return priceObj;
// });

// // console.log(prices, taxAdjustedPrices);

// const sortedPrices = prices.sort((a,b) =>{
//     if (a > b) {
//         return 1;
//     } else if (a === b){
//         return 0;
//     } else {
//         return -1;
//     } 
// });
// console.log(sortedPrices);

// const filteredArray = prices.filter(price => price > 6);

// console.log(filteredArray);

// // let sum = 0;

// // prices.forEach((price)=> {
// //     sum += price
// // });

// //or

// const sume = prices.reduce((prevValue,curValue,curIndex, prices)=>{
//     return prevValue + curValue;
// }, 0);

// console.log(sum);

// 201. Arrays & Strings - split() and join()

// const data = 'New York;10.99;2000';


// const transformedData = data.split(';');
// transformedData[1] = +transformedData[1];

// console.log(transformedData);

// const namedFragments = ['Max', 'Schwarz'];
// const name = namedFragments.join(' ');
// console.log(name);

// 202. The Spread Operators (....)

// const data = 'New York;10.99;2000';
// const prices = [10.99, 5.99, 3.99,6.59];

// const transformedData = data.split(';');
// transformedData[1] = +transformedData[1];

// console.log(transformedData);

// const namedFragments = ['Max', 'Schwarz'];
// const name = namedFragments.join(' ');

// const copiedNameFragment = [...namedFragments];
// namedFragments.push('Mr');
// console.log(namedFragments, copiedNameFragment);

// console.log(Math.min(...prices));

// const person = [{ name: 'Max', age: 30}, {name:'Manuel', age: 31}];
// const copiedPersons = [...person.map(person => ({
//     name: person.name, 
//     age: person.age
// }))];

// person.push({name: 'Ana', age: 29});

// console.log(person, copiedPersons);


//203. Understanding Array Destructuring


const nameData = ['Max', 'Jose', 'Mr', 30];

const [ firstName, lastName, ...otherInformation] = nameData;
console.log(firstName, lastName, otherInformation);