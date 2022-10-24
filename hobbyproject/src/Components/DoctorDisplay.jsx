import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function Doctor({
  number,name,companions,startYear,endYear
}) {
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
    </Card>
  );
}

export default Doctor;

Doctor.propTypes = {
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  companions: PropTypes.array.isRequired,
  startYear: PropTypes.number.isRequired,
  endYear: PropTypes.number,
};