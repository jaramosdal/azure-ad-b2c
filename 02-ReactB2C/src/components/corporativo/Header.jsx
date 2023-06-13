import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import Logo from "./Logo";

const Header = () => {
  return (
    <Row className="mb-3">
      <Col xs lg="1" className="mt-2">
        <Logo />
      </Col>
      <Col xs lg="10">
        <Navbar bg="light">
          <Container fluid>
            <Navbar.Brand href="/">Título de la aplicación</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>{/* <LogoutButton /> */}</Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Col>
    </Row>
  );
};

export default Header;
