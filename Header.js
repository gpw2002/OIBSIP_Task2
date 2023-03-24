import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../Content/Home';
import { Contact } from '../Content/Contact';
import { About } from '../Content/About';

export const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" sticky='top'>
                <Container fluid>
                    <Navbar.Brand href="#"><h6 className='section-title mb-6' style={{ margin: '0px' }}>Gaurav Wani</h6></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link href="#/home">Home</Nav.Link>
                            <Nav.Link href="#/about">About</Nav.Link>
                            <Nav.Link href="#/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <HashRouter>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Navigate to="/home" />} />
                </Routes>
            </HashRouter>

        </div>
    );
}