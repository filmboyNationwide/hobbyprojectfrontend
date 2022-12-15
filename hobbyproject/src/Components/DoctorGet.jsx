/* eslint-disable no-console */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DoctorDisplay from './DoctorDisplay';

function DoctorGet() {
  const params = useParams();
  console.log(params.name);
  const [doctor, setDoctor] = useState([]);
  
  useEffect(()=>{
    const getDoctor = async () => {
      try {
        const grab = await axios.get(`http://localhost:2323/doctors/getDoctorByName/${params.name}`);
        console.log('RESPONSE: ', grab.data[0]);
        setDoctor(grab.data[0]);
      } catch (err) {
        console.log(err)
      }
    };
    getDoctor();
  }, [params.name])
  
  console.log(doctor)

  return <DoctorDisplay number={doctor.number} name={doctor.name} startYear={doctor.startYear} endYear={doctor.endYear} companions={doctor.companions} _id={doctor._id}/>;
}

export default DoctorGet;
