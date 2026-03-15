import { useState } from "react"

export default function ShowOrHideText(){

    const [show, setShow] = useState(false);

    const showBtn = ()=>{
        setShow(!show);
    }

    return(
        <div>
            <button onClick={showBtn}>{show? 'Hide': 'Show'}</button>
            {show && <h1>Hello, React learner</h1>}
        </div>
    )
}