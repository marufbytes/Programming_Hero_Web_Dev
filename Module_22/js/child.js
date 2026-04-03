//create element and set innerText or innerHTML

const newChild = document.createElement('li');
newChild.innerText="New born foorballer";

//find parent
const playerList = document.getElementById('player-list');

playerList.appendChild(newChild);