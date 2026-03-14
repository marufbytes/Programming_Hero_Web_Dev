const persons=["Rakib", "Atif", "Hamim", "Dalim"];
const sortedPerson=persons.sort();
console.log(sortedPerson);

const numbers= [43,5,22,56,8,3,5];
const numbers_asc=numbers.sort(function(a,b) {return a-b});
const numbers_dsc=numbers.sort(function(a,b) {return b-a});

console.log(numbers_asc);
console.log(numbers_dsc);


