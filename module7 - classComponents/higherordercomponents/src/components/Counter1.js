import { useState } from "react"
import { HigherOrderComponent } from "./HigherOrderComponent"

// export const Counter1 = () => {
//     const [count, setCount] = useState(0);

//     const handleClick = () => {
//         setCount(count+1); // writing same peice of code in both counters in order to avoid this we are using HOF
//     }

//     return (
//         <>
//         <span>Counter 1 ::: </span>
//         <button onClick={handleClick}>{count} times</button>
//         </>
//     )
// }

const Counter1 = ({count, handleClick}) => {
    return (
        <>
        <span>Counter 1 ::: </span>
        <button onClick={handleClick}>{count} times</button>
        </>
    )
}

export default HigherOrderComponent(Counter1);