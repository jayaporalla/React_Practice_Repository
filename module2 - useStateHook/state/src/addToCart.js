import { useState } from "react"

const allBrands = [
    { id: "1", name: "puma", count: 0},
    { id: "2", name: "adidas", count: 0},
    { id: "3", name: "nike", count: 0},
    { id: "4", name: "file", count: 0},
    { id: "5", name: "reebok", count: 0},
]

function AddToCart(){

    const [ selectedBrand, setSelectedBrand ] = useState([]);

    const AddItemsToCart = (id) => {
        const filteredBrands = allBrands.find((item) => item.id === id);
        setSelectedBrand(brand => {
            const existingItem = brand.find(item => item.id === id);
            if(existingItem){
                return brand.map(item => item.id === id ? {...item, count: item.count + 1} : item);
            }
            return [...brand, {...filteredBrands, count: 1}];
        });
    }

    const RemoveFromCart = (id) => {
        setSelectedBrand(brand => {
            const item = brand.find(item => item.id === id);
            if(!item) return brand;
            if(item.count > 1){
                return brand.map(item => item.id === id ? {...item, count: item.count - 1} : item);
            }
            return brand.filter(item => item.id !== id);
        });
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
                    selectedBrand.map((item) => <p>{item.name} - {item.count} <button onClick={() => RemoveFromCart(item.id)}>Remove from cart</button> </p>)
                }
            </div>
        </>
    )
}

export default AddToCart;