import React from 'react';
import '../styles/ProductItem.css';

interface ProductProps{
    name: String;
    category: String;
    price: Number;
}

function ProductIdem(props: ProductProps){
    return <div className='product'>
        <p className='productName'>{props.name}</p>
        <p>{props.category}</p>
        <p>{props.price}</p>
    </div>
}

export default ProductIdem;