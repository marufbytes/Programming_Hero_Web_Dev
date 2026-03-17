// for a given string tell me wheateher it has even numbers of characters or not

function evenSizeString(str){
    const size = str.length;

    if(size%2===0){
        console.log("Even size");
        return true;
    }
    else{
        console.log("Odd Size");
        return false;
    }
    console.log(str, size);

}

// evenSizeString("Dhaka");
// evenSizeString("Faka");

function doubleOrTriple(number, doDouble){
    if(doDouble===true){
        const result=number*2;
        return result;
    }
    else{
        const result = number*3;
        return result;
    }
}


// console.log(doubleOrTriple(5,true));
// console.log(doDoubleOrTriple(5,false));

function numberOfElement(numbers){
    const len = numbers.length;
    return len;
}

const result = numberOfElement([34,543,544,543,54,44,5,3]);
console.log(result);
