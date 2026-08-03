export default function Friend({friend}){
    const {name, email} =friend;
    return(
        <div className="card"> 
            <h4>Name:{name} </h4>
            <h3>Email: {email}</h3>
        </div>
    )
}