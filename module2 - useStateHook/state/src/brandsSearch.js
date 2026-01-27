import { useState } from "react";

const allBrands = [
    { id: "1", name: "puma"},
    { id: "2", name: "adidas"},
    { id: "3", name: "nike"},
    { id: "4", name: "file"},
    { id: "5", name: "reebok"},
]

function BrandSearch() {
    //avoid using multiple useState use when it is required.
    const [ brands, setBrands ] = useState(allBrands);

    const onSearchChange = (e) => {
        const value = e.target.value;
        const filteredBrands = value?.length > 0 ? allBrands.filter((brand) => brand?.name?.includes(value?.toLowerCase())) : allBrands;
        setBrands(filteredBrands);
    }

    return (
        <>
        <div style={{marginTop: "15px"}}>
            <input onChange={onSearchChange} type="text" placeholder="Enter your brand..."/>
            <ul>
                {
                    brands?.map((item) => <li key={item.id}>{item.name}</li>)
                }
            </ul>
        </div>
        </>
    )
}

export default BrandSearch;