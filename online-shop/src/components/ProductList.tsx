import React from 'react';
import ProductItem from './ProductItem';
import { useProductListStyles } from '../styles/ProductListStyle';
import { Grid, Typography } from '@material-ui/core';

let theProducts = [
    {
        name: 'Blue Jeans',
        category: 'Clothes',
        price: 40,
        imageUrl: 'https://lh3.googleusercontent.com/proxy/ATW3eacXAFvSxlHgeSqKWlVaAEER1deIyQQ-crgX1R-T-PqwMGzjIDYc2bDKBrXucB2yYI7yuB6PPy1gFsZ98aydehQXnwCwOlDMsalnm9TotIlSvi1pJapjjRIDImYr8AZD',
    },
    {
        name: 'Silver Necklace',
        category: 'Jewelery',
        price: 60,
        imageUrl: '',
    },
    {
        name: 'Samsung Smart TV',
        category: 'TVs',
        price: 500,
        imageUrl:'',
    },
    {
        name: 'Black T-Shirt',
        category: 'Clothes',
        price: 20,
        imageUrl:'',
    },
    {
        name: 'Aviator Sunglasses',
        category: 'Accessories',
        price: 55,
        imageUrl:'',
    },
    {
        name: 'Nike Running Shoes',
        category: 'Sport Shoes',
        price: 85,
        imageUrl:'',
    },
]

function ProductList() {
    let products = theProducts.map((product, index) => <ProductItem key={index} {...product} />);
    const classes = useProductListStyles();
    return (
        <div>
            <Typography className={classes.h1} component={'div'}>Products</Typography>
            <div className={classes.productList}>
                <Grid container>
                    {products}
                </Grid>
            </div>
        </div>
    )
}
export default ProductList;