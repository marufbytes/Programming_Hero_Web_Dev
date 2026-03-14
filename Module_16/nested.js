const school={
    name: "Milestone College",
    class: ['10','12'],
    events:["Science fair", "Bijoy Dibosh", "21 Feb"],
    unique: {
        color:'Ahses',
        result:{
            gpa:5,
            marit: 'top'
        }

    }
}

console.log(school.unique.color)
console.log(school.unique.result.marit)

school.unique.result.marit="No. 1";
console.log(school.unique.result.marit)
