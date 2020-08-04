const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const userId = 'u123';
const user = {
    namer: 'Jose',
    age: 30,
    hobbies: ['Sports','Cooking']
};


storeBtn.addEventListener('click', () => {
    sessionStorage.setItem('uid', userId);
    localStorage.setItem('user', JSON.stringify(user));

});

retrBtn.addEventListener('click', () => {
    const extractedId = sessionStorage.getItem('uid');
    const extractedUser = JSON.parse(localStorage.getItem('user'));
    console.log(extractedUser);

    if (extractedId) {
        console.log(`got the id - ${extractedId}`);
    } else {
        console.log(`Couldn not find id. `);
    }
});