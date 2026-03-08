const friends = ["kalam", "Gelam", "Khailam", "Dekhlam"];

friends.push("Boshlam");

console.log(friends.includes('kalam'));

if (friends.includes('kalam')){
    console.log("Party");
}
else{
    console.log("No food");
}