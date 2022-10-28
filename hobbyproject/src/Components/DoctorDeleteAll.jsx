/* eslint-disable no-console */
import axios from 'axios';
import { useEffect, useState } from 'react';

function DoctorDelete() {  

  useEffect(()=>{
    const deleteDoctor = async () => {
      try {
        const grab = await axios.delete(`http://localhost:1688/doctors/removeAllDoctors)`);
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