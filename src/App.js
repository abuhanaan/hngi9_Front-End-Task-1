import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import LinkSection from './components/LinkSection';
import './App.css'
import Profile from './components/Profile';

function App() {
  return (
    <>
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
      <div className="w-100" style={{maxWidth: "800px"}}>
        <Profile />
        <LinkSection />
        <Footer />
      </div>
    </Container>
    </>
  );
}

export default App;
