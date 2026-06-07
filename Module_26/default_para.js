function add(num1, num2=0){
    const total = num1+num2;
    console.log(num1,num2,total)
}
// add(10)  //NaN-not a number
add(10,20);
add(10)

function fullName (first_name,last_name=''){
    const name = first_name+' '+last_name;
    console.log(name);
}
fullName("kamruzzaman")
fullName('Kamruzzaman', 'Kamal')