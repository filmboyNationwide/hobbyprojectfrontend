/* eslint-disable no-console */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DoctorDisplay from './DoctorDisplay';

function DoctorUpdate() {
  const params = useParams();
  console.log(params.name);
  const [newDoctor, setNewDoctor] = useState([]);
  
  

  useEffect(()=>{
    const createDoctor = async () => {
      try {
        const trial = {
            "startYear": 1971
        }
        const grab = await axios.put(`http://localhost:8080/doctor/`,trial);
        console.log('RESPONSE: ', grab.data);
        setNewDoctor(grab.data);
      } catch (err) {
        console.log(err)
      }
    };
    createDoctor();
  }, [])
  
  console.log(newDoctor)

  return <DoctorDisplay number={newDoctor.number} name={newDoctor.name} startYear={newDoctor.startYear} endYear={newDoctor.endYear} companions={newDoctor.companions}/>;
}

export default DoctorUpdate;