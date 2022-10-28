/* eslint-disable no-console */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DoctorDisplay from './DoctorDisplay';
import { Col, Container } from 'react-bootstrap';

function GetAllDoctors() {
  const params = useParams();
  console.log(params.name);
  const [doctor, setDoctor] = useState([]);
  
  useEffect(()=>{
    const getDoctor = async () => {
      try {
        const grab = await axios.get(`http://localhost:1688/doctors/getAll`);
        console.log('RESPONSE: ', grab.data);
        setDoctor(grab.data);
      } catch (err) {
        console.log(err)
      }
    };
    getDoctor();
  }, [params.name])
  
  console.log(doctor)

  return (
    <Container>
        <div className="row row-cols-3 g-4">
          {
                doctor.map((doctor) => (
                  <Col>
                    <DoctorDisplay 
                    number={doctor.number} name={doctor.name} startYear={doctor.startYear} 
                    endYear={doctor.endYear} companions={doctor.companions}/>
                  </Col>

                ))
}
        </div>
      </Container>

  )
}

export default GetAllDoctors;
