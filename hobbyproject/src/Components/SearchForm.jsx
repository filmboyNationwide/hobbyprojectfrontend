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
    const [actor, setActor] = useState("William Hartnell");
    const [doctors, setDoctors] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const getDoctor = async () => {
            try {
                const grab = await axios.get(`http://localhost:8080/doctor`);
                console.log('RESPONSE: ', grab.data);
                setDoctors(grab.data);
            } catch (err) {
                console.log(err)
            }
        };
        getDoctor();
    }, [params.actor])

    function numberClick(e, {number}) {
        e.preventDefault();
        let doctorName="";
        console.log(number)
        for(let i=0;i<doctors.length;i=i+1){
            if(doctors[i].number===number) {
                doctorName = doctors[i].actor
                console.log(doctorName)
            }
        }
        navigate(`/details/${doctorName}`)
    }

    const sortedDoctorsName = doctors.sort((a,b) => a.actor.localeCompare(b.actor));
    const sortedDoctorsYear = doctors.sort((a,b) => a.startYear - b.startYear);

    return (
        <>
            <Form onSubmit={() => navigate(`/details/${actor}`)}>
                <Form.Group className="mb-3"  >
                    <Form.Label>Doctor Number</Form.Label>
                    <Form.Select value={number} onChange={e => { setNumber(e.target.value) }}>
                        {sortedDoctorsYear
                            .map((doctor) => {
                            return <option key= {doctor.id} value={doctor.number}>{doctor.number}</option>
                        })}
                    </Form.Select>
                    <Form.Text className="text-muted">
                        This will let you see a Doctor
                    </Form.Text>
                    <Button type="button" onClick={e => numberClick(e,{number})} >Submit</Button>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Actor</Form.Label>
                    <Form.Select value={actor} onChange={e => { setActor(e.target.value) }}>
                        {sortedDoctorsName
                            .map((doctor) => {
                            return <option key= {doctor.id} value={doctor.actor}>{doctor.actor}</option>
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