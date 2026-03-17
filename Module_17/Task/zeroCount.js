function zeroCount(arr){
    let count =0;
    for(const num of arr){
        if (num ===0){
            count++;
        }
    }
    return count;
}

const arr = [1,0,1,0,1,0,0,0,1,0,1];
const zeros = zeroCount(arr);
console.log(zeros);