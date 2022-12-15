import {
    Form, Button
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const DoctorForm = () => {
    const params = useParams();
    const [number, setNumber] = useState("1st");
    const [name, setName] = useState("William Hartnell");
    const [doctors, setDoctors] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const getDoctor = async () => {
            try {
                const grab = await axios.get(`http://localhost:2323/doctors/getAll`);
                console.log('RESPONSE: ', grab.data);
                setDoctors(grab.data);
            } catch (err) {
                console.log(err)
            }
        };
        getDoctor();
    }, [params.name])

    function numberClick(e, {number}) {
        e.preventDefault();
        let doctorName="";
        console.log(number)
        for(let i=0;i<doctors.length;i=i+1){
            if(doctors[i].number===number) {
                doctorName = doctors[i].name
                console.log(doctorName)
            }
        }
        navigate(`/details/${doctorName}`)
    }

    return (
        <>
            <Form onSubmit={() => navigate(`/details/${name}`)}>
                <Form.Group className="mb-3"  >
                    <Form.Label>Doctor Number</Form.Label>
                    <Form.Select value={number} onChange={e => { setNumber(e.target.value) }}>
                        {doctors.map((doctor) => {
                            return <option value={doctor.number}>{doctor.number}</option>
                        })}
                    </Form.Select>
                    <Form.Text className="text-muted">
                        This will let you see a Doctor
                    </Form.Text>
                    <Button type="button" onClick={e => numberClick(e,{number})} >Submit</Button>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Actor</Form.Label>
                    <Form.Select value={name} onChange={e => { setName(e.target.value) }}>
                        {doctors.map((doctor) => {
                            return <option value={doctor.name}>{doctor.name}</option>
                        })}
                    </Form.Select>
                    <Form.Text className="text-muted">
                        Select Actor
                    </Form.Text>
                    <Button type="submit" >Submit</Button>
                </Form.Group>
            </Form>
        </>
    )
}

export default DoctorForm;