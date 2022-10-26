import { useState } from 'react';
import {
    Form, Button, Row, Col, Container,
  } from 'react-bootstrap';

const DoctorForm = () => {
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
            <Form>
                <Form.Group className="mb-3" controlId="number">
                <Form.Label>Doctor Number</Form.Label>
                <Form.Control placeholder="Enter Doctor Number e.g. 1st" />
                <Form.Text className="text-muted">
                     This will let you see a Doctor
                </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="name">
                <Form.Label>Actor</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option value="1">William Hartnell</option>
                     <option value="2">Patrick Troughton</option>
                    <option value="3">Jon Pertwee</option>
                </Form.Select>
                 <Form.Text className="text-muted">
                     Select Actor
                </Form.Text>
                </Form.Group>
                <Button type="submit">Search</Button>
             </Form>
        </>
    )
}

export default DoctorForm;