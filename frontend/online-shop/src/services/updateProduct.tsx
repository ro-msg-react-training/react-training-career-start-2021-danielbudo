import axios from "axios";

export const updateProduct = async (id: number, product: any) => {
  const result = await axios.put(
    "http://localhost:4000/products/" + id.toString(),
    product
  );
  return result;
};
