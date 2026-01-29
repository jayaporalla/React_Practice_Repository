// import { useState } from "react"

import { HigherOrderComponent } from "./HigherOrderComponent"

// export const Counter2 = () => {
//     const [count, setCount] = useState(0);
    
//     const handleClick = () => {
//         setCount(count+1);
//     }
    
//     return (
//         <>
//         <span>Counter 2 ::: </span>
//         <button onClick={handleClick}>{count} times</button>
//         </>
//     )
// }

const Counter2 = ({count, handleClick}) => {
    return (
         <>
         <span>Counter 2 ::: </span>
         <button onClick={handleClick}>{count} times</button>
         </>
     )
}

export default HigherOrderComponent(Counter2);