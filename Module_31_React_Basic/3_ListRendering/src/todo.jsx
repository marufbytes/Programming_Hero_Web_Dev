// export default function ToDo({task, isDone}){
//     return(
//         <li>
//             Task: {task}
//         </li>
//     )
// }


// export default function ToDo({task,isDone}){
//     if(isDone===true){
//         return <li>Done: {task}</li>
//     }
//     else{
//         return <li>Pending: {task}</li>
//     }
// }



// export default function ToDo({task,isDone, time=0}){
//     if(isDone===true){
//         return <li>Done: {task} Duration: {time}</li>
//     }
    
//     return <li>To be done: {task}</li>
// }


//Conditional Rendering : 3 Ternary
// export default function ToDo({task,isDone,time=0}){
//     return isDone
//         ? <li>Done: {task} Duration: {time}</li>
//         : <li>To be done: {task}</li>
// }


//Conditional Rendering : 4 &&
// export default function ToDo({task,isDone,time=0}){
//     return isDone && 
//     <li>Done Task: {task} Duration: {time}</li>     
// }

// export default function ToDo({task,isDone,time=0}){
//     return isDone ||
//     <li>Not Done Task: {task} Duration: {time}</li>     
// }


//Conditional Rendering : 6 set up on a variable
export default function ToDo({task,isDone, time}){
    const displayTime=time?time:100;
    let listItem ;
    if(isDone===true){
        listItem = <li>Done: {task} time:{displayTime}</li>
    }
    else{
        listItem = <li>Pending: {task}</li>
    }
    return listItem
}