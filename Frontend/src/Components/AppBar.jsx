import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../index.css'
function AppBar() {
    return (
        <Navbar expand="lg" className="bg-white">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        href='/'
                        src="https://agromachengineering.com/wp-content/uploads/2020/09/agromach_h_logo.png" style={{ height: '3em', width: '140px' }} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto Test">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/team">Team</Nav.Link>
                        <NavDropdown title="Products" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/products/rice">Rice Milling Solution</NavDropdown.Item>
                            <NavDropdown.Item href="/products/seed">
                                Seed Plants
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/products/daal">Daal Milling Solutions</NavDropdown.Item>

                        </NavDropdown>
                        <NavDropdown title="More" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/more/join">Join Us</NavDropdown.Item>
                            <NavDropdown.Item href="/more/dealership">
                                Dealership
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/more/support">Support</NavDropdown.Item>

                        </NavDropdown>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppBar;