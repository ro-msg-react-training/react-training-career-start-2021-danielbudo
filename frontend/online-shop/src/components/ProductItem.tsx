import { Button, IconButton, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { useProductItemStyles } from "../styles/ProductItemStyle";
import { Link } from "react-router-dom";
import Product from "../models/Product";

function ProductItem(props: Product) {
  const classes = useProductItemStyles();
  let id: number = props.id;
  let address: string = "/products/" + id.toString();
  return (
    <Grid container className={classes.product}>
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
