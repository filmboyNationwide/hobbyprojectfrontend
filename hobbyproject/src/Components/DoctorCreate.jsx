/* eslint-disable no-console */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DoctorDisplay from './DoctorDisplay';

function DoctorCreate() {
  const params = useParams();
  console.log(params.name);
  const [newDoctor, setNewDoctor] = useState([]);
  
  

  useEffect(()=>{
    const createDoctor = async () => {
      try {
        const trial = {
          "number": "3rd",
          "companions": "Jo",
          "name": "Jon Pertwee",
          "startYear": 1970,
          "endYear": 1974
      }
        const grab = await axios.post(`http://localhost:1688/doctors/createDoctor`,trial);
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

export default DoctorCreate;
