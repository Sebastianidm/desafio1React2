import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

function Navigation() {
  return (
    <>
      <Navbar bg="danger" variant="dark">
        <Container className="justify-content-start">
          <Navbar.Brand><span>🧁</span> Cake </Navbar.Brand>
          <Link to="/" className="text-white ms-3 text-decoration-none">
            <span>🏠</span> Home
          </Link>
          <Link to="/contacto" className="text-white ms-3 text-decoration-none">
            <span>📒</span> Contacto
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;