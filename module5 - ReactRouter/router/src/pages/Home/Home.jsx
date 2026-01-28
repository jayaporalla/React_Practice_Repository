import { useNavigate } from "react-router-dom";

function Home(){
    const navigate = useNavigate();

    return (
        <>
        <h1>This is Home Page</h1>
        <button onClick={() => navigate('/cart')}>Go to Cart Page</button>
        </>
    )
}

export default Home;