import { useState } from "react"

export default function Baller() {

    const [balls, setBalls] = useState(0);

    const handleBalls = () => {
        setBalls(balls + 1);
    }

    const handleWide = () =>{
        alert("WIDE BALL");
    }

    const handleNoBall = () =>{
        alert("NO BALL, Free hit");
    }

    const over = balls / 6;

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
            <h3>Baller: Bangu Baller</h3>

            <p>Over: {parseInt(over)} </p>
            <h1>Balls: {balls} </h1>
            <button style={space} onClick={handleBalls}>Balled</button>
            <button style={space} onClick={handleWide}>Wide Ball</button>
            <button style={space} onClick={handleNoBall}>No Ball</button>
        </div>
    )
}