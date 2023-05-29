import React from 'react';

const SidebarNav = () => {
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
            </ul>
        </div >
    )
}

export default SidebarNav;