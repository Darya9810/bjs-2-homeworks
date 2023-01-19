class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        this.state = this.state * 1.5;
        if (this.state > 100) {
            this.state = 100;
        }
    }
    set state(condition) {
        this._state = condition;
        if (this.state < 0) {
            this.state = 0;
        }
        if (this.state > 100) {
            this.state = 100;
        }
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.type = "detective";
    }
}

// Задача 2

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
        //this.state = 100;
    }
    addBook(book) {
        if (book.state > 30) this.books.push(book);
    }
    findBookBy(type, value) {
        const book = this.books.find((book) => book[type] === value);
        return book || null;
    }

    giveBookByName(bookName) {
        const book = this.findBookBy("name", bookName);
        const bookIndex = this.books.indexOf(book);
        if (bookIndex !== -1) {
            this.books.splice(bookIndex, 1);
            return book;
        }
        return null;
    }
}