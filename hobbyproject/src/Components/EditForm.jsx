import { useState } from 'react';
import {
    Form, Button, InputGroup
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import DoctorGet from './DoctorGet'

const EditForm = ({current}) => {
    const params = useParams();
    console.log(params);
    const [number, setNumber] = useState("1st");
    const [name, setName] = useState("William Hartnell");

    const navigate = useNavigate();

    return (
        <>
            <DoctorGet name={params.current}/>
            <Form onSubmit={()=>navigate(`/details/${name}`)}>
                <InputGroup className="mb-3" controlId="number" value={number} onChange={e=> {setNumber(e.target.value)}}>
                    <Form.Label>Doctor Number</Form.Label>
                    <Form.Control placeholder="Enter Doctor Number e.g. 1st" value={number} />
                    <Form.Text className="text-muted">
                        This will let you see a Doctor
                    </Form.Text>
                    <Button type="submit" >Submit</Button>
                </InputGroup>
                <InputGroup className="mb-3" controlId="name">
                    <Form.Label>Actor</Form.Label>
                    <Form.Select value={name} onChange={e=> {setName(e.target.value)}}>
                        <option value="none"></option>
                        <option value="William Hartnell">William Hartnell</option>
                        <option value="Patrick Troughton">Patrick Troughton</option>
                        <option value="Jon Pertwee">Jon Pertwee</option>
                    </Form.Select>
                    <Form.Text className="text-muted">
                        Select Actor
                    </Form.Text>
                    <Button type="submit" >Submit</Button>
                    </InputGroup>
            </Form>
        </>
    )
}

export default EditForm;