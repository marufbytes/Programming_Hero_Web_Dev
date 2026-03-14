const person = {
    name: 'Maruf Ahammed',
    age: 22,
    profession: 'Student',
    salary: 0,
    married: false,
    'fav palces': ["Bandarban", "Saint Martin", "Sylhet", "Chittagong"]
}
console.log(person)

person.salary=30000;
person["age"]=26;
console.log(person);

//dot notation
console.log(person.name)
const income = person.salary;
console.log(income)

//bracket notation
console.log(person['age'])
const boyosh = person['age']
console.log(boyosh)

//console log
console.log(person['fav palces'])

const keyName ="profession";
console.log(person[keyName])

const propname = 'profession';
person[propname]= "DevOps";
console.log(propname)