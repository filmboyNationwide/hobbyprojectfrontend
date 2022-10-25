/* eslint-disable no-console */
import axios from 'axios';
import { useEffect, useState } from 'react';

function DoctorDelete() {
  const [newDoctor, setNewDoctor] = useState([]);
  
  

  useEffect(()=>{
    const deleteDoctor = async () => {
      try {
        const grab = await axios.patch(`http://localhost:1688/doctors/removeAllDoctors)`);
        console.log('RESPONSE: ', grab);
        setNewDoctor(grab);
      } catch (err) {
        console.log(err)
      }
    };
    deleteDoctor();
  }, [])
  
  console.log(newDoctor)

  return <p>All Doctors Deleted</p>>
}

export default DoctorDelete;