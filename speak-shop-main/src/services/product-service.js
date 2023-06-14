import { ApiClient } from "./api-client";

export const getProducts = async () => {
  const response = await ApiClient.get("/product");
  return response;
};
export const addProduct = async (title, price, images, category) => {
  try {
    const response = await ApiClient.post("/product", {
      title,
      price,
      images,
      category,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
export const deleteProduct = async (id) => {
  try {
    const response = await ApiClient.delete(`/product/${id}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
export const editProduct = async (title, price, images, category, id) => {
  try {
    const response = await ApiClient.put(`/product/${id}`, {
      title,
      price,
      images,
      category,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
export const getProductById = async (id) => {
  const response = await ApiClient.get(`/product/${id}`);
  return response;
};
