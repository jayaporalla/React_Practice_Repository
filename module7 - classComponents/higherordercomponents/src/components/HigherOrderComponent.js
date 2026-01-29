import { useState } from "react"

export const HigherOrderComponent = (Component) => {
    return function UpdatedComponent(){
        const [count, setCount] = useState(0);
        
        const handleClick = () => {
            setCount(count+20); 
        }

        return (
            <Component count={count} handleClick={handleClick}/>
        )
    }
}