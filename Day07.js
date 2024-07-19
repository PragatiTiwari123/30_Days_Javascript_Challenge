// task 01

let book = {
    title : "Harry Potter" ,
    author : "J. K. Rowling" ,
    year : 2024 ,
    changeYear : function (newYear) {
        this.year = newYear;
    }
}
console.log(book);

// task 02

console.log(`Author : ${book.author}`);
console.log(`Title : ${book.title}`);

// task 03

book.changeYear(2003);
console.log(book);