let x=10;
console.log(x);
function fun(n){//pass by value
    n = 20;
    // console.log(n);
}
fun(x);
console.log(x);

const obj = { name: "Asfar",age:23}
function fun(obj1){//pass by reference //{name,age}){//pass by value
    obj1.name = "Asad";
}
fun(obj);
console.log(obj);