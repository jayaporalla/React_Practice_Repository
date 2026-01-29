import { memo } from "react";

export const Search = memo(({handleChange}) => {
    console.log("search component rendered");
    return (
        <>
        <input onChange={(e) => handleChange(e.target.value)} type="text" placeholder="Search..."/>
        </>
    )
});