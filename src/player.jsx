import { useState } from "react"

export default function Batsman() {

    const [runs, setRuns] = useState(0);
    const [singles, setSingles] = useState(0);
    const [fours, setFours] = useState(0);
    const [sixs, setSixs] = useState(0);

    const handleSingle = () => {
        setRuns(runs + 1);
        setSingles(singles+1);
    }
    const handleFour = () => {
        setRuns(runs + 4);
        setFours(fours+1);
    }
    const handleSix = () => {
        setRuns(runs + 6);
        setSixs(sixs+1);
    }

    const playerStyle = {
        border: '2px solid yellow',
        borderRadius: '20px',
        marginTop: '10px',
        padding: '20px'
    }
    const space = {
        marginRight: '10px'
    }

    return (
        <div style={playerStyle}>
            <h1>Batsman: Bangu</h1>
            {
                runs>= 50 && <p>Half century</p>
            }
            <h3>Score: {runs}</h3>
            <h3>Sixs: {sixs} Four: {fours} Singles: {singles}</h3>
            <div>
                <button style={space} onClick={handleSingle}>singles</button>
                <button style={space} onClick={handleFour}>Four</button>
                <button style={space} onClick={handleSix}>Six</button>
            </div>
        </div>
    )
}