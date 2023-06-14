import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ProductItem from "../ProductItem/ProductItem";
import { ACTIONS, AppContext } from "../../store";
import { Loading } from "../Loading";
import { Container, Row, Col } from "react-bootstrap";
import "./DetailProduct.scss";

const DetailProduct = ({
  data,
  listProduct = [],
  title,
  loading,
  idProduct,
}) => {
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const handleNavigateCategory = (categoryName) => {
    navigate(`/${categoryName}`);
  };
  const handleAddProductInCart = () => {
    dispatch({
      type: ACTIONS.ADD_PRODUCT_CART,
      payload: {
        id: data?.id,
        img: data?.images[0],
        price: data?.price,
        quantity: 1,
        title: data?.title,
      },
    });
  };
  let filteredArr = listProduct.filter(function (element) {
    return element.id !== idProduct;
  });

  console.log(state);
  return (
    <div className="DetailProduct__container">
      {loading ? (
        <div className="DetailProduct__loading">
          <h3 className="DetailProduct__title">{title}</h3>
          <Loading />
        </div>
      ) : (
        <>
          <h3 className="DetailProduct__title">{title}</h3>
          <div className="DetailProduct">
            <img
              className="DetailProduct__images"
              src={data?.images[0].URLImg}
              alt=""
            ></img>

            <div className="DetailProduct__info">
              <div className="DetailProduct__info-title">{data?.title}</div>
              <div className="DetailProduct__info-price">{data?.price} $</div>
              <div className="DetailProduct__info-description">
                {data?.description}
              </div>
              <div
                onClick={() => handleNavigateCategory(data?.category)}
                className="DetailProduct__info-category"
              >
                Category: {data?.category}
              </div>
              <button
                onClick={handleAddProductInCart}
                className="DetailProduct__button"
              >
                Add to cart
                <i className="fa-solid fa-cart-plus"></i>
              </button>
              <p>
                <strong>» PRODUCT WARRANTY 90 DAYS</strong>
              </p>
              <p>
                <strong>» EXCHANGE WITHIN 30 DAYS</strong>
              </p>
              <p>
                <strong>» SALES HOTLINE 1900 999 931</strong>
              </p>
            </div>
          </div>
          <div className="DetailProduct__description">
            <h4 className="DetailProduct__h4">Description</h4>
            {data?.images.length > 1 &&
              data?.images.slice(1).map((item, index) => {
                return <img src={item.URLImg} alt=""></img>;
              })}
          </div>
          <div className="DetailProduct__space"></div>
          <div className="DetailProduct__suggested">
            <h4 className="DetailProduct__h4">PRODUCTS SAME CATEGORY</h4>
            <Container>
              <Row>
                {filteredArr?.length > 0 &&
                  // eslint-disable-next-line array-callback-return
                  filteredArr?.slice(0, 4).map((item, index) => {
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
                  })}
              </Row>
            </Container>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailProduct;
