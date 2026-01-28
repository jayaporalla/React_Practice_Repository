import { useAuth } from "../../context/auth-context";

function Login(){
    const {isLoggedIn, setIsLoggedIn} = useAuth();

    const handleUserClick = () => {
        setIsLoggedIn(!isLoggedIn);
    }

    return (
        <>
        <h1>This is Login Page</h1>
        {
            !isLoggedIn && <label>Mobile Number:- 
        <input type="number" placeholder="Enter your mobile number.." maxLength={9}/>
        </label>
        }
        <button onClick={handleUserClick}>{!isLoggedIn ? "Login" : "Logout"}</button>
        </>
    )
}

export default Login;