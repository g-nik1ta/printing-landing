import React from 'react';

const Products = () => {
    const items1 = [
        'Офсетная или цифровая печать',
        'Печать на простой бумаге  или дизайнерском картоне',
        'Доп. услуги: дизайн  ламинация, скругление',
        'Доставка курьером  или самовывоз',
        'уф-лак сплошной и выборочный',
        'тиснение фольгой',
        'высечка нестанадартной  формы',
    ]

    const items2 = [
        'ламинация матовая и  глянцевая',
        'уф-лак сплошной и выборочный',
        'тиснение фольгой',
        'высечка нестанадартной  формы',
        'уф-лак сплошной и выборочный',
        'тиснение фольгой',
        'высечка нестанадартной  формы',
    ]

    return (
        <section className='row products'>
            <div className="list-container">
                {items1.map((item, index) => (
                    <span className='item' key={index}>{item}</span>
                ))}
            </div>
            <span className='title'>Наша продукция</span>
            <div className="list-container">
                {items2.map((item, index) => (
                    <span className='item' key={index}>{item}</span>
                ))}
            </div>
        </section>
    )
}

export default Products;