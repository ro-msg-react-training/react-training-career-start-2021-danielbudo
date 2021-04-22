import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useProductItemStyles } from '../styles/ProductItemStyle';


interface ProductProps {
    name: string;
    category: string;
    price: number;

}

function ProductItem(props: ProductProps) {
    const classes = useProductItemStyles();
    return (
        <Grid container className={classes.product}>
            <Grid item><Typography className={classes.productDetail} paragraph>{props.name}</Typography></Grid>
            <Grid item><Typography className={classes.productDetail} paragraph>{props.category}</Typography></Grid>
            <Grid item><Typography className={classes.productDetail}>{props.price}</Typography></Grid>
        </Grid>
    );
};

export default ProductItem;