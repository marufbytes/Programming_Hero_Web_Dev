function multply(num1, num2){
    if(typeof num1!=='number'|| typeof num2!=='number'){
        return "Please provide a number."
    }
    const mult=num1*num2;
    return mult;
}

const result = multply("d",5);
console.log(result);