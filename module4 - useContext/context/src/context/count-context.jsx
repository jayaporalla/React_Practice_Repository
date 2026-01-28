import { createContext, useContext, useReducer, useState } from "react"
import CountReducerFunction from "../reducer/CountReducerFunction";

const initialState = {
    count: 0
}

const CountContext = createContext(initialState);

const CountProvider = ({children}) => {
    const [count, setCount] = useState(0);
    const [value, countDispatch] = useReducer(CountReducerFunction, { value: 0 });

    return (
        <CountContext.Provider value={{count, setCount, value: value.value, countDispatch}}>
            {children}
        </CountContext.Provider>
    )
}

const useCount = () => useContext(CountContext);

export { useCount, CountProvider };