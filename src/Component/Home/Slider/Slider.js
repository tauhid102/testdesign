import React from 'react';
import image from '../../../image/image.png'
const Slider = () => {
    return (
        <div className='container mt-5'>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={image} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={image} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={image} class="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;