// task 01

let num = 10;
if (num>0) {
    console.log("Positive");
}
else if(num===0){
    console.log("Zero");
}
else{
    console.log("Negative");
}

// task 02

let age = 20;
if(age>=18){
    console.log("Eligible");
}
else{
    console.log("Not Eligible");
}

// task 03 

let num1 = 200, num2 = 100, num3 = 40;

if(num1>num2){
    if(num1>num3){
        console.log("First number is the greatest number");
    }
    else{
        console.log("Third number is the greatest number");
    }
}
else{
    if(num2>num3){
        console.log("Second number is the greatest number");
    }
    else{
        console.log("Third number is the greatest number");
    }
}

// task 04

let day_num = 3;

switch (day_num) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        break;
}

// task 05 

let score = 70;
function isEligible(score){
    switch (true) {
        case score >=80:
            return("Grade A");
        case score <= 80 && score >=60:
            return("Grade B");
        case score <= 60 && score >=45:
            return("Grade C");
        case score <= 45 && score >=33:
            return("Grade D");
        default:
            return("X");
    }
}
let getResult = isEligible(score);
console.log(getResult);