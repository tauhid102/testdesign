import React, { useEffect, useState } from 'react';
import ProductHot from './ProductHot';
const HotDeals = () => {
    const [product, setProducts] = useState([]);
    useEffect(() => {
        fetch('./fakeApi.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const products = product.slice(6, 12)
    console.log(products);
    return (
        <div className='container mt-5 mb-5'>
            <h4 className='products'>Today’s hot deals</h4>
            <div className='row'>
                {
                    products.map(product => <ProductHot
                        key={product.key}
                        product={product}
                    >
                    </ProductHot>)
                }
            </div>
        </div>
    );
};

export default HotDeals;