import { useCount } from "./context/count-context";


function Count(){
    const {value, countDispatch} = useCount();

    return (
        <div>
            <button onClick={() => countDispatch({type: "INCREMENT"})}>Click to Increment</button>
            <span>Count - {value}</span>
            <button onClick={() => countDispatch({type: "DECREMENT"})}>Click to Decrement</button>
        </div>
    )
}

export default Count;