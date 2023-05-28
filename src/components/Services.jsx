import React from 'react';

const Services = () => {
    const list = [
        [
            { title: 'Офсетная или цифровая печать', img: 'block-1.jpg' },
            { title: 'Заказать просчёт', img: 'block-2.jpg' },
            { title: 'Доп. услуги: дизайн  ламинация, скругление', img: 'block-3.jpg' },
        ],
        [
            { title: 'Доставка курьером  или самовывоз', img: 'block-4.jpg' },
            { title: 'Печать на простой бумаге  или дизайнерском картоне', img: 'block-5.jpg' },
        ],
        [
            { title: 'ламинация матовая и  глянцевая', img: 'block-6.jpg' },
            { title: 'Дополнительные услуги', img: 'block-7.jpg' },
            { title: 'уф-лак сплошной и выборочный', img: 'block-8.jpg' },
        ],
        [
            { title: 'тиснение фольгой', img: 'block-9.jpg' },
            { title: 'высечка нестанадартной формы', img: 'block-10.jpg' },
        ],
    ]

    return (
        <section className='row services'>
            {list.map((igmList, indexList) => (
                <div className='img-list' key={indexList}>
                    {igmList.map((item, index) => (
                        <div className='item' key={index}>
                            {indexList === 0 && index === 1 &&
                                <span className='subtitle'>Услуги</span>
                            }
                            <span className={
                                indexList === 0 && index === 1
                                    ?
                                    'title group-1'
                                    :
                                    indexList !== 0 && indexList % 2 === 0 && index === 1
                                        ?
                                        'title group-2'
                                        :
                                        'title'
                            }>{item.title}</span>
                            <img src={require(`../assets/services/${item.img}`)} alt="img" />
                        </div>
                    ))}
                </div>
            ))}
        </section>
    )
}

export default Services;