import {
    Form, Button, InputGroup
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const CreateForm = () => {
    const [number, setNumber] = useState("");
    const [name, setName] = useState("");
    const [startYear, setStartYear] = useState("");
    const [endYear, setEndYear] = useState("");
    const [newDoctor, setNewDoctor] = useState([]);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(number,name,startYear,endYear);
        const trial = {
            "number": number,
            "name": name,
            "startYear": startYear,
            "endYear": endYear
        }
        try {
            const grab = await axios.post(`http://localhost:8080/doctor`, trial);
            console.log('RESPONSE: ', grab.data);
            setNewDoctor(grab.data);
            console.log('New Doctor is',newDoctor);
        } catch (err) {
            console.log(err)
        }
            navigate(`/created/${name}`);
    };



return (
    <>
        <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3" >
                <Form.Label>Doctor Number</Form.Label>
                <Form.Control placeholder="e.g. 1st" value={number} onChange={e => { setNumber(e.target.value) }} />
                <Form.Text className="text-muted">
                </Form.Text>
                <Button type="submit" >Submit</Button>
            </InputGroup>

            <InputGroup className="mb-3" >
                <Form.Label>Actor</Form.Label>
                <Form.Control placeholder="Enter actor's name" value={name} onChange={e => { setName(e.target.value) }} />
                <Form.Text className="text-muted">
                </Form.Text>
                <Button type="submit" >Submit</Button>
            </InputGroup>

            <InputGroup className="mb-3" >
                <Form.Label>Start Year</Form.Label>
                <Form.Control placeholder="Enter start year" value={startYear} onChange={e => { setStartYear(e.target.value) }} />
                <Form.Text className="text-muted">
                </Form.Text>
                <Button type="submit" >Submit</Button>
            </InputGroup>

            <InputGroup className="mb-3" >
                <Form.Label>End Year</Form.Label>
                <Form.Control placeholder="Enter end
                    year" value={endYear} onChange={e => { setEndYear(e.target.value) }} />
                <Form.Text className="text-muted">
                </Form.Text>
                <Button type="submit" >Submit</Button>
            </InputGroup>


        </Form>
    </>
)
}

export default CreateForm;