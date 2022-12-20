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
    const [doctor, setDoctor] = useState([
        {
            number: "",
            actor: params.actor,
            startYear: "",
            endYear: ""
        }
    ]);
    const [newDoctor, setNewDoctor] = useState([
        {
            number: "",
            actor: "",
            startYear: "",
            endYear: ""
        }
    ]);

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
        if(newDoctor.number === ""){
            console.log("Number is empty");
            setNewDoctor(previousState => {
                return {...previousState, number: doctor.number}
            });
        }
        if(newDoctor.actor === ""){
            console.log("Actor is empty");
            setNewDoctor(previousState => {
                return {...previousState, actor: doctor.actor}
            });
        }

        console.log("Current state of doctor array", doctor);

        try {
            const grab = await axios.patch(`http://localhost:8080/doctor/actor/${params.actor}`, newDoctor);
            console.log('RESPONSE: ', grab.data);
            setNewDoctor(grab.data);
        } catch (err) {
            console.log(err)
        }
        navigate(`/created/${newDoctor.actor}`);
    };

    console.log('New Doctor is', newDoctor);

    const updateNumber = (e) => {
        e.preventDefault()
        setNewDoctor(previousState => {
            return {...previousState, number: e.target.value}
        });
    }

    const updateActor = (e) => {
        e.preventDefault()
        setNewDoctor(previousState => {
            return {...previousState, actor: e.target.value}
        });
    }

    const updateStartYear = (e) => {
        e.preventDefault()
        setNewDoctor(previousState => {
            return {...previousState, startYear: e.target.value}
        });
    }

    const updateEndYear = (e) => {
        e.preventDefault()
        setNewDoctor(previousState => {
            return {...previousState, endYear: e.target.value}
        });
    }

    return <>
        <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3" >
                <Form.Label>Doctor Number</Form.Label>
                <Form.Control placeholder="e.g. 1st" value={newDoctor.number}  onChange={e => updateNumber(e)} />
                <Form.Text className="text-muted">
                </Form.Text>
                <Button type="submit" >Submit</Button>
            </InputGroup>

            <InputGroup className="mb-3" >
                <Form.Label>Actor</Form.Label>
                <Form.Control placeholder="Enter actor's name" value={newDoctor.actor} onChange={e => updateActor(e)} />
                <Form.Text className="text-muted">
                </Form.Text>
                <Button type="submit" >Submit</Button>
            </InputGroup>

            <InputGroup className="mb-3" >
                <Form.Label>Start Year</Form.Label>
                <Form.Control placeholder="Enter start year" value={newDoctor.startYear} onChange={e => updateStartYear(e)} />
                <Form.Text className="text-muted">
                </Form.Text>
                <Button type="submit" >Submit</Button>
            </InputGroup>

            <InputGroup className="mb-3" >
                <Form.Label>End Year</Form.Label>
                <Form.Control placeholder="Enter end
                year" value={newDoctor.endYear} onChange={e => updateEndYear(e)} />
                <Form.Text className="text-muted">
                </Form.Text>
                <Button type="submit" >Submit</Button>
            </InputGroup>


        </Form>
    </>
}

export default EditForm;