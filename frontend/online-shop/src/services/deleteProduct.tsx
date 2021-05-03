import axios from "axios";
const url: string = "http://localhost:4000";

export async function deleteProduct(id: number) {
  await axios.delete(`${url}/products/${id}`);
}
