import { Container, Row, Col } from "react-bootstrap";

import Sidebar from "../components/Layout/Sidebar";
import Footer from "../components/Layout/Footer";

import "./Layout.scss";

const DefaultLayout = ({ children }) => {
  return (
    <div className="DefaultLayout">
      <Container fluid>
        <Row>
          <Col sm={3} lg={2}>
            <Sidebar />
          </Col>
          <Col sm={9} lg={10}>
            <div className="DefaultLayout__content">
              {children}
              <Footer />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DefaultLayout;
