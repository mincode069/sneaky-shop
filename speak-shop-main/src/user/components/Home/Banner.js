import React from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

import { Banner as BannerImages } from "../../../assets";

import "./Banner.scss";

function Banner() {
  return (
    <div className="Banner">
      <Container>
        <Row>
          <Col sm={0} lg={6}>
            <Link to="/jacket">
              <img
                className="Banner_image"
                src={BannerImages.clothes}
                alt=""
              ></img>
            </Link>
          </Col>

          <Col sm={12} lg={6}>
            <Row>
              <Col>
                <Link to="/backpack">
                  <img
                    className="Banner_image"
                    src={BannerImages.backpack}
                    alt=""
                  ></img>
                </Link>
                <Link to="/cap">
                  <img
                    className="Banner_image"
                    src={BannerImages.cap}
                    alt=""
                  ></img>
                </Link>
              </Col>
              <Col>
                <Link to="/slingbag">
                  <img
                    className="Banner_image"
                    src={BannerImages.slingbag}
                    alt=""
                  ></img>
                </Link>
                <Link to="/belt">
                  <img
                    className="Banner_image"
                    src={BannerImages.belt}
                    alt=""
                  ></img>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;
