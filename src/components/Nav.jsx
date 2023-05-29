import React, { useState } from 'react';
import MySelect from './UI/MySelect/MySelect';
import Logo from './UI/Logo/Logo';
import NavMenu from './UI/NavMenu/NavMenu';

const Nav = () => {
    const [lang, setLang] = useState('ru');

    const sortOptions = [
        { value: 'uk', name: 'UK' },
        { value: 'ru', name: 'RU' },
        { value: 'en', name: 'EN' },
    ]

    return (
        <nav className='row'>
            <Logo />
            <a href='#about' className='item'>О нас</a>
            <a href='#products' className='item'>Что печатаем</a>
            <a href='#services' className='item'>Услуги</a>
            <span className='item'>Партнерам</span>
            <a href='#portfolio' className='item'>Портфолио</a>
            <a href='#clients' className='item'>Клиенты</a>
            <a href='#contacts' className='item'>Контакты</a>
            <a href="tel:+380-11-223-3445" className='item telephone'>+380112233445</a>
            <NavMenu/>
            <MySelect
                value={(sortOptions.find(e => e.value === lang)).name}
                onChange={selectedCategory => setLang(selectedCategory)}
                options={sortOptions}
            />
        </nav>
    )
}

export default Nav;