import React from 'react';

const Advantage = () => {
    const items1 = [
        'Качественная печать Современное высокотехнологическое оборудование.',
        'Доставка по всей Украине Удобная доставка по всей Украине.',
        'Более 25-ти лет опыта Наша Миссия - производство продукции европейского уровня для украинского потребителя.',
    ]

    const items2 = [
        'Традиционная оперативность  – возможность изготовления  "Сегодня на Сегодня".',
        'Индивидуальный подход к каждому  клиенту Все клиенты для нас важны!',
        'Лояльные цены Беспрецедентно гибкая система цен,  скидок и форм оплаты.',
    ]

    return (
        <section className='row advantage'>
            <span className='title'>Преимущества</span>
            <div className="items-box">
                {items1.map((item, index) => (
                    <div className="item" key={index}>
                        <img src={require(`../assets/advantage/block-${index + 1}.png`)} alt="img" />
                        <span>{item}</span>
                    </div>
                ))}
            </div>
            <div className="items-box">
                {items2.map((item, index) => (
                    <div className="item" key={index}>
                        <img src={require(`../assets/advantage/block-${index + 1}.png`)} alt="img" />
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Advantage;