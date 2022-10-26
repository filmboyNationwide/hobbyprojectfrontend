import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button, Row, Col, Container, Card
} from 'react-bootstrap';
import {
  BrowserRouter as Router, Link, Routes, Route,
} from 'react-router-dom';
import './App.css';
import Form from './Components/Form'
import EditForm from './Components/EditForm'

import DoctorGet from './Components/DoctorGet'
import TryAgain from './Components/TryAgain'
import DoctorCreate from './Components/DoctorCreate'
import DoctorUpdate from './Components/DoctorUpdate'
import DoctorDisplay from './Components/DoctorDisplay'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Container>
            <Row>
            <Col><Link to="/">
              <Button>Home</Button>
            </Link></Col>
          <Col><Link to="/search">
              <Button>Search</Button>
            </Link></Col>
            </Row>
            <br></br>
            <br></br>
          </Container>
          <Card>
          <Card.Img variant="top" src="https://static.wikia.nocookie.net/tardis/images/d/d9/Doctor_Who_logo_2023.jpg"/>
          </Card>
          <br/>
          <br/>
          <Routes>
            <Route path="/search" element={<Form/>}/>
              <Route path="/details/:name" element={<DoctorGet name="name"/>} />
              <Route path="/details/none" element={<TryAgain/>}/>
              <Route path="/edit" element={<EditForm/>}/>
          </Routes>
        </Router>
      </header>
    </div >
  );
}

export default App;
