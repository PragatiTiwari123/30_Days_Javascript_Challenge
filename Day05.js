// task 01

function CheckEvenOdd(num){
    if(num%2===0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}
CheckEvenOdd(10);

// task 02

function SquareOfNum(num){
    return num*num;
}
console.log(SquareOfNum(5));

// task 03

function MaxOfTwo(num1,num2){
    if(num1>num2){
        console.log("First number is greater then other");
    }
    else{
        console.log("Second number is greatest then first one");
    }
}
MaxOfTwo(100,15);

// task 04

function StringConcat(str1,str2){
    return `${str1} ${str2}`
}
console.log(StringConcat("Trust","God"));

// task 05

let SumOfTwo = (num1,num2) => {
    console.log(num1+num2);
};
SumOfTwo(10,20);