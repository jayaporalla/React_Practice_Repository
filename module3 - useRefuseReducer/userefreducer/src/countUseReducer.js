import { useReducer } from "react";
import countReducer from "./reducers/countReducer";

function CountUseReducer() {

    const initialState = {
        count: 0
    }

    // const [ state, dispatch ] = useReducer(countReducer, initialState);
    const [ { count }, dispatch ] = useReducer(countReducer, initialState); //destructing state

    return (
        <>
        <div style={{marginTop: "15px"}}>
            <button onClick={() => dispatch({type: "INCREMENT"})}>Increment Click</button>
            {/* <span>Count - {state.count}</span> */}
            <span>Count - {count}</span>
            <button onClick={() => dispatch({ type: "DECREMENT"})}>Decrement Click</button>
        </div>
        </>
    )
}

export default CountUseReducer;