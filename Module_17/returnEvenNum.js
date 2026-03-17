function evenNumbers (numbers){
    const evens =[];
    for (number in numbers){
        if(number%2===0){
            console.log(number);
            evens.push(number);
        }
    }
    return evens;
}

const arr =[4,4,6,2,8,6,5,54,6,5,43,3,3];
const finalArr = evenNumbers(arr);

const evens = evenNumbers(arr);
console.log("Even numbers: ", evens);
