const numbers = [1,3,4,5,6];

for (const number of numbers){
    console.log(number);
}

const employee={
    name:'john doe',
    1: 'desk 1',
    'home-address': '124,marino,usa',
    position:'Software Engineer',
};

for(const key in employee){
    const value= employee[key];
    console.log(key,value)
}