import { ApiClient } from "./api-client";

export const getUsers = async () => {
  const response = await ApiClient.get("/user");
  return response;
};
export const addUser = async (firstName, lastName, email, password) => {
  try {
    const response = await ApiClient.post("/user", {
      firstName,
      lastName,
      email,
      password,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
export const deleteUser = async (id) => {
  try {
    const response = await ApiClient.delete(`/user/${id}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
export const editUser = async (firstName, lastName, email, password, id) => {
  try {
    const response = await ApiClient.put(`/user/${id}`, {
      firstName,
      lastName,
      email,
      password,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
