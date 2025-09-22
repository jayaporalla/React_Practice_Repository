import { useState } from "react";

const initialValue = {
    name: '',
    email: '',
    password: '',
    mobile: '',
    alternatemobile: ''
}

function SubmitForm() {

    const [form, setForm] = useState(initialValue);

    console.log(form);

    return (
        <>
          <form style={{marginTop: "15px"}} target="_blank">
            <div>
                <label>Name:</label>
                <input style={{marginLeft: "5px"}} onChange={(e) => setForm({...form, name: e.target.value})} type="text" placeholder="Enter your name..."/>
            </div>
            <div>
                <label>Email:</label>
                <input style={{marginLeft: "5px"}} onChange={(e) => setForm({...form, email: e.target.value})} type="text" placeholder="Enter your emailId..."/>
            </div>
            <div>
                <label>Password:</label>
                <input style={{marginLeft: "5px"}} onChange={(e) => setForm({...form, password: e.target.value})} type="password" placeholder="Enter your password..."/>
            </div>
            <div>
                <label>Mobile Number:</label>
                <input style={{marginLeft: "5px"}} onChange={(e) => setForm({...form, mobile: e.target.value})} type="number" placeholder="Enter your mobile number..."/>
            </div>
            <div>
                <label>Alternate Mobile Number:</label>
                <input style={{marginLeft: "5px"}} onChange={(e) => setForm({...form, alternatemobile: e.target.value})} type="number" placeholder="Enter your alternate mobile number..."/>
            </div>
            <div>
                <input type="submit"/>
                <input type="reset"/>
            </div>
          </form>  
        </>
    )
}

export default SubmitForm;