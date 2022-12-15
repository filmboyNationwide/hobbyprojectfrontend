/* eslint-disable no-console */
import axios from 'axios';
import { useEffect } from 'react';

function DoctorDelete() {  

  useEffect(()=>{
    const deleteDoctor = async () => {
      try {
        const grab = await axios.delete(`http://localhost:8080/doctor/removeAllDoctors)`);
        console.log('RESPONSE: ', grab);
      } catch (err) {
        console.log(err)
      }
    };
    deleteDoctor();
  }, [])

  return <p>All Doctors Deleted</p>
}

export default DoctorDelete;