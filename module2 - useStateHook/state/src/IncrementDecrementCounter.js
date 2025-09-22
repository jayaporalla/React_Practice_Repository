import { useState } from "react";

const Increment = (props) => {
    console.log(props);
    return <button onClick={() => props.setCount(props.count + 1)}>Increment</button>
}

const Decrement = ({ count, setCount }) => {
    return <button onClick={() => setCount(count - 1)}>Decrement</button>
}

function IncrementDecrementCounter () {
    const [ count, setCount ] = useState(100);
    return (
        <>
            <div style={{marginTop: "15px"}}>
                <Increment count={count} setCount={setCount}/>
                <span style={{backgroundColor: "aqua"}}>The value of - {count}</span>
                <Decrement count={count} setCount={setCount}/>
            </div>
        </>
    ) 
}
export default IncrementDecrementCounter;