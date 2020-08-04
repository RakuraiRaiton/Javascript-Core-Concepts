const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddmovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const movies =[];
const entryTextSection =document.getElementById('entry-text');
const deleteModal = document.getElementById('delete-modal');

const updateUI = () =>{
    if (movies.length === 0) {
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
};

const cancelMovieDelition = () =>{
    toggleBackDrop();
    deleteModal.classList.remove('visible');
};

const deleteMovieConfirm = (movieId) =>{
    deleteModal.classList.add('visible');
    const cancelDeletionButton = deleteModal.querySelector('.btn--passive');
    let confirmDeletionButton = deleteModal.querySelector('.btn--danger');

    confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));
    confirmDeletionButton = deleteModal.querySelector('.btn--danger');

    // confirmDeletionButton.removeEventListener('click', deleteMovieConfirm.bind(null, movieId)); //will not work
    cancelDeletionButton.removeEventListener('click', cancelMovieDelition);
    cancelDeletionButton.addEventListener('click', cancelMovieDelition);
    confirmDeletionButton.addEventListener(
        'click',
        deleteMovie.bind(null,movieId)
    );
    // deleteMovie(movieId);
};

const deleteMovie = (movieId) => {
    let movieIndex = 0;

    for (const movie of movies) {
        if (movie.id === movieId) {
            break;
        }
        movieIndex++;
    }

    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove();
    // listRoot.removeChild(listRoot.children[movieIndex]); //-Works on old browsers
    closeMovieModal();
    deleteModal.classList.remove('visible');
    updateUI();
};

const renderNewMovieElement = (id,title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
        <div class="movie-element__image">
            <img src="${imageUrl}" alt="${title}"/>
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5 Stars</p>
        </div>
    `;
    newMovieElement.addEventListener('click', deleteMovieConfirm.bind(null, id));
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);

};

const showMovieModal = () => {
    addMovieModal.classList.add('visible');
    toggleBackDrop();
};

const clearInputs = () => {
    for (const usrInput of userInputs) {
        usrInput.value = '';
    }
};

const toggleBackDrop = () =>{
    backdrop.classList.toggle('visible');
};

const closeMovieModal = () => {
    addMovieModal.classList.remove('visible');
};

const cancelAddMovie = () => {
    closeMovieModal();
    toggleBackDrop();
    clearInputs();
};

const addMovieHandler = () =>{
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if(titleValue.trim() === '' || 
       imageUrlValue.trim() === '' || 
       ratingValue.trim() === '' ||
       +ratingValue < 1 ||
       +ratingValue > 5
    ){
        alert('Please enter valid values (rating between 1 and 5).');
        return;
    }

    const newMovie = {
        id: Math.random.toString(),
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };

    movies.push(newMovie);
    console.log(movies);
    toggleBackDrop();
    closeMovieModal();
    clearInputs();
    renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
    updateUI();
};

const backdropClickHandler = () => {
    closeMovieModal();
    cancelMovieDelition();
    clearInputs();
};

startAddMovieButton.addEventListener('click', showMovieModal);
backdrop.addEventListener('click',backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovie);
confirmAddmovieButton.addEventListener('click', addMovieHandler);
console.log(addMovieModal);