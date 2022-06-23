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

function seedBooks(): void {
    books.push(new Book('Jon Crook','Where the Wild Grows',183,false,'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
    books.push(new Book('Peter Dumperdorf','Animal House',400,false,'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
    books.push(new Book('May Whittendof','Royalty',200,false,'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
    books.push(new Book('Tappy Tons','I like beef',183,false,'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
    books.push(new Book('Amelia Airheart','Where am I?',444,false,'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
    books.push(new Book('Yess Tess','Arms no feet',183,false,'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
    books.push(new Book('Yafl mouse','Tom house',400,false,'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
    books.push(new Book('Ars T','Software D',200,false,'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
    books.push(new Book('Yonah Yons','I like beef',183,false,'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
    books.push(new Book('Amelia Airheart','Where am I?',444,false,'https://images-na.ssl-images-amazon.com/images/I/51565LIJlSL._SX368_BO1,204,203,200_.jpg'));
}

// update the bookshelf with all the books
// TODO: Create a card for each book
// TODO: make sure to assign each item a grid-area
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

seedBooks();
updateShelf();

