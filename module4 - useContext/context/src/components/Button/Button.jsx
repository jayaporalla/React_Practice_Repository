import { useCount } from "../../context/count-context";
import Text from "../Text/Text";

// function Button({ count, handleIncrementClick }){
//     return (
//         <>
//         <button onClick={handleIncrementClick}>Click to Increment</button>
//         <Text count={count}/>
//         </>
//     )
// }

export default Button;

//or - below is by using useContext concept

function Button(){
    const {count, setCount} = useCount();

    const handleIncrementClick = () => {
        setCount(count+1);
    }
    return (
        <>
        <button onClick={handleIncrementClick}>Click to Increment</button>
        <Text />
        </>
    )
}