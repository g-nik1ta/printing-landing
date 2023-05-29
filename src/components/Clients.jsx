import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Clients = () => {
    const settings = {
        className: "clients-slider",
        infinite: true,
        slidesToShow: 1,
        speed: 500,
        rows: 2,
        slidesPerRow: 4,
        draggable: false,
    };

    const images = [
        'epicentr.png',
        'toyota.png',
        'in-cruises.png',
        'yatran.jpg',
        'ukr-telekom.png',
        'zolotoy-vek.png',
        'volkswagen.png',
        'privat-bank.jpg',

        'ukr-telekom.png',
        'zolotoy-vek.png',
        'volkswagen.png',
        'privat-bank.jpg',
        'epicentr.png',
        'toyota.png',
        'in-cruises.png',
        'yatran.jpg',
    ]

    return (
        <section className='row clients'>
            <span className='title'>Наши клиенты - наша гордость</span>
            <Slider {...settings}>
                {images.map(item => (
                    <img
                        className='item'
                        key={item}
                        src={require(`../assets/clients/${item}`)}
                        alt="img"
                    />
                ))}
            </Slider>
        </section>
    )
}

export default Clients;