import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);

    const handleAdd =()=>{
        setCount(count+1);
    }
    const handleSub =()=>{
        setCount(count-1);
    }
    const handleReset =()=>{
        setCount(0);
    }

    const countStyle = {
        padding: '10px',
        backgroudColor: 'blue',
        fontWeight: '700',
        fontSize: '45px',
        borderRadius: '20px',
        marginTop: '20px',
        marginRight: '20px'

    }

    return(
        <div>
            <h2 style={countStyle}>{count}</h2>
            <button style={countStyle} onClick={handleAdd}>Count++ </button>
            <button style={countStyle} onClick={handleSub}>Count--</button>
            <button style={countStyle} onClick={handleReset}>Reset count</button>
        </div>
    )
}