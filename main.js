// Восстановление порядка книг
const booksContainer = document.querySelectorAll('.book');
const mainContent = document.querySelector('main');
booksContainer.forEach(book => {
    mainContent.append(book);
});

// Замена картинки заднего фона
document.body.style.backgroundImage = 'url("./image/you-dont-know-js.jpg")';

// Исправление заголовка в книге 3
const book3Title = document.querySelector('div.book h2 a[href*="this%20и%20Прототипы%20Объектов"]');
book3Title.textContent = "Книга 3. this и Прототипы Объектов";

// Удаление рекламы
const advSection = document.querySelector('.adv');
advSection.remove();

// Восстановление порядка глав во второй и пятой книге
const book2Chapters = document.querySelectorAll('div.book:nth-child(2) li');
const book5Chapters = document.querySelectorAll('div.book:nth-child(5) li');

book2Chapters.forEach(chapter => {
    document.querySelector('div.book:nth-child(2) ul').append(chapter);
});

book5Chapters.forEach(chapter => {
    document.querySelector('div.book:nth-child(5) ul').append(chapter);
});

// Добавление новой главы в шестую книгу
const newChapter = document.createElement('li');
newChapter.textContent = "Глава 8: За пределами ES6";
document.querySelector('div.book:nth-child(6) ul').append(newChapter);
