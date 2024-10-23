import React, { useState } from 'react';
import "../App.css"

function Form1() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [condition, setCondition] = useState(true);

    const change1 = (e) => {
        setEmail(e.target.value);
    };

    const change2 = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setCondition(false);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="form">
                <input type="email" name="email" value={email} onChange={change1} /><br />
                <input type="password" name="password" value={password} onChange={change2} /><br />
                <input type="submit" value="Submit" />
            </form>
            {!condition && (
                <>
                    <h1 className='heading'>Your email is: {condition ? "" : email}</h1>
                    <h1 className='heading'> Your password is: {condition ? "" : password}</h1>
                </>
            )}
        </div>
    );
}

export default Form1;
