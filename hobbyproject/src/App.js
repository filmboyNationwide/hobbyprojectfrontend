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
import Home from './Components/Home'
import DoctorGet from './Components/DoctorGet'
import TryAgain from './Components/TryAgain'
// import DoctorCreate from './Components/DoctorCreate'
// import DoctorUpdate from './Components/DoctorUpdate'
// import DoctorDisplay from './Components/DoctorDisplay'

function App() {
  return (
    <div className="App">
          <header className="App-header">
          <Router>
          <Card>
          <Card.Img variant="top" height="100%" src="https://static.wikia.nocookie.net/tardis/images/d/d9/Doctor_Who_logo_2023.jpg" alt="Doctor Who Logo 2023"/>
          </Card>
          <br/>
          <br/>
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
          <Routes>
          <Route index element={<Home/>}/>
            <Route path="/search" element={<Form/>}/>
              <Route path="/details/:name" element={<DoctorGet name="name"/>} />
              <Route path="/details/none" element={<TryAgain/>}/>
              <Route path="/edit/:current" element={<EditForm current="current" />}/>
          </Routes>
        </Router>
        </header>
    </div >
  );
}

export default App;
