import { useNavigate } from "react-router-dom";

function Cart(){
    const navigate = useNavigate();

    return (
        <>
        <h1>This is Cart Page</h1>
        <button onClick={() => navigate('/about')}>Go to About Page</button>
        </>
    )
}

export default Cart;