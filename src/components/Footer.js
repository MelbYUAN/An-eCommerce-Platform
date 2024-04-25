import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
    const d = new Date();
    const year = d.getFullYear();
  return (
    <div>
      <footer className="text-center">
        <Container>
          <Row>
            <Col>{`${year}@Copyright`}</Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
