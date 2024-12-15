// add(2,3); //valid
function add(num1, num2){
    console.log("Sum =", num1 + num2);
}
add(2,3);


// sub(5, 3); //does not valid
let sub = function(num1,num2){
    console.log("Substructon = ", num1 - num2);
}
sub(5,3);
const sum = function(...num){
    let res = 0;
    for(let i= 0; i<num.length;i++)
        res = res + num[i];
    return res;
}
console.log("Summation = ",sum(2,3));
console.log("Summation = ",sum(2,3,6));
console.log("Summation = ",sum(2,3,6,5,2,45));

//Arrow function
let div = (num1,num2)=>{
    console.log("Substructon = ", num1 / num2);
}
div(3,2);

const mul = (num1, num2) => num1 * num2;
console.log("Multiplication = ", mul(2,3));

const sq = num => num * num;
console.log("Square = ", sq(5));