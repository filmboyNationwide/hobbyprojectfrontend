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
  number: PropTypes.string,
  name: PropTypes.string,
  companions: PropTypes.array,
  startYear: PropTypes.number,
  endYear: PropTypes.number,
};