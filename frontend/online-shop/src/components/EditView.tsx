import { useEffect } from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import { useParams, Link } from "react-router-dom";
import { useEditViewStyles } from "../styles/EditViewStyle";
import { getProductById } from "../services/getProductById";
import { useState } from "react";
import { updateProduct } from "../services/updateProduct";

function EditView() {
  const classes = useEditViewStyles();
  const { id } = useParams<{ id: string }>();
  const productAddress = "/products/" + id.toString();
  const [data, setData] = useState({
    id: 0,
    name: "Blue Jeans",
    category: "Clothes",
    price: 40,
    imageUrl:
      "https://image.made-in-china.com/2f0j00oUYGsJzBEAkl/New-Style-Casual-Fashionable-Trousers-Jeans-Men-Slim-Fit-Trousers.jpg",
    description: "Cool stuff",
  });

  const product = data;

  function getProduct() {
    getProductById(parseInt(id)).then((response) => {
      setData(response);
    });
  }

  useEffect(() => {
    getProduct();
  }, []);

  function updateItem() {
    updateProduct(data.id, product);
  }

  return (
    <Grid container className={classes.product}>
      <Grid item>
        <Typography>Edit Product</Typography>
      </Grid>
      <Grid item>
        <Typography>Product ID: {id}</Typography>
      </Grid>
      <form>
        <label>Name: </label>
        <input
          type="text"
          value={data.name}
          onChange={(event) => (product.name = event.target.value)}
        ></input>
        <br></br>
        <label>Category: </label>
        <input
          type="text"
          value={data.category}
          onChange={(event) => (product.category = event.target.value)}
        />
        <br></br>
        <label>Description: </label>
        <input
          type="text"
          value={data.description}
          onChange={(event) => (product.description = event.target.value)}
        />
        <br></br>
        <label>Price: </label>
        <input
          type="text"
          value={data.price}
          onChange={(event) => (product.price = parseInt(event.target.value))}
        />
      </form>
      <Link to={productAddress}>
        <Button variant="outlined" onClick={updateItem}>
          Save
        </Button>
      </Link>
      <Link to={productAddress}>
        <Button variant="outlined">Cancel</Button>
      </Link>
    </Grid>
  );
}

export default EditView;
