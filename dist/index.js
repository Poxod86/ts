class Book {
    constructor(name, genre, pageAmount) {
        this.name = name;
        this.genre = genre;
        this.pageAmount = pageAmount;
    }
}
const books = [
    new Book('Harry potter', 'fantasy', 900),
    new Book('Warcraft', 'adveture', 600),
    new Book('Game of trones', 'dramma', 400),
    new Book('Adveture', 'fantasy', 300),
];
function findBook(genre, page, multipleRecommendations = true) {
    const findAlgorithm = (book) => {
        return book.genre == genre && book.pageAmount <= page;
    };
    if (multipleRecommendations) {
        return books.filter(findAlgorithm);
    }
    else {
        return books.find(findAlgorithm);
    }
}
console.log(findBook('fantasy', 1000));
