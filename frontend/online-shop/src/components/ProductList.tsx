import ProductItem from "./ProductItem";
import { useProductListStyles } from "../styles/ProductListStyle";
import { Grid, Typography } from "@material-ui/core";

export let theProducts = [
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
      "https://www.pngkey.com/png/full/138-1387403_silver-ball-chain-50cm-necklace.png",
    description: "Cool stuff",
  },
  {
    id: 3,
    name: "Samsung Smart TV",
    category: "TVs",
    price: 500,
    imageUrl: "https://i.ibb.co/TR28K4Q/111.png",
    description: "Cool stuff",
  },
  {
    id: 4,
    name: "Black T-Shirt",
    category: "Clothes",
    price: 20,
    imageUrl:
      "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
    description: "Cool stuff",
  },
  {
    id: 5,
    name: "Aviator Sunglasses",
    category: "Accessories",
    price: 55,
    imageUrl:
      "https://i.ibb.co/PMBkWMx/478-4784781-aviator-sunglasses-png-green-ray-ban-aviator-sunglasses.png",
    description: "Cool stuff",
  },
  {
    id: 6,
    name: "Nike Running Shoes",
    category: "Sport Shoes",
    price: 85,
    imageUrl:
      "https://static.nike.com/a/images/t_default/2b499f05-057b-48cb-b9c0-c41a5127cf6e/nike-air-zoom-pegasus-37-by-you.png",
    description: "Cool stuff",
  },
];

function ProductList() {
  let products = theProducts.map((product, index) => (
    <ProductItem key={index} {...product} />
  ));
  const classes = useProductListStyles();
  return (
    <div>
      <Typography className={classes.h1} component={"div"}>
        Products
      </Typography>
      <div className={classes.productList}>
        <Grid container>{products}</Grid>
      </div>
    </div>
  );
}
export default ProductList;
