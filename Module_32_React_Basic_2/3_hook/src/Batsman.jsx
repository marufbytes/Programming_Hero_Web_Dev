import { useState } from "react"

export default function Batsman(){

    const [runs,setRuns] = useState(0);
    const [sixes,setSixes]=useState(0);

    const handleSingles=()=>{
        const updatedRuns=runs+1;
        setRuns(updatedRuns)
    }
    const handleSix=()=>{
        const updatedRuns=runs+6;
        const updatedSixes= sixes+1;
        setSixes(updatedSixes)
        setRuns(updatedRuns)
    }

    return(
        <div>
            <h3>Player : Bangla Batsman</h3>
            <p><small>Sixes: {sixes}</small></p>
            <h1>Score: {runs}</h1>
            <button onClick={handleSingles}>Singels</button>
            <button>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}