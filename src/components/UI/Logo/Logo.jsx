import React from 'react';
import cls from './Logo.module.css';

const Logo = () => {
    return (
        <a href='' className={cls.logo}>
            <span className={cls.title}>Logo</span>
        </a>
    )
}

export default Logo;