import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
const HotDeals = () => {
    const [product, setProducts] = useState([]);
    useEffect(() => {
        fetch('./fakeApi.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const products = product.slice(6, 11)
    console.log(products);
    return (
        <div className='container mt-5 mb-5'>
            <h4 className='products'>Today’s hot deals</h4>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4'>
                {
                    products.map(product => <Product
                        key={product.key}
                        product={product}
                    >
                    </Product>)
                }
            </div>
        </div>
    );
};

export default HotDeals;