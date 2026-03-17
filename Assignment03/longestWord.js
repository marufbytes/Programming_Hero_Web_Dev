function analyzeText(str) {
    if (typeof str !== "string"|| str.trim()==="") {
        return "Invalid";
    }

    let words = str.split(" ");
    let longestWord = "";

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    let totalChars = str.replace(/ /g, "").length;
    return {
        longwords: longestWord,
        token: totalChars
    };
}

console.log(analyzeText("I love my county"));