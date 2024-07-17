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
    return (num1+num2);
};
console.log(SumOfTwo(10,20));

// task 06

let CheckSpecialChar = (str) => {
    for (let i = 0; i < str.length; i++) {
        // const element = str[i];
        if(( str.charCodeAt(i) < 65 ) || (str.charCodeAt(i) > 90 && str.charCodeAt(i) < 97) || str.charCodeAt(i) >120){
            return ("True");
        }
    }
}
console.log(CheckSpecialChar("ragati?~`"));

// task 07

function ProductOfTwo(num1,num2 = 1){
    return num1*num2;
}
console.log(ProductOfTwo(10,6));