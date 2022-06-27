// TODO: clean up the remaining css styles
const DISPLAY = document.getElementById('shelf');
const MODAL = document.getElementById('modal');
const BUTTON = document.getElementById('create-book');

let books: Book[] = [];

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

// if local storage has no books, create a few
if(localStorage.getItem('books') === null){
    seedBooks();
    localStorage.setItem('books',JSON.stringify(books));
} else {
    let tmp: any = localStorage.getItem('books');
    books = JSON.parse(tmp);
    console.log('retrieved object',JSON.parse(tmp));
}



// pop the modal dialog
function popModal() : void {
    if(MODAL){
        MODAL.style.display = "block";
    }
}

// close modal when user clicks x
function closeModal() : void {
    if(MODAL){
        MODAL.style.display = "none";
    }
}

// if user clicks outside of modal close it
window.onclick = function(event){
    if(event.target == MODAL){
        if(MODAL){
            MODAL.style.display = "none";
        }
    }
}

// seed the array with a few books
function seedBooks(): void {
    if (books.length === 0) {
        books.push(new Book('Jon Crook','Where the Wild Thing Grows',183,false,'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
        books.push(new Book('Peter Dumperdorf','Animal House',400,false,'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
        books.push(new Book('May Whittendof','Royalty',200,false,'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
        books.push(new Book('Jon Tapper','I like beef?',183,false,'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
    }  
}

// update the bookshelf with all the books
function updateShelf(): void {
    // using a counter to add a data element to allow for deleting on card
    let counter = 0; 

    //if DISPLAY element has content, clear it.
    if(DISPLAY){
        DISPLAY.innerHTML = '';
    }
    
    // loop through each book and create a card with associated information
    books.forEach(e => {
        //create card container
        let card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('bookId',`${counter}`);
        
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
            </ul>
            <button class='card-info-btn' onclick='deleteBook(${counter})'>Delete Book</button>`
        info_cont.classList.add('card-info');

        //append everythign to card
        card.appendChild(img_cont);
        card.appendChild(info_cont);

        //append cards to container
        DISPLAY?.appendChild(card);

        //increment counter
        counter++;
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
function AddBooks(): void{
    const book_title = document.getElementById('book-title') as HTMLInputElement;
    const book_author = document.getElementById('book-author') as HTMLInputElement;
    const book_pages = document.getElementById('book-pages') as HTMLInputElement;
    const book_link = document.getElementById('book-imagelink') as HTMLInputElement;

    books.push(new Book(book_title.value, book_author.value, parseInt(book_pages.value), false, book_link.value));
    localStorage.setItem('books',JSON.stringify(books));
    updateShelf();
    UpdateStats();
    closeModal();
}

// delete book
function deleteBook(id:number) :void {
    books.splice(id,1);
    updateShelf();
    UpdateStats();
}


updateShelf();
UpdateStats();

