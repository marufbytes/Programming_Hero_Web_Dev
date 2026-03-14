// Looping techinque:
// 1. for Loop
// 2. while Loop
// 3. do while Loop --> ignore
// 4. for of --> array Loop
// 5. for in --> object Loop

const friends = ["Elon", "Bill", "Mark", "Wareen"];
for (const friend of friends){
    console.log(friend);
}

for(let i =0; i<10; i++){
    console.log(i);
    console.log(friends[i]);
}

for(let i =0; i<friends.length; i++){
    console.log(i);
    console.log(friends[i]);
}

let i=0;
while(i<friends.length){
    console.log(friends[i]);
    i++;
}

