import { useCount } from "../../context/count-context";

// function Text({count}){
//     return (
//         <>
//         <p>The count is {count}</p>
//         </>
//     )
// }

export default Text;

//or - below is by using useContext concept

function Text(){
    const { count } = useCount();

    return (
        <>
        <p>The count is {count}</p>
        <p>.............................................................</p>
        </>
    )
}