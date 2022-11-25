import React from 'react';

const Product = (props) => {
    console.log(props.product);
   const {name,picture,price,discount}=props.product;
    return (
        <div className='col-4'>
            <img width='50%' src={picture} alt="" srcset="" />
            <div>
                <h6>{name}</h6>
                <div className='d-flex justify-content-between'>
                <p>${price}</p>
                <p className='text-danger'>-{discount} off</p>
                </div>
            </div>
        </div>
    );
};

export default Product;