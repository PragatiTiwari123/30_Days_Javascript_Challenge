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