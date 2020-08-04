const h1 = document.getElementById('main-title');

h1.textContent = 'Some new title!';
h1.style.color = 'white';
h1.style.backgroundColor = 'black';

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' (Changed!)';

const body = document.body;

// const listItemElements = document.querySelectorAll('li');
const listItemElements = document.getElementsByTagName('li');

for (const listItemEl of listItemElements) {
  console.dir(listItemEl);
}

const input  = document.querySelector('input');

console.dir(input);

const allList = document.querySelectorAll('li');
 
//   

// const ul = li.parentElement;

const ul = document.body.firstElementChild.nextElementSibling;
ul.previousSibling;

ul.previousElementSibling;

ul.nextSibling;

ul.nextElementSibling;
const firstLi = ul.firstElementChild;

console.log(firstLi);

// Style DOM Elements


const section = document.querySelector('section');
const button = document.querySelector('button');

section.className = 'red-bg';

button.addEventListener('click', () =>{
  // if (section.className === 'red-bg visible') {
  //   section.className = 'red-bg invisible'  
  // } else {
  //   section.className = 'red-bg visible'  
  // }

  section.classList.toggle('visible');
  section.classList.toggle('invisible');

  
});


//162. Adding Elements via HTML in Code


section.innerHTML

// const thirdList = document.querySelector('ul');

// const div = document.querySelector('div');

// div.innerHTML = div.innerHTML + '<p>Something went wrong</p>';

// div.insertAdjacentHTML('beforeend','<p>Something went wrong</p>');


// 163. adding elements via createElement()

const thirdList = document.querySelector('ul');

const newLi = document.createElement('li');

thirdList.appendChild(newLi);
thirdList.appendChild(newLi);

newLi.textContent = 'item 4';
newLi.textContent = 'item 5';


//164 Inserting DOM Elements
thirdList.prepend(newLi);

thirdList.lastElementChild

thirdList.lastElementChild.before(newLi);

thirdList.lastElementChild.after(newLi);

thirdList.firstElementChild.replaceWith(newLi);

thirdList.insertAdjacentElement('afterend', newLi);

//165 Cloning DOM Nodesss


const newLi2 = newLi.cloneNode(true);

//166 Live Node List vs Static Node List

const fourthList = document.querySelector('ul');

const listItems = fourthList.querySelectorAll('li');

const listItems2 = list.getElementsByTagName('li');


//167 Remove Elements

listItems.remove(); //Not Supported by IE
listItems.parentElement.removeChild(list);