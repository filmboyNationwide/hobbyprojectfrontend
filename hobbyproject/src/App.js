import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button, Row, Col, Container,
} from 'react-bootstrap';
import {
  BrowserRouter as Router, Link, Routes, Route,
} from 'react-router-dom';
import './App.css';
import Form from './Components/Form'
import DoctorDisplay from './Components/DoctorDisplay'
import DoctorDetails from './Components/DoctorDetails'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Container>
            <Col>
            <p>Display hard coded doctor</p>
            <DoctorDisplay number="1st" companions={["Ian ","Barbara ","Susan "]}name="William Hartnell" startYear={1963} endYear={1966}/>
            <Row>
            <Form />
            </Row>
            <p>Display GET request 1st Doctor</p>
            <DoctorDetails/>
            </Col>
          </Container>
        </Router>
      </header>
    </div>
  );
}

export default App;
