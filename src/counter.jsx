import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);

    const handleAdd =()=>{
        setCount(count+1);
    }

    const countStyle = {
        padding: '10px',
        backgroudColor: 'blue',
        fontWeight: '700',
        fontSize: '45px',
        borderRadius: '20px',
        marginTop: '20px'

    }

    return(
        <div>
            <button style={countStyle} onClick={handleAdd}>Count: {count} </button>
        </div>
    )
}