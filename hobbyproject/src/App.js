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
            <Row>
            <Form />
            </Row>
            <p>Display GET request 1st Doctor</p>
            <DoctorDetails name="William Hartnell" number="" />
            </Col>
          </Container>
        </Router>
      </header>
    </div>
  );
}

export default App;
