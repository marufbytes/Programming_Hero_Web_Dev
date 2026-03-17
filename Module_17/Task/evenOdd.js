function evenOdd(number){
    if(number%2===0){
        return number/2;
    }
    else{
        return number*2;
    }
}

const result1 = evenOdd(4);
console.log(result1);
const result2 =evenOdd(5);
console.log(result2);