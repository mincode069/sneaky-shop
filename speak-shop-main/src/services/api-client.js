import axios from "axios";

const ApiClient = axios.create({
  baseURL: "https://63a564ba318b23efa7923607.mockapi.io/speakshop/",
});

export { ApiClient };
