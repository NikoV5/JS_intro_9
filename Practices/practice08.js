

//task 1
class Author {
    constructor(firstname, lastname, country, books) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.country = country;
    this.books = books;
    }
    getFullName() {
        return `${this.firstname} ${this.lastname}`;
    }
    
    getBooks() {
        return this.books;
    }
};



// task 2
class Book {
    constructor(title, genre, page) {
        this.title = title;
        this.genre = genre;
        this.page = page;
    }
}


// Task 3

const book1 = new Book('A Game of Thrones', 'Epic Fantasy', 694);
const book2 = new Book('A Clash of Kings', 'Epic Fantasy', 768);
const book3 = new Book('A Storm of Swords', 'Epic Fantasy', 973);

const author1 = new Author('George R. R.', 'Martin', 'United States', [book1, book2, book3]);



console.log(author1.getFullName());


const books = [book1, book2, book3] 

for(const book of books) {
    console.log(book);
}



// Task 4


function Author(firstname, lastname, country, books) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.country = country;
    this.books = books;
}

function Book(title, genre, page) {
    this.title = title;
    this.genre = genre;
    this.page = page;
}



Author.prototype.getFullName = function () {
    return `${this.firstname} ${this.lastname}`;
};

Author.prototype.getBooks = function () {
    return this.books;
};



const book1 = new Book('A Game of Thrones', 'Epic Fantasy', 694);
const book2 = new Book('A Clash of Kings', 'Epic Fantasy', 768);
const book3 = new Book('A Storm of Swords', 'Epic Fantasy', 973);

const author1 = new Author('George R. R.', 'Martin', 'United States', [book1, book2, book3]);


console.log(author1.getFullName());

const books = [book1, book2, book3] 

for(const book of books) {
    console.log(book);
}


