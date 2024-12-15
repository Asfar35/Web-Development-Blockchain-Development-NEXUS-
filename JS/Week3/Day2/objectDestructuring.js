const obj = {
    name : "Asfar",
    "Roll No" : 23,
    group : 'A',
    address : {
        city : "Bardhaman",
        pin : 713146
    }
}

//process 1
// const {name, group, address:{city}} = obj;
// console.log(name , group,city);

//process 2
// const {name:Name, group: Gr} = obj;
// console.log(Name,Gr);

//process 3(Rest operator)
const {name, group, ...obj1} = obj;
console.log(name, group);
console.log(obj1);
