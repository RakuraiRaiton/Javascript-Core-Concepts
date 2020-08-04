const numbers = [1,2,1,3,2,4,5,5,7,8,12,20,32,48];

const filterArray = numbers.filter((number) => number > 5 );
console.log('Numbers greater than 5', filterArray);

const mapppedNumbers = numbers.map((number,idx) => {
    const numObject = { index: idx, num: number};
    return numObject;
});

// or

const otherNumbers = numbers.map((number) => ({num: number}));


console.log('Number mapped to an object', otherNumbers);

let mult = 1;
const reducedNumbers = numbers.forEach( number => {
    mult *= number;    
});

const multiplication = numbers.reduce((curResult, curValue) => curResult * curValue, 1);
console.log(mult, multiplication);

const findMinNMax = (nums) =>{
    const values = [];
    values.push(Math.max(...nums));
    values.push(Math.min(...nums));
    return values;
};

// const test = findMax(numbers);
// console.log(test);

const [ maxNumber, minNumber] = findMinNMax(numbers);
console.log(maxNumber, minNumber);


for (const number  of numbers){
    if(number === numbers){
        numbers.pop(number);
    }
}

console.log(numbers);

const userIds = new Set();
userIds.add();