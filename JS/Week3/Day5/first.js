let age = 18;
if(age>=18){
    console.log("Congrats!!! you're eligble for voting...");
}
// else if(condition){}
else{
    console.log("Sorry!!! you're not eligble for voting...");
}

switch(new Date().getDay()){
    case 0:
        console.log("Sunday...");
        break;
    case 1:
        console.log("Monday...");
        break;
    case 2:
        console.log("Tuesday...");
        break;
    case 3:
        console.log("Wednesday...");
        break;
    case 4:
        console.log("Thursday...");
        break;
    case 5:
        console.log("Friday...");
        break;
    case 6:
        console.log("Saturday...");
        break;
    default:
        console.log("Not a valid day...");
}

console.log("Odd numbers upto 5: ");
for(let i=1;i<=5;i++){
    if(i & 1) console.log(i);
}

console.log("Even numbers upto 5: ");
let j=0;
while(j<5){
    if(!(j & 1)) console.log(j);
    j++;
}

console.log("First 5 natural number: ");
let k = 0;
do{
    k++;
    console.log(k);
}while(k<5);

console.log("Patten: ")
let n=5;
for(let i=1;i<=n;i++){
    let ans = 0;
    for(let j=1;j<=i;j++){
        ans = ans * 10 + j;
    }console.log(ans);
}