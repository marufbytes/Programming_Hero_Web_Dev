const max = Math.max(3,5,6,8,2,4);
console.log(max);

const numbers = [3,5,6,7,8,9,2,5];
const max2=Math.max(...numbers);
console.log(max2);
console.log(...numbers);  // NOT ARRAY
console.log(numbers);  //ARRAY  

const params = [45,13,3];
function sum(x,y,z){
    return x+y+z;
}
const result=sum(...params);
console.log(result);

// const arr1=[1,2,3];
// const arr2=arr1;
// arr2.push(4);
// console.log(arr1);
// console.log(arr2);

const arr1=[1,2,3];
const arr2=[...arr1];
arr2.push(4);
console.log(arr1);
console.log(arr2);