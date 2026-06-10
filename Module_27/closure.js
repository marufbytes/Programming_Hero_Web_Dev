function outerFunction(){
    function innerFunction(){
        console.log("This is the inner function.")
    }
    return innerFunction;
}

const output = outerFunction();
// output();
// console.log("In the outside", output);

function counter(owner){
    let count =0;
    function increment(){
        count=count+1;
        console.log("Value of count",owner,count);
    }
    return increment;
}
const rahimCounter=counter('Rahim');
rahimCounter();
rahimCounter();
rahimCounter();
rahimCounter();

const karimCounter=counter('Karim');
karimCounter();
karimCounter();
karimCounter();
karimCounter();

rahimCounter();
rahimCounter();
rahimCounter();
rahimCounter();


// const count1=counter();
// count1();
// count1();