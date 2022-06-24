"use strict";
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
let books = [];
const display = document.getElementById('shelf');
const modal = document.getElementById('modal');
const btn = document.getElementById('create-book');
function popModal() {
    if (modal) {
        modal.style.display = "block";
    }
}
function closeModal() {
    if (modal) {
        modal.style.display = "none";
    }
}
window.onclick = function (event) {
    if (event.target == modal) {
        if (modal) {
            modal.style.display = "none";
        }
    }
};
function seedBooks() {
    books.push(new Book('Jon Crook', 'Where the Wild Thing Grows', 183, false, 'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
    books.push(new Book('Peter Dumperdorf', 'Animal House', 400, false, 'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
    books.push(new Book('May Whittendof', 'Royalty', 200, false, 'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
    books.push(new Book('Jon Tapper', 'I like beef?', 183, false, 'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
    books.push(new Book('Amelia Airheart', 'Where am I?', 444, false, 'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
    books.push(new Book('Yess Tess', 'Arms no feet', 183, false, 'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
    books.push(new Book('Peter the Great', 'I am great!', 400, false, 'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
    books.push(new Book('Wanda Salanda', 'Lets write backwards!', 200, false, 'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
    books.push(new Book('Yonah Yons', 'Why cats?', 183, false, 'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
    books.push(new Book('Ariana Grande', 'Im famous', 444, false, 'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
}
function updateShelf() {
    books.forEach(e => {
        let card = document.createElement('div');
        card.classList.add('card');
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
            </ul>`;
        info_cont.classList.add('card-info');
        card.appendChild(img_cont);
        card.appendChild(info_cont);
        display === null || display === void 0 ? void 0 : display.appendChild(card);
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
function AddBooks(title, author, pageCount, hasRead, artLink) {
    books.push(new Book(title, author, parseInt(pageCount), hasRead, artLink));
    updateShelf();
    UpdateStats();
    closeModal();
}
seedBooks();
updateShelf();
UpdateStats();
