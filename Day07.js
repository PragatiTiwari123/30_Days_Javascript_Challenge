// task 01

let book = {
    title : "Harry Potter" ,
    author : "J. K. Rowling" ,
    year : 2024 ,
    changeYear : function (newYear) {
        this.year = newYear;
    },
    printtitle : function(){
        // console.log(`Title of the book : ${this.title} \n Author of the book : ${this.author} `);
        return (this.title);
    },
    printAuthor : function(){
        return (this.author);
    }
}
console.log(book);

// task 02

console.log(`Author : ${book.author}`);
console.log(`Title : ${book.title}`);

// task 03

book.changeYear(2003);
console.log(book);

// task 04

console.log(`Title of the book : ${book.printtitle()} \nAuthor of the book : ${book.printAuthor()} `);

// task 05

let library = {
    name : "Pushtakalaya",
    books : [{
        title : "Harry Potter" ,
        author : "J. K. Rowling" ,
        year : 2024 
    },{
        title : "Harry" ,
        author : "J. K. Rowling" ,
        year : 2024 
    }]
}
console.log(library);

// task 06

console.log(library.name);
library.books.forEach(element => {
    console.log(element.title);
});

// task 07

for (let keys in book) {
    console.log(`Property of the book : ${keys} \nValue of that property : ${book[keys]}`);
}

//task 08

console.log(Object.keys(book));
console.log(Object.values(book));

// task 09

// adding method to return the title and author using this keyword nd log the calling this method values

console.log(`Author : ${book.author}`);
console.log(`Title : ${book.title}`);