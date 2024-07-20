// task 01

let name = "Hardik", age = 10;
console.log(`Your name is ${name} \nYour age is ${age}`);

// task 02

let string = `Hello jii
Welcome to chai aur code 
Kaise hai ap log`;
console.log(string);

// task 03

// Destructuring an array

let arr = [1,2,3,4,5,6];
let [firstVal , secondVal] = arr;
console.log(firstVal,secondVal);

// task 04

// Destructuring an object

const book = {
    title : 'Any title',
    author : 'Ay',
    year : 2003
}
const {title , author} = book
console.log(`Title of the book : ${title} \nAuthor of this book : ${author}`);