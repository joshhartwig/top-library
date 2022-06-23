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
function seedBooks() {
    books.push(new Book('Jon Crook', 'Where the Wild Grows', 183, false, 'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
    books.push(new Book('Peter Dumperdorf', 'Animal House', 400, false, 'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
    books.push(new Book('May Whittendof', 'Royalty', 200, false, 'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
    books.push(new Book('Tappy Tons', 'I like beef', 183, false, 'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
    books.push(new Book('Amelia Airheart', 'Where am I?', 444, false, 'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
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
seedBooks();
updateShelf();
