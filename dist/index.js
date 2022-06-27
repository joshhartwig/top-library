"use strict";
const DISPLAY = document.getElementById('shelf');
const MODAL = document.getElementById('modal');
const BUTTON = document.getElementById('create-book');
let books = [];
class Book {
    constructor(author, title, pageCount, hasRead, art) {
        this.author = author;
        this.title = title;
        this.pageCount = pageCount;
        this.hasRead = hasRead;
        this.art = art;
    }
    info() {
        console.log(`${this.author}, ${this.art}, ${this.title}, ${this.hasRead}, ${this.pageCount}`);
    }
}
if (localStorage.getItem('books') === null) {
    seedBooks();
    localStorage.setItem('books', JSON.stringify(books));
}
else {
    let tmp = localStorage.getItem('books');
    books = JSON.parse(tmp);
    console.log('retrieved object', JSON.parse(tmp));
}
function popModal() {
    if (MODAL) {
        MODAL.style.display = "block";
    }
}
function closeModal() {
    if (MODAL) {
        MODAL.style.display = "none";
    }
}
window.onclick = function (event) {
    if (event.target == MODAL) {
        if (MODAL) {
            MODAL.style.display = "none";
        }
    }
};
function seedBooks() {
    if (books.length === 0) {
        books.push(new Book('Jon Crook', 'Where the Wild Thing Grows', 183, false, 'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
        books.push(new Book('Peter Dumperdorf', 'Animal House', 400, false, 'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
        books.push(new Book('May Whittendof', 'Royalty', 200, false, 'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
        books.push(new Book('Jon Tapper', 'I like beef?', 183, false, 'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
    }
}
function updateShelf() {
    let counter = 0;
    books.forEach(e => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('bookId', `${counter}`);
        let img_cont = document.createElement('div');
        img_cont.innerHTML = `<img src="${e.art}" alt="album art">`;
        img_cont.classList.add(`card-image`);
        let info_cont = document.createElement('div');
        info_cont.innerHTML = `
            <ul class="card-info-ul">
            <li>${e.title}</li>
            <li>${e.author}</li>
            <li>${e.pageCount}</li>
            <li>${e.hasRead}</li>
            </ul>
            <button class='card-info-btn' onclick='deleteBook(${counter})'>Delete Book</button>`;
        info_cont.classList.add('card-info');
        card.appendChild(img_cont);
        card.appendChild(info_cont);
        DISPLAY === null || DISPLAY === void 0 ? void 0 : DISPLAY.appendChild(card);
        counter++;
    });
}
function UpdateStats() {
    const book_count = document.getElementById('stat-book-count');
    const book_authors = document.getElementById('stat-book-authors');
    const pages_read = document.getElementById('stat-book-pagesread');
    const books_read = document.getElementById('stat-book-booksread');
    const unread_books = document.getElementById('stat-book-unreadbooks');
    let count = books.length;
    let authors = 0;
    let pages = 0;
    let booksread = 0;
    let unreadbooks = 0;
    (book_count === null || book_count === void 0 ? void 0 : book_count.innerText) === count.toString();
}
function AddBooks() {
    const book_title = document.getElementById('book-title');
    const book_author = document.getElementById('book-author');
    const book_pages = document.getElementById('book-pages');
    const book_link = document.getElementById('book-imagelink');
    books.push(new Book(book_title.value, book_author.value, parseInt(book_pages.value), false, book_link.value));
    localStorage.setItem('books', JSON.stringify(books));
    updateShelf();
    UpdateStats();
    closeModal();
}
function deleteBook(id) {
    books.splice(id, 1);
    updateShelf();
    UpdateStats();
}
updateShelf();
UpdateStats();
