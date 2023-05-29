import React, { useRef } from 'react';
import './NavMenu.css';

const NavMenu = () => {
    const navMenuRef = useRef();
    const toggleActive = () => {
        document.querySelector('.sidebar-nav').classList.toggle('open');
        navMenuRef.current.classList.toggle("active");
    }

    return (
        <div
            className='navMenu'
            onClick={toggleActive}
            ref={navMenuRef}
        >
            <span></span>
        </div>
    )
}

export default NavMenu;