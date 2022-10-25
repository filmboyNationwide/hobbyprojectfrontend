import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button, Row, Col, Container,
} from 'react-bootstrap';
import {
  BrowserRouter as Router, Link, Routes, Route,
} from 'react-router-dom';
import './App.css';
import Form from './Components/Form'
import DoctorGet from './Components/DoctorGet'
import DoctorCreate from './Components/DoctorCreate'
import DoctorUpdate from './Components/DoctorUpdate'

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
            <p>Get Request</p>
            <DoctorGet name="William Hartnell" number="" />
            <p>Create Request</p>
            <DoctorCreate/>
            <p>Update Request</p>
            <DoctorUpdate/>
            </Col>
          </Container>
        </Router>
      </header>
    </div>
  );
}

export default App;
