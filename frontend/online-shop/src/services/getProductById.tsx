import axios from "axios";

export const getProductById = async (id: number) => {
  const result = await axios
    .get("http://localhost:4000/products/" + id)
    .then((result) => {
      return result.data;
    });
  return result;
};
