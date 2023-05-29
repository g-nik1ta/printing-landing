import React from 'react';
import Nav from './Nav';

const Footer = () => {
    return (
        <footer className='row'>
            <Nav/>
            <hr />
            <div className="wrapper">
                <span>Создание сайта: </span>
                <img src={require("../assets/footer/spekter.png")} alt="img" />
            </div>
        </footer>
    )
}

export default Footer;