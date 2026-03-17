function finalScore(omr) {
    if (typeof omr !== "object"|| typeof omr.right!=="number"||typeof omr.wrong!=="number"||typeof omr.skip!=="number"){
        return "Invalid";
    }
    else if(omr.right+omr.wrong+omr.skip!==100){
        return "Invalid";
    }
    else{
        const finalScore = (omr.right*1)-(omr.wrong*0.5)-(omr.skip*0);
        return Math.round(finalScore);
    }
}

console.log(finalScore({ right: 80, wrong: 10, skip: 10 }));

