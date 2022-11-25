import React from 'react';
import '../../Style/style.css'
const Header = () => {
    return (
        <div className='container'>
            <div className='d-flex justify-content-between border-bottom'>
                <h1><strong>shop</strong>cart</h1>
                <div className='d-flex align-items-center'>
                    <i class="fa-solid fa-user"></i>
                    <p className='pt-3 '>Sign In</p>
                </div>
            </div>
            <div className='d-flex justify-content-between mt-3'>
                <div className='d-flex icon'>
                    <i class="fa-solid fa-location-dot"></i>
                    <p>Dhaka, 1212</p>
                    
                </div>
                <div class="search">
                   <input type='text' placeholder='Search'></input>
                </div>
            </div>
        </div>
    );
};

export default Header;