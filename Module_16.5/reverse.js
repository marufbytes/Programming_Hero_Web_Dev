const numbers = [1,3,4,5,6,7,8];

// const reversed = numbers.reverse();
// console.log(reversed);

const rev_num=[];

for(const num of numbers){
    // console.log(num);
    rev_num.unshift(num);
}

// console.log(rev_num);

const reversed_numbers =[];
for(let i=0;i<numbers.length;i++){
    const num=numbers[i];
    reversed_numbers.unshift(num);
}

const rev_rev_num=[];
for(let i = numbers.length-1; i>=0;i--){
const num = numbers[i];
// console.log(num);
rev_rev_num.push(num);

}

console.log(rev_rev_num);