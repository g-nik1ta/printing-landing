import React, { useState } from 'react';
import MySelect from './UI/MySelect/MySelect';

const SidebarNav = () => {
    const [lang, setLang] = useState('ru');

    const sortOptions = [
        { value: 'uk', name: 'UK' },
        { value: 'ru', name: 'RU' },
        { value: 'en', name: 'EN' },
    ]
    return (
        <div className='sidebar-nav'>
            <ul>
                <h1 className="title">Меню</h1>
                <li>
                    <a href='#about' className='item'>О нас</a>
                </li>
                <li>
                    <a href='#products' className='item'>Что печатаем</a>
                </li>
                <li>
                    <a href='#services' className='item'>Услуги</a>
                </li>
                <li>
                    <span className='item'>Партнерам</span>
                </li>
                <li>
                    <a href='#portfolio' className='item'>Портфолио</a>
                </li>
                <li>
                    <a href='#clients' className='item'>Клиенты</a>
                </li>
                <li>
                    <a href='#contacts' className='item'>Контакты</a>
                </li>
                <li>
                    <a href="tel:+380-11-223-3445" className='item telephone'>+380112233445</a>
                </li>
                <li>
                    <MySelect
                        value={(sortOptions.find(e => e.value === lang)).name}
                        onChange={selectedCategory => setLang(selectedCategory)}
                        options={sortOptions}
                    />
                </li>
            </ul>
        </div >
    )
}

export default SidebarNav;