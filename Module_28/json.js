// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))



const loadData=()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')  
      //Promise of response
      .then(response => response.json())
      //Promise of json data
      .then(data => console.log(data))
};


// const loadPost=()=>{
//   const url="https://jsonplaceholder.typicode.com/posts" ;

//   fetch(url)
//   .then((res)=>res.json())
//   .then((json)=>{
//     console.log(json);
//     displayPost(json);
//   });
// };

// const displayPost=(posts)=>{
//   posts.forEach((posts)=>{
//     console.log(post);
//   });
// };

// console.log("Explore API");

// const person={
//     name: "Selim",
//     fruit: "Dalim",
//     dish: "Halim",
//     friends: ["Amil", "Kolim", "Lamim"],
//     isRich: false,
//     money: 34000,
// }
// //JSON -> JS object with notation
// //JSON.stringfy -> JSON
// //JSON.parse -> object

// console.log(person, typeof person);
// const personJSON = JSON.stringify(person);
// console.log(personJSON,typeof personJSON);

// const parseJSON = JSON.parse(personJSON);
// console.log(parseJSON);