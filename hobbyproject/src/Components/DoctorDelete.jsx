/* eslint-disable no-console */
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function DoctorDelete() {  
  const params = useParams();
  console.log(params.name);

  useEffect(()=>{
    const deleteDoctor = async () => {
      try {
        const grab = await axios.patch(`http://localhost:1688/doctors/removeDoctorByName/${params.name})`);
        console.log('RESPONSE: ', grab);
      } catch (err) {
        console.log(err)
      }
    };
    deleteDoctor();
  }, [params.name])

  return <p>Doctor Deleted</p>
}

export default DoctorDelete;