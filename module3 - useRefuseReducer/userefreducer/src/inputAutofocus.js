import { forwardRef, useRef } from "react";

const Input = forwardRef ((props, ref) => { //forwardRef is used when we use useRef for autofocus
    
    return (
        <input ref={ref} placeholder="Search something..."/>
    )
})

function InputAutoFocus() {

    const autoref = useRef();

    const onClickFocus = () => {
        autoref.current.focus();
    }

    return (
        <>
            <div style={{marginTop: "15px"}}>
                <Input ref={autoref} type="text" placeholder="Search..."/>
                <button onClick={onClickFocus}>Click Me - Auto Focus</button>
            </div>
        </>
    )
}

export default InputAutoFocus;