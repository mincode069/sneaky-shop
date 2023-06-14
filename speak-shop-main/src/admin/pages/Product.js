import React, { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm/ProductForm";
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../../services/product-service";
import Modal from "../../user/components/Modal";
import "./Product.scss";
function Product() {
  const [listProduct, setListProduct] = useState([]);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [idEdit, setIdEdit] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const handleAddProduct = () => {
    setShowAddProduct(!showAddProduct);
  };

  const handleGetProduct = async () => {
    try {
      const response = await getProducts();
      setListProduct(response.data);
      console.log(response.data);
    } catch (error) {
      alert(error);
    }
  };

  const handleEditProduct = (id) => {
    setIdEdit(id);
    handleAddProduct();
  };

  const handleChangeProductPerPage = (number) => {
    setProductsPerPage(number);
    setCurrentPage(1);
  };
  const handleChangePage = (number) => {
    setCurrentPage(number);
  };
  const pageNumbers = Array.from(
    new Array(Math.ceil(listProduct.length / productsPerPage)),
    (_, i) => i + 1
  );
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = (currentPage - 1) * productsPerPage;
  console.log(indexOfFirstProduct, indexOfLastProduct);
  const listProductPage = listProduct.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  useEffect(() => {
    handleGetProduct();
    window.scrollTo(0, 0);
    console.log(listProduct);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div class="user__container">
      <Modal
        visible={showAddProduct}
        onCloseModal={() => setShowAddProduct(false)}
      >
        <ProductForm
          onGetProduct={handleGetProduct}
          show={showAddProduct}
          onClose={handleAddProduct}
          product={listProduct.find((product) => product.id === idEdit)}
          onEdit={handleEditProduct}
          isEdit={idEdit}
        />
      </Modal>

      <div class="user__title">
        <h1>Product</h1>
        <button onClick={handleAddProduct} class="custom-button">
          Add Product
        </button>
      </div>
      <div class="user__table__feature right__side">
        <p>Product per page : </p>
        <div>
          <input
            type="checkbox"
            id="5"
            onChange={() => handleChangeProductPerPage(5)}
            checked={productsPerPage === 5}
          />
          <label for="5">5</label>

          <input
            type="checkbox"
            id="10"
            onChange={() => handleChangeProductPerPage(10)}
            checked={productsPerPage === 10}
          />
          <label for="10">10</label>
        </div>
      </div>

      <div>
        <div class="product__table">
          <div>ID</div>
          <div>Title</div>
          <div>Price</div>
          <div>Category</div>
          <div>Action</div>
        </div>
        {listProductPage?.length > 0 &&
          listProductPage?.map((item, index) => {
            return (
              <ProductList
                onGetProduct={handleGetProduct}
                id={item.id}
                title={item.title}
                images={item.images}
                category={item.category}
                price={item.price}
                onEdit={handleEditProduct}
              ></ProductList>
            );
          })}
      </div>
      <div class="right__side">
        {pageNumbers.map((number) => (
          <button
            onClick={() => handleChangePage(number)}
            className={`number__page ${currentPage === number ? "active" : ""}`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Product;
