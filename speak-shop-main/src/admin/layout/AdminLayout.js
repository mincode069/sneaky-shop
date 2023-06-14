import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Sidebar from "./Sidebar";

function AdminLayout({ children }) {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col sm={3} lg={2}>
            <Sidebar />
          </Col>
          <Col sm={9} lg={10}>
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminLayout;
