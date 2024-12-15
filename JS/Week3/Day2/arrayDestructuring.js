const arr = [1,2,3,4,5,[1,2]];
arr[2]="Asfar";
console.log(arr);

//process 1
// const [first, second] = arr; //first,second => variable name
// console.log(first, second);

//process 2
// const [,first, second,,third] = arr;
// console.log(first, second, third);

//process 3(Rest operator)
const [first,second,...arr1] = arr;

arr1[3][1]=null;
console.log(first,second,arr1,arr);