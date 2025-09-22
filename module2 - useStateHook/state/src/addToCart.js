import { useState } from "react"

const allBrands = [
    { id: "1", name: "puma"},
    { id: "2", name: "adidas"},
    { id: "3", name: "nike"},
    { id: "4", name: "file"},
    { id: "5", name: "reebok"},
]

function AddToCart(){

    const [ selectedBrand, setSelectedBrand ] = useState([]);

    const AddItemsToCart = (id) => {
        const filteredBrands = allBrands.find((item) => item.id === id);
        setSelectedBrand([...selectedBrand, filteredBrands]);
    }

    const RemoveFromCart = (id) => {
        const removeItems = selectedBrand.filter((brna) => brna.id !== id);
        setSelectedBrand(removeItems);
    }

    return (
        <>
            <h2>Add below items to your cart:</h2>
            <ul>
                {
                    allBrands.map((item) => <li key={item.id}>{item.name}<button style={{marginLeft: "15px"}} onClick={() => AddItemsToCart(item.id)}>AddToCart</button></li>)
                }
            </ul>
            <div>
                <h2>The selected items are:</h2>
                {
                    selectedBrand.map((item) => <p>{item.name} <button onClick={() => RemoveFromCart(item.id)}>Remove from cart</button></p>)
                }
            </div>
        </>
    )
}

export default AddToCart;