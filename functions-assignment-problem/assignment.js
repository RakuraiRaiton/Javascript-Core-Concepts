// const sayHello = (name) => {
//   console.log('Hi ' + name);
// };

const sayHello = (greeting, name) => {
  console.log(greeting + name);
};

// const sayHello = () => {
//   console.log('Hi Jose');
// };

// const sayHello = (phrase = 'John Doe') => {
//   console.log(phrase);
// };


sayHello('Halo','Jose');

const exeCallback = () => {
  console.log('petter, olaf, bjorn, max, jose');
}

const checkInput = (resultHandler,...numbers) =>{
  let hasEmptyText = false;
  for(const text of numbers){
    if(!text){
      hasEmptyText = true;
      break;
    }
  }
  if(!hasEmptyText){
    resultHandler();
  }

};

checkInput(() => {
  console.log('All Not empty');
}, 'Hello','Is it', 'Me', 'you are', 'for');