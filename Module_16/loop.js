const mobile={
    brand: "Motorola",
    price: 36000,
    color: "Blue",
    camera: "50mp",
    isNew: true,
}

// for of: array
// cor in: object

for(const prop in mobile){
    console.log(prop)
    console.log(mobile[prop])
}