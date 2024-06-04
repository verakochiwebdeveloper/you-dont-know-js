const booksContainer = document.querySelectorAll('.book');
const mainContent = document.querySelector('main');
booksContainer.forEach(book => {
    mainContent.appendChild(book);
});

document.body.style.backgroundImage = 'url("image/new_background.jpg")';

const book3Title = document.querySelector('div.book h2 a[href*="this%20и%20Прототипы%20Объектов"]');
book3Title.textContent = "Книга 3. this и Прототипы Объектов";

const advSection = document.querySelector('.adv');
advSection.remove();

const book2Chapters = document.querySelectorAll('div.book:nth-child(2) li');
const book5Chapters = document.querySelectorAll('div.book:nth-child(5) li');

book2Chapters.forEach(chapter => {
    document.querySelector('div.book:nth-child(2) ul').appendChild(chapter);
});

book5Chapters.forEach(chapter => {
    document.querySelector('div.book:nth-child(5) ul').appendChild(chapter);
});

const newChapter = document.createElement('li');
newChapter.textContent = "Глава 8: За пределами ES6";
document.querySelector('div.book:nth-child(6) ul').appendChild(newChapter);
