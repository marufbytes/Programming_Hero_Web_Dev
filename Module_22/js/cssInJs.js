// const sections = document.getElementsByTagName('section');
const sections = document.querySelectorAll('section');
// console.log(sections);

// for(const section of sections){
//     console.log(section);
//     section.style.backgroundColor= 'lightblue';
//     section.style.border='3px solid black';
//     section.style.marginBottom='5px';
//     section.style.borderRadius='5px'
// }


for (const section of sections) {
    section.classList.add('section-card');
}