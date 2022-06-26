class Book {
    author: string;
    title: string;
    pageCount: number;
    hasRead: boolean;
    art: string;
    
    constructor(author:string, title:string, pageCount:number, hasRead:boolean, art:string){
        this.author = author;
        this.title = title;
        this.pageCount = pageCount;
        this.hasRead = hasRead;
        this.art = art;
    }

    info():void {
        console.log(`${this.author}, ${this.art}, ${this.title}, ${this.hasRead}, ${this.pageCount}`);
    }
}

let books: Book[] = [];
const display = document.getElementById('shelf');
const modal = document.getElementById('modal');
const btn = document.getElementById('create-book');

// pop the modal dialog
function popModal() : void {
    if(modal){
        modal.style.display = "block";
    }
}

// close modal when user clicks x
function closeModal() : void {
    if(modal){
        modal.style.display = "none";
    }
}

// if user clicks outside of modal close it
window.onclick = function(event){
    if(event.target == modal){
        if(modal){
            modal.style.display = "none";
        }
    }
}

// seed the array with a few books
function seedBooks(): void {
    books.push(new Book('Jon Crook','Where the Wild Thing Grows',183,false,'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
    books.push(new Book('Peter Dumperdorf','Animal House',400,false,'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
    books.push(new Book('May Whittendof','Royalty',200,false,'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
    books.push(new Book('Jon Tapper','I like beef?',183,false,'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
    books.push(new Book('Amelia Airheart','Where am I?',444,false,'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
    books.push(new Book('Yess Tess','Arms no feet',183,false,'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
    books.push(new Book('Peter the Great','I am great!',400,false,'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
    books.push(new Book('Wanda Salanda','Lets write backwards!',200,false,'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
    books.push(new Book('Yonah Yons','Why cats?',183,false,'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
    books.push(new Book('Ariana Grande','Im famous',444,false,'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
}

// update the bookshelf with all the books
function updateShelf(): void {
    books.forEach(e => {
        //create card container
        let card = document.createElement('div');
        card.classList.add('card');
        
        //create image container
        let img_cont = document.createElement('div');
        img_cont.innerHTML = `<img src="${e.art}" alt="album art">`
        img_cont.classList.add(`card-image`);

        let info_cont = document.createElement('div');
        info_cont.innerHTML = `
            <ul class="card-info-ul">
            <li>${e.title}</li>
            <li>${e.author}</li>
            <li>${e.pageCount}</li>
            <li>${e.hasRead}</li>
            </ul>`
        info_cont.classList.add('card-info');

        //append everythign to card
        card.appendChild(img_cont);
        card.appendChild(info_cont);

        //append cards to container
        display?.appendChild(card);
    });
}

// update stats on sidebar
function UpdateStats(): void{
    const book_count = document.getElementById('stat-book-count');
    const book_authors = document.getElementById('stat-book-authors');
    const pages_read = document.getElementById('stat-book-pagesread');
    const books_read = document.getElementById('stat-book-booksread');
    const unread_books = document.getElementById('stat-book-unreadbooks');

    let count: number = books.length;
    let authors: number = 0;
    let pages: number = 0;
    let booksread: number = 0;
    let unreadbooks: number = 0;

    book_count?.innerText === count.toString();
}

// add book from modal
function AddBooks(title:string, author:string, pageCount:string, hasRead:boolean, artLink:string): void{
    const book_title = document.getElementById('book-title') as HTMLInputElement;
    const book_author = document.getElementById('book-author') as HTMLInputElement;
    const book_pages = document.getElementById('book-pages') as HTMLInputElement;
    const book_link = document.getElementById('book-imagelink') as HTMLInputElement;

    books.push(new Book(book_title.value, book_author.value, parseInt(book_pages.value), false, book_link.value));

    updateShelf();
    UpdateStats();
    closeModal();
}

seedBooks();
updateShelf();
UpdateStats();

