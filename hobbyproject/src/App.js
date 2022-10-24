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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Container>
            <Col>
            <DoctorDisplay number="1st" companions={["Ian ","Barbara ","Susan "]}name="William Hartnell" startYear={1963} endYear={1966}/>
            <Row>
            <Form />
            </Row>
            <DoctorDisplay/>
            </Col>
          </Container>
        </Router>
      </header>
    </div>
  );
}

export default App;
