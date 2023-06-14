import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Loading } from "../Loading";
import ProductItem from "../ProductItem/ProductItem";
import "./Content.scss";

const Content = ({ listProduct = [], title, loading }) => {
  return (
    <>
      {loading ? (
        <>
          <h1 className="Content__title"> {title} </h1>
          <div className="Content__container">
            {Array.apply(null, Array(10)).map((item, index) => (
              <Loading className="Content__container-loading" />
            ))}
          </div>
        </>
      ) : (
        <div className="Content">
          <h1 className="Content__title"> {title} </h1>
          <div className="Content__container">
            <Container>
              <Row>
                {listProduct?.length > 0 &&
                  // eslint-disable-next-line array-callback-return
                  listProduct?.map((item, index) => {
                    if (item.images[1]) {
                      return (
                        <Col sm={6} md={4} xl={3} key={index}>
                          <ProductItem
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            img={item.images[0]}
                          />
                        </Col>
                      );
                    }
                  })}
              </Row>
            </Container>
          </div>
        </div>
      )}
    </>
  );
};

export default Content;
