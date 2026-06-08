//Function declaration -> can use after and before declaration
function add(num1,num2){
    return num1+num2;
}

//function expression -> can't use before declaration
const add2=function(num1,num2){
    return num1+num2;
}

//arrow function
const add3=(num1,num2) => num1+num2   //return things after arrow symbor 
console.log(add3(50,60));

const tenTimes= x => x*10;

const getPi=()=>3.1416;

const addAll = (a,b,c,d,e)=>a+b+c+d+e;

const doMath=(x,y)=>{
    const sum=(x+y);
    const diff=(x-y);
    const result = sum*diff;
    return diff;
}

// document.getElementById('btn').addEventListener('click',()=>{

// })
document.getElementById('btn').addEventListener('click',()=>{

})