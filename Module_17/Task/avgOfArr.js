function avg_arr (array){
    let sum =0;
    for(const num of array){
        sum+=num;
    }
    const avg = sum/array.length;
    return avg;
}

const arr = [1,2,3,4,5,6,7,8,9];
const avg = avg_arr(arr);
console.log(avg);