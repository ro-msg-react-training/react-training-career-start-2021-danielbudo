import { Button, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { useProductItemStyles } from "../styles/ProductItemStyle";
import { Link } from "react-router-dom";

interface ProductProps {
  id: number;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  description: string;
}

function ProductItem(props: ProductProps) {
  const classes = useProductItemStyles();
  let id: number = props.id;
  let address: string = "/products/" + id.toString();
  return (
    <Grid container className={classes.product}>
      <Grid item className={classes.imageContainer}>
        <img
          src={props.imageUrl}
          className={classes.image}
          alt="Your product."
        />
      </Grid>
      <Grid item>
        <Typography className={classes.productDetail} paragraph>
          {props.name}
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.productDetail}>
          {props.price} €
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.category} paragraph>
          {props.category}
        </Typography>
      </Grid>
      <Grid item>
        <Link to={address}>
          <Button>See details</Button>
        </Link>
      </Grid>
    </Grid>
  );
}

export default ProductItem;
