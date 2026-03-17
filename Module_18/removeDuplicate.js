const biriyaniKhor = ["Abul", "Babul", "Kabul", "Abul", "Babul", "Dabul", "Babul"];

const numbers = [1, 4, 56, 7, 4, 67, 4, 4, 7, 3, 8, 3, 52, 3];

function noDuplicate(array) {
    const unique = [];
    for (const item of array) {
        if (unique.includes(item) === false) {
            unique.push(item);
        }
    }
    return unique;
}

const uniqueArray = noDuplicate(biriyaniKhor);
console.log(uniqueArray);
