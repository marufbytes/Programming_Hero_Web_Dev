const first_name='Kamruzzaman';
const last_name='Kamal';

const aboutMe=`My name is ${first_name} ${last_name}`;
console.log(aboutMe);

function getCardHTML(first_name,last_name){
    const div=`
    <div class="card">
        <h2>Heading</h2>
        <h2>${first_name} ${last_name}</h2>
    </div>
    `
    console.log(div);
}
getCardHTML('Maruf','Ahammed')