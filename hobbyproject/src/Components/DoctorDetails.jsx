/* eslint-disable no-console */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DoctorDisplay from './DoctorDisplay';

function DoctorDetails() {
  const params = useParams();
  console.log(params.run);
  const [doctor, setDoctor] = useState([]);
  
    const getDoctor = async () => {
      try {
        const grab = await axios.get("localhost:1688/doctors/getDoctorByName/William Hartnell");
        console.log('RESPONSE: ', grab);
        setDoctor(grab);
        console.log(grab);
      } catch (err) {
        // err handling
      }
    };
    getDoctor();
  

  return console.log(doctor) && <DoctorDisplay number={doctor.number} name={doctor.name} startYear={doctor.startYear}/>;
}

export default DoctorDetails;
