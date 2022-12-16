import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function Doctor({
  number, actor ,startYear,endYear
}) {
  const navigate = useNavigate();
  const params = useParams();

//   const links = [
//       "No image found",
//       "https://upload.wikimedia.org/wikipedia/en/7/70/First_Doctor_%28Doctor_Who%29.jpg",
//       "https://upload.wikimedia.org/wikipedia/en/c/c3/Second_Doctor_%28Doctor_Who%29.jpg",
//       "https://upload.wikimedia.org/wikipedia/en/8/81/Third_Doctor_%28Doctor_Who%29.jpg",
//       "https://upload.wikimedia.org/wikipedia/en/6/65/Fourth_Doctor_%28Doctor_Who%29.jpg",
//       "https://upload.wikimedia.org/wikipedia/en/7/78/Fifth_Doctor_%28Doctor_Who%29.jpg",
//       "https://upload.wikimedia.org/wikipedia/en/4/4b/Sixth_Doctor_%28Doctor_Who%29.jpg",
//       "https://upload.wikimedia.org/wikipedia/en/8/89/Seventh_Doctor_%28Doctor_Who%29.jpg",
//       "https://upload.wikimedia.org/wikipedia/en/a/a1/Eighth_Doctor_%28Doctor_Who%29_%28cropped%29.jpg",
//       "https://upload.wikimedia.org/wikipedia/en/e/ec/Ninth_Doctor_%28Doctor_Who%29.jpg",
//       "https://upload.wikimedia.org/wikipedia/en/2/21/Tenth_Doctor_%28Doctor_Who%29.jpg",
//       "https://upload.wikimedia.org/wikipedia/en/d/de/Eleventh_Doctor_%28Doctor_Who%29.jpg",
//       "https://upload.wikimedia.org/wikipedia/en/e/ec/Twelfth_Doctor_%28Doctor_Who%29.jpg",
//       "https://upload.wikimedia.org/wikipedia/en/a/a2/Thirteenth_Doctor_%28Doctor_Who%29.jpg",
//       "https://upload.wikimedia.org/wikipedia/en/2/29/Fourteenth_Doctor_%28Doctor_Who%29.jpg",
//       "https://upload.wikimedia.org/wikipedia/en/b/b1/Fifteenth_Doctor_%28Doctor_Who%29.jpg"
// ]
//
//   function findLink(number) {
//     console.log(number.number.slice(0,-2));
//     const index = parseInt(number.number.slice(0,-2));
//     const image = links[index];
//     return image;
//   }

  console.log(params);
  return (
    <Card bg="dark" className="h-100">
      {/*<Card.Img variant="top" src= {`${findLink({number})}`} alt={`${number} Doctor`}/>*/}
      <Card.Img variant="top" src= "https://upload.wikimedia.org/wikipedia/en/b/b1/Fifteenth_Doctor_%28Doctor_Who%29.jpg" alt={`${number} Doctor`}/>
      <Card.Body>
        <Card.Title>{number} Doctor</Card.Title>
        <Card.Text>
          {`Actor: ${actor}`}
        </Card.Text>
        <Card.Text>
          {`From ${startYear} to ${endYear}`}
        </Card.Text>
      </Card.Body>
      <Button variant="info" type="button" onClick={() => navigate(`/edit/${actor}`)}>Edit</Button>
      <Button variant="danger" type="button" onClick={() => navigate(`/delete/${actor}`)}>Delete</Button>
    </Card>
  );
}

export default Doctor;

Doctor.propTypes = {
  number: PropTypes.string,
  actor: PropTypes.string,
  companions: PropTypes.array,
  startYear: PropTypes.number,
  endYear: PropTypes.number,
};