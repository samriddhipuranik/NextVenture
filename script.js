const books = [
  {
    cover: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F715%2BG42nSiL._AC_UF1000%2C1000_QL80_.jpg&tbnid=JnNmUhJpBrJV-M&vet=1&imgrefurl=https%3A%2F%2Fwww.amazon.com%2FGreat-Gatsby-Gold-Fitzgeralds-introduction%2Fdp%2FB0B39Y9J5D&docid=AdQNrCbKAwUotM&w=667&h=1000&itg=1&hl=en-GB&source=sh%2Fx%2Fim%2F3',
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
