import React, { useState } from 'react';
import MySelect from './UI/MySelect/MySelect';
import Logo from './UI/Logo/Logo';

const Nav = () => {
    const [lang, setLang] = useState('uk');

    const sortOptions = [
        { value: 'ru', name: 'RU' },
        { value: 'uk', name: 'UK' },
        { value: 'en', name: 'EN' },
    ]

    return (
        <nav className='row'>
            <Logo />
            <span className='item'>О нас</span>
            <span className='item'>Что печатаем</span>
            <span className='item'>Услуги</span>
            <span className='item'>Партнерам</span>
            <span className='item'>Портфолио</span>
            <span className='item'>Клиенты</span>
            <span className='item'>Контакты</span>
            <a href="tel:+380-11-223-3445" className='item telephone'>+380112233445</a>
            <MySelect
                value={(sortOptions.find(e => e.value === lang)).name}
                onChange={selectedCategory => setLang(selectedCategory)}
                options={sortOptions}
            />
        </nav>
    )
}

export default Nav;