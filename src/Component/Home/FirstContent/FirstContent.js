import React, { useEffect, useState } from 'react';
import '../../Style/style.css'
import Product from '../Product/Product';
const FirstContent = () => {
    const [product, setProducts] = useState([]);
    useEffect(() => {
        fetch('./fakeApi.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const products = product.slice(0, 6)
    console.log(products);
    return (
        <div className='container'>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4'>
                <div className='col-3 mt-5'>
                    <h1 className='mt-5'>We picked some <span className='text'>cool things</span> for you!
                    </h1>
                </div>
                <div className='col-8'>
                    <h5 className='products mb-3'>hot deals for you</h5>
                    <div className='row row-cols-1 row-cols-md-3 g-4'>
                        {
                            products.map(product => <Product
                                key={product.key}
                                product={product}
                            >
                            </Product>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstContent;