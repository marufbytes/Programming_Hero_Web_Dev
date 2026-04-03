// 1. Parent node
const mainContainer = document.getElementById('main-container');
console.log(mainContainer);

// 2. create child node
const palaceSection =document.createElement('section');

// create h1
const h1 =document.createElement('h1');
h1.innerText="I wanna visit";
palaceSection.appendChild(h1);

//create ul
const ul = document.createElement('ul');

const li1 = document.createElement('li1');
li1.innerText = "Bandarban";
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText="Sain Martin";
ul.appendChild(li2);

palaceSection.appendChild(ul);

// 3. append placesection to mainContainer
mainContainer.appendChild(palaceSection)

//Easier
const booksSection = document.createElement('section');

booksSection.innerHTML = `
<h1>Books I need to read</h1>
<ul>
    <li>Physics</li>
    <li>Chemistry</li>
    <li>Math</li>
    <li>Biology</li>
</ul>
`

mainContainer.appendChild(booksSection);