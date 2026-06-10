let pi = 3.1416;
add(5,2);
function add(a,b){
    const factor = 0.5;
    const result=(a+b)*factor+pi;
    const total = doubleIt(result);   //calling function inside function
    return result;

    const value = addTwo(total);
    function addTwo(num){
        num=num+pi;
        return num+2;
    }
}
add(5,10);
// console.log(factor,pi);

function doubleIt(num){
    return num*2;
}

// addTwo(4)  //can't called from outside


const multiply=(a,b)=>{
    console.log(result);
    const result=a*b;  //Temporal dead zone
    return result;
}
// multiply(2,5);


