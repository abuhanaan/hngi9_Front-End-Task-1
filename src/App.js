import { Container } from 'react-bootstrap';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <Router>
      <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
        <div className="w-100" style={{maxWidth: "800px"}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <FooterComponent></FooterComponent>
        </div>
      </Container>
    </Router>
  );
}

export default App;
