// task 01

let arr = [1,2,34,5,6];
printArray(arr);

function printArray(arr){
    arr.forEach(element => {
        console.log(element);
    });
}

// task 02

let arr1 = [10,20,30,40,50];
for (let i = 0; i < arr1.length; i++) {
    if(i===0 || i===arr1.length-1){
        console.log(arr1[i]);
    }
    
}

// task 03

arr.push(200);
console.log("Updated Array Elements are : ");
printArray(arr);