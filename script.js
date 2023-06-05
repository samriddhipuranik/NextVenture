const books = [
  {
    cover: 'book1.jpg',
    title: 'Book 1',
    author: 'Author 1',
    genre: 'Genre 1',
    pages: 150
  },
  {
    cover: 'book2.jpg',
    title: 'Book 2',
    author: 'Author 2',
    genre: 'Genre 2',
    pages: 250
  },
  // Add details of other books here
];

let currentIndex = 0;

const bookCover = document.querySelector('.book img');
const titleElement = document.querySelector('.title');
const authorElement = document.querySelector('.author');
const genreElement = document.querySelector('.genre');
const pagesElement = document.querySelector('.pages');
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');

function displayBookDetails(index) {
  const book = books[index];
  bookCover.src = book.cover;
  titleElement.textContent = book.title;
  authorElement.textContent = `Author: ${book.author}`;
  genreElement.textContent = `Genre: ${book.genre}`;
  pagesElement.textContent = `Pages: ${book.pages}`;
}

function showPreviousBook() {
  if (currentIndex > 0) {
    currentIndex--;
    displayBookDetails(currentIndex);
  }
}

function showNextBook() {
  if (currentIndex < books.length - 1) {
    currentIndex++;
    displayBookDetails(currentIndex);
  }
}

previousButton.addEventListener('click', showPreviousBook);
nextButton.addEventListener('click', showNextBook);

// Display initial book details
displayBookDetails(currentIndex);