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

// task 05

let Arr = [1,2,3,4];
let newArr = [...Arr,6,7];
console.log(newArr);

// task 06

function sumVal(...arg) {
    sum = 0;
    arg.forEach(element => {
        sum += element;
    });
    return sum;
}

// using reduce function

// function sumValUsingReduce(...arg){
//     arg.reduce(function name(acc,curr) {
//         acc += curr;
//         return acc;
//     },0)
    
// }

console.log(sumVal(1,2,3,4,5));
// console.log(sumValUsingReduce(1,2,3,4,5,5));

//task 07

function product(firstVal , secondVal = 1){
    return firstVal*secondVal;
}
console.log(product(10,20));
console.log(product(30));

// task 08

let objLit = new Object();

objLit.val = "Kanha Jii"
objLit.method = function name(params) {
    console.log(1+2);
}
console.log(objLit);