import { useState } from 'react';
import {
    Button, Row, Col, Container,
  } from 'react-bootstrap';

const Form = () => {
    const [number, setNumber] = useState("1st");
    const [name, setName] = useState("William Hartnell");
    const [startYear, setstartYear] = useState(1963);
    const [endYear, setEndYear] = useState(1966);
    const [companions, setCompanions] = useState(["Susan","Ian","Barbara"]);
    

    const handleChangeU = (event) => {
        setNumber(event.target.value);
        console.log(event);
    }

    const handleChangeP = (event) => {
        setName(event.target.value);
        console.log(event);
    }

    return (
        <>
            <form>
                <label htmlFor="number">Doctor Number:</label>
                <input type="text" id="number" onChange={handleChangeU} ></input>
                <Button onClick={setNumber}>Search</Button>
                <br></br>
                <label htmlFor="name">Actor:</label>
                <input type="text" id="name" onChange={handleChangeP}></input>
                <Button onClick={setName}>Search</Button>
                <br></br>
                <label htmlFor="startYear">Start Year:</label>
                <input type="text" id="startYear" onChange={handleChangeP}></input>
                <Button onClick={setName}>Search</Button>
                <br></br>
                <label htmlFor="endYear">End Year:</label>
                <input type="text" id="endYear" onChange={handleChangeP}></input>
                <Button onClick={setName}>Search</Button>
                <br></br>
                <label htmlFor="companions">Companions:</label>
                <input type="text" id="companions" onChange={handleChangeP}></input>
                <Button onClick={setName}>Search</Button>
            </form>
        </>
    )
}

export default Form;