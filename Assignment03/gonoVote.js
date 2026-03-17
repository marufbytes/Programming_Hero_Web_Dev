function gonoVote(array) {
    if(!Array.isArray(array)){
        return "Invalid";
    }

    let haCount =0;
    let naCount =0;

    for (const num of array){
        if (num==="ha"){
            haCount++;
        }
        if(num==="na"){
            naCount++;
        }
    }

    if(haCount>naCount){
        return true;
    }
    else if(naCount===haCount){
        return "equal";
    }
    else{
        return false;
    }
}

console.log(gonoVote(["ha", "na", "ha"])); 
