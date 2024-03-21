import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavbarComponent.scss'; // Import your SCSS file
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router

// Define the NavbarComponent function component
function NavbarComponent(option) {
    // Assign the useNavigate hook to the navigate constant for routing
    const navigate = useNavigate();

    // Return the JSX for the NavbarComponent
    return (
        <>
            {/* Navbar component */}
            <Navbar className='NavbarComponent' bg="primary" data-bs-theme="dark">
                <Container>
                    {/* Navbar Brand with onClick event to navigate to home */}
                    <Navbar.Brand className='NavbarComponent-heading' role='button' onClick={() => navigate('/')}>ZOOM</Navbar.Brand>
                    <Nav className="me-auto">
                        {/* Nav links with onClick events to navigate to different pages */}
                        <Nav.Link role='button' onClick={() => navigate('/')} className={option.option === 'home' ? 'text-light' : ''}>Home</Nav.Link>
                        <Nav.Link role='button' onClick={() => navigate('/generator-meeting')} className={option.option === 'generatorMeeting' ? 'text-light' : ''}>Generate-Meeting</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarComponent; // Export the NavbarComponent component
