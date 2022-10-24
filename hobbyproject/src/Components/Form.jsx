import { useState } from 'react';

const Form = () => {
    const [username, setUsername] = useState("defaultU");
    const [password, setPassword] = useState("defaultP");

    const handleChangeU = (event) => {
        setUsername(event.target.value);
        console.log(event);
    }

    const handleChangeP = (event) => {
        setPassword(event.target.value);
        console.log(event);
    }

    return (
        <>
            <form>
                <label htmlFor="username">Username Choice:</label>
                <input type="text" id="username" onChange={handleChangeU} ></input>
                <button onClick={setUsername}>Create User</button>
                <br></br>
                <label htmlFor="password">Password Choice:</label>
                <input type="text" id="password" onChange={handleChangeP}></input>
                <button onClick={setPassword}>Create User</button>
            </form>
            <p> Username is now {username} and password is now {password}</p>
        </>
    )
}

export default Form;