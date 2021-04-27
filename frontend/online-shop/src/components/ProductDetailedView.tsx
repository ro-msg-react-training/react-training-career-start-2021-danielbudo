import { Typography, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid/Grid";
import { useParams, Link, useHistory } from "react-router-dom";
import { useProductDetailViewStyles } from "../styles/ProductDetailViewStyle";
import ProductDetails from "../models/ProductDetails";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

const url: string = "http://localhost:4000";

async function deleteProduct(id: number) {
  await axios.delete(`${url}/products/${id}`);
}

function ProductDetailedView() {
  let history = useHistory();
  const classes = useProductDetailViewStyles();
  const { id } = useParams<{ id?: string | undefined }>();
  const [loading, setLoading] = useState(true);
  const [productDetails, setProductDetails] = useState({
    id: 0,
    name: "Blue Jeans",
    category: "Clothes",
    price: 40,
    imageUrl:
      "https://image.made-in-china.com/2f0j00oUYGsJzBEAkl/New-Style-Casual-Fashionable-Trousers-Jeans-Men-Slim-Fit-Trousers.jpg",
    description: "Cool stuff",
  });

  useEffect(() => {
    const source = axios.CancelToken.source();
    // Set product as mounted
    let mounted = true;
    async function get(mounted: boolean) {
      let response: AxiosResponse<ProductDetails> = await axios.get(
        `${url}/products/${id}`,
        { cancelToken: source.token }
      );
      // only update state if the component is still mounted
      if (mounted) setProductDetails(response.data);
    }
    // After fetching the data, if the product is set as mounted,
    // stop showing 'loading' and display the product
    get(mounted).then(() => {
      if (mounted) {
        setLoading(false);
      }
    });
    return function cleanup() {
      mounted = false;
    };
  });

  const product = !!id ? productDetails : undefined;

  if (product !== undefined) {
    return (
      <Grid container className={classes.wrapper}>
        {loading ? (
          <p>loading...</p>
        ) : (
          <Grid container className={classes.imageProduct}>
            <Grid container className={classes.imageContainer}>
              <Grid item>
                <img
                  src={product.imageUrl}
                  alt="Your Product"
                  className={classes.image}
                />
              </Grid>
            </Grid>
            <Typography className={classes.title}>Product details:</Typography>
            <Grid container className={classes.product}>
              <Grid item>
                <Typography>Name: {product.name}</Typography>
              </Grid>
              <Grid item>
                <Typography>Categoty: {product.category}</Typography>
              </Grid>
              <Grid item>
                <Typography>Description: {product.description}</Typography>
              </Grid>
              <Grid item>
                <Typography>Price: {product.price} €</Typography>
              </Grid>
            </Grid>
            <Link to="/cart">
              <Button variant="outlined" className={classes.button}>
                Add to cart
              </Button>
            </Link>
            <Button
              variant="outlined"
              className={classes.button}
              onClick={() => {
                deleteProduct(product.id);
                console.log(
                  `Deletect product with id ${product.id}: ${product.name}`
                );
                history.push("/products");
              }}
            >
              Delete
            </Button>
          </Grid>
        )}
      </Grid>
    );
  } else {
    return <Typography>Error: Product not found.</Typography>;
  }
}
export default ProductDetailedView;
