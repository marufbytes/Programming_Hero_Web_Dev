function sumOfArray(numbers){
    let sum =0;
    for (const number of numbers){
        console.log(number);
        sum +=number;
    }
    return sum;
}

const nums = [45,55,67,45,22];
const sum = sumOfArray(nums);

console.log("Sum of numbers: ",sum);