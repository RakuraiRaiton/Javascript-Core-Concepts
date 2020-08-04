const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const secondRandNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if( randomNumber >= 0.7){
    alert(`This shit is greater than 0.7 bitch ${randomNumber}`);
} else{
    console.log(`${randomNumber}`);
}

let arrayNum = [ 54, 67, 12, 45, 6, 8, 90, 12, 34, 28];

for( let i = 10; i < arrayNum.length; i++){
    console.log(arrayNum[i]);
}

for(const number of arrayNum){
     console.log(number);
}


for( let i = arrayNum.length -1; i >= 0 ; i--){
    console.log(arrayNum[i]);
}

if((secondRandNumber > 0.7 && randomNumber > 0.7)||(randomNumber <= 0.2 || secondRandNumber <= 0.2)){
    alert(`1st Number -->${randomNumber} 2nd Number -->${secondRandNumber}`);
}