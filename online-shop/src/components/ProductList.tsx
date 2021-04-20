import React from 'react';
import { isJSDocAugmentsTag } from 'typescript';
import ProductItem from './ProductItem';
import '../styles/ProductList.css';

let theProducts = [
    {
        name: 'Blue Jeans',
        category: 'Clothes',
        price: 40,
    },
    {
        name: 'Silver Necklace',
        category: 'Jewelery',
        price: 60,
    },
    {
        name: 'Samsung Smart TV',
        category: 'TVs',
        price: 500,
    }
]

function ProductList(){
    let products = theProducts.map((product, index) => <ProductItem key={index} {...product}/>);
    return (
        <div>
            <h1>Products:</h1>
            <div className='productList'>{products}</div>
        </div>
    )
}
export default ProductList;