import { useNavigate } from "react-router-dom";

function About(){
    const navigate = useNavigate();

    return (
        <>
        <h1>This is About Page</h1>
        <button onClick={() => navigate('/')}>Go to Home Page</button>
        </>
    )
}

export default About;