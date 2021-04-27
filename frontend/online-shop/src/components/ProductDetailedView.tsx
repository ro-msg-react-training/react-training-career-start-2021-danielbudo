import { Typography, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid/Grid";
import { useParams, Link } from "react-router-dom";
import { useProductDetailViewStyles } from "../styles/ProductDetailViewStyle";
import ProductDetails from "../models/ProductDetails";

let theProducts = [
  {
    id: 1,
    name: "Blue Jeans",
    category: "Clothes",
    price: 40,
    imageUrl:
      "https://image.made-in-china.com/2f0j00oUYGsJzBEAkl/New-Style-Casual-Fashionable-Trousers-Jeans-Men-Slim-Fit-Trousers.jpg",
    description: "Cool stuff",
  },
  {
    id: 2,
    name: "Silver Necklace",
    category: "Jewelery",
    price: 60,
    imageUrl:
      "https://cdn.notonthehighstreet.com/fs/47/7d/2750-b4b1-412f-adba-fbfa1dbfc3b3/original_men-s-silver-or-gold-octagon-st-christopher-necklace.jpg",
    description: "Cool stuff",
  },
  {
    id: 3,
    name: "Samsung Smart TV",
    category: "TVs",
    price: 500,
    imageUrl:
      "https://img.global.news.samsung.com/global/wp-content/uploads/2017/08/Smart-TV-Shazam_main-1_f.jpg",
    description: "Cool stuff",
  },
  {
    id: 4,
    name: "Black T-Shirt",
    category: "Clothes",
    price: 20,
    imageUrl:
      "https://media.istockphoto.com/photos/stylish-young-woman-in-blank-black-tshirt-on-white-picture-id926335278?k=6&m=926335278&s=170667a&w=0&h=eU9hk0KC8Lst6yqQbCyzWJXoBmb9J04XnrohTjsAbj0=",
    description: "Cool stuff",
  },
  {
    id: 5,
    name: "Aviator Sunglasses",
    category: "Accessories",
    price: 55,
    imageUrl:
      "https://www.brandfield.com/media/catalog/product/cache/image/9df78eab33525d08d6e5fb8d27136e95/8/0/805289307662.jpg",
    description: "Cool stuff",
  },
  {
    id: 6,
    name: "Nike Running Shoes",
    category: "Sport Shoes",
    price: 85,
    imageUrl:
      "https://i.pinimg.com/originals/ef/c9/5d/efc95dfdc4acdc949274d0f7dcabd107.jpg",
    description: "Cool stuff",
  },
];

function getProduct(id: number): ProductDetails | undefined {
  return theProducts.find((x) => x.id === id);
}

function ProductDetailedView() {
  const classes = useProductDetailViewStyles();
  const { id } = useParams<{ id?: string | undefined }>();
  const product = !!id ? getProduct(parseInt(id)) : undefined;

  if (product !== undefined) {
    return (
      <Grid container className={classes.wrapper}>
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
        </Grid>
      </Grid>
    );
  } else {
    return <Typography>Error: Product not found.</Typography>;
  }
}
export default ProductDetailedView;
