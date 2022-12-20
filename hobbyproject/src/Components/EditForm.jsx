// noinspection DuplicatedCode

import {
    Form, Button, InputGroup
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const EditForm = () => {
    const params = useParams();
    console.log(params);
    const [number, setNumber] = useState("");
    const [actor, setActor] = useState("");
    const [startYear, setStartYear] = useState("");
    const [endYear, setEndYear] = useState("");
    const [doctor, setDoctor] = useState([]);
    const [newDoctor, setNewDoctor] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{
        const getDoctor = async () => {
            try {
                const grab = await axios.get(`http://localhost:8080/doctor/actor/${params.actor}`);
                console.log('RESPONSE: ', grab.data);
                setDoctor(grab.data);
            } catch (err) {
                console.log(err)
            }
        };
        getDoctor();
    }, [params.actor])

    console.log(doctor);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(number, actor, startYear, endYear);
        if(number.trim() === ""){
            console.log("Number is empty");
            setNumber(doctor.number);
        }
        if(actor.trim() === ""){
            console.log("Actor is empty");
            setActor(doctor.actor);
        }
        const trial = {
            "number": number,
            "actor": actor,
            "startYear": startYear,
            "endYear": endYear
        }
        console.log("Array to be patched", trial);
        console.log("Current state of doctor array", doctor);

        try {
            const grab = await axios.patch(`http://localhost:8080/doctor/actor/${params.actor}`, trial);
            console.log('RESPONSE: ', grab.data);
            setNewDoctor(grab.data);
            console.log('New Doctor is', newDoctor);
        } catch (err) {
            console.log(err)
        }
        navigate(`/created/${actor}`);
    };

    return <>
        <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3" >
                <Form.Label>Doctor Number</Form.Label>
                <Form.Control placeholder="e.g. 1st" value={number} onChange={e => setNumber(e.target.value)} />
                <Form.Text className="text-muted">
                </Form.Text>
                <Button type="submit" >Submit</Button>
            </InputGroup>

            <InputGroup className="mb-3" >
                <Form.Label>Actor</Form.Label>
                <Form.Control placeholder="Enter actor's name" value={actor} onChange={e => { setActor(e.target.value) }} />
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
}

export default EditForm;