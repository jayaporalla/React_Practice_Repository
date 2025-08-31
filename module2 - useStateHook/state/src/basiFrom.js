import { useState } from "react";

function Form(){

    const initialState = {
        name: '',
        email: '',
        password: '',
        mobileNumber: '',
        alternateNumber: ''
    }

    const [ form, setForm ] = useState(initialState);

    const onNameClick = (e) => {
        setForm({...form, name: e.target.value});
    }

    const onEmailClick = (e) => {
        setForm({...form, email: e.target.value});
    }

    const onPasswordClick = (e) => {
        setForm({...form, password: e.target.value});
    }

    const onNumberClick = (e) => {
        setForm({...form, mobileNumber: e.target.value});
    }

    const onAltNumberClick = (e) => {
        setForm({...form, alternateNumber: e.target.value});
    }

    return (
        <>
            <form action="./submitform" target="_blank">
                <label>Name:- </label>
                <input type="text" onChange={onNameClick} placeholder="Enter your name..."/><br/>
                <label>Email:- </label>
                <input type="email" onChange={onEmailClick} placeholder="Enter your email..."/><br/>
                <label>Password:- </label>
                <input type="password" onChange={onPasswordClick} placeholder="Enter your password..."/><br/>
                <label>Mobile Number:- </label>
                <input type="number" onChange={onNumberClick} placeholder="Enter your mobile number..."/><br/>
                <label>Alternate Mobile Number:- </label>
                <input type="number" onChange={onAltNumberClick} placeholder="Enter your alternate number..."/><br/>
                <input type="submit" value="Submit"/>
                <input type="reset" value="reset"/>
            </form>
        </>
    )
}

export default Form;