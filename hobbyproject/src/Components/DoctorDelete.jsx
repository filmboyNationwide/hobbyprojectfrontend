/* eslint-disable no-console */
import axios from 'axios';
import { useEffect } from 'react';

function DoctorDelete({name}) {  

  useEffect(()=>{
    const deleteDoctor = async () => {
      try {
        const grab = await axios.patch(`http://localhost:1688/doctors/removeDoctorByName/${name})`);
        console.log('RESPONSE: ', grab);
      } catch (err) {
        console.log(err)
      }
    };
    deleteDoctor();
  }, [name])

  return <p>Doctor Deleted</p>
}

export default DoctorDelete;