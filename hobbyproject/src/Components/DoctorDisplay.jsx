import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
// import { useState } from 'react';

function Doctor({
  number,name,companions,startYear,endYear,_id
}) {
  const navigate = useNavigate();
  const params = useParams();

//   const [image, setImage] = useState([]);

//   const links = [
//     {
//       "number":"0th",
//       "link":"No image found"
//     },
//     {
//     "number":"1st",
//     "link":"https://upload.wikimedia.org/wikipedia/en/7/70/First_Doctor_%28Doctor_Who%29.jpg"
//   }
// ]

//   function findLink(number) {
//     for(let i=1; i<16; i++){
//       links[i].link
//     }
//   }

  console.log(params);
  return (
    <Card bg="dark">
      {/* <Card.Img variant="top" src={findLink({number})} alt={`${number} Doctor`}/> */}
      <Card.Body>
        <Card.Title>{number} Doctor</Card.Title>
        <Card.Text>
          {`Companions: ${companions}`}
        </Card.Text>
        <Card.Text>
          {`Actor: ${name}`}
        </Card.Text>
        <Card.Text>
          {`From ${startYear} to ${endYear}`}
        </Card.Text>
      </Card.Body>
      <Button variant="info" type="button" onClick={() => navigate(`/edit/${_id}`)}>Edit</Button>
      <Button variant="danger" type="button" onClick={() => navigate(`/delete/${name}`)}>Delete</Button>
    </Card>
  );
}

export default Doctor;

Doctor.propTypes = {
  number: PropTypes.string,
  name: PropTypes.string,
  companions: PropTypes.array,
  startYear: PropTypes.number,
  endYear: PropTypes.number,
};