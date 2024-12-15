const obj = {
    name : "Asfar",
    address : {
        city : "Bardhaman",
        pin : 713146
    }
}
// console.log(obj.address.city);

//Process1:(Deep copy) 
// const obj1 = structuredClone(obj);
// obj1.name = "Asad";
// console.log(obj.name);
// obj1.address.city = "Dubai";
// console.log(obj.address.city);

//process2:(Mixtured:Deep & shallow)
// const obj2 = Object.assign({},obj);
// console.log(obj2);
// obj2.name = "Asad"; //Deep copy
// console.log(obj.name); 
// obj2.address.city = "Dubai"; //shallow copy
// console.log(obj.address.city);

//Process3:(Shallow & Deep)
const obj3 = {...obj};
console.log(obj3);
obj3.name = "Asad";
console.log(obj.name);
obj3.address.city = "Dubai";
console.log(obj.address.city);
console.log(obj3);
