import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../slices/counterSlice";

function Counter(){
    const dispatch = useDispatch();
    const { count } = useSelector(state => state.counter);
    console.log(count);

    const IncrementClick = () => {
        dispatch(increment());
    }

    const DecrementClick = () => {
        dispatch(decrement());
    }

    return (
        <>
        <button onClick={IncrementClick}>Increment </button>
        <span> Count - {count} </span>
        <button onClick={DecrementClick}> Decrement</button>
        </>
    )
}

export default Counter;