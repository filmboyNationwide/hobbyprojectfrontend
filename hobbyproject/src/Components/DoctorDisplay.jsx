import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function Doctor({
  number,name,companions,startYear,endYear
}) {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  return (
    <Card bg="dark">
      {/* <Card.Img variant="top" src={image} alt={`${number} Doctor`}/> */}
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
      <Button variant="info" type="button" onClick={() => navigate(`/edit/${name}`)}>Edit</Button>
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