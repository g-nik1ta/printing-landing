import React from 'react';

const Portfolio = () => {
    const list = [
        [
            { title: '', img: 'block-1.jpg' },
            { title: 'Портфолио', img: 'block-2.jpg' },
            { title: '', img: 'block-3.jpg' },
        ],
        [
            { title: '', img: 'block-4.jpg' },
            { title: '', img: 'block-5.jpg' },
        ],
    ]

    return (
        <section className='row portfolio' id='portfolio'>
            {list.map((igmList, indexList) => (
                <div className='img-list' key={indexList}>
                    {igmList.map((item, index) => (
                        <div className='item' key={index}>
                            {
                                !!item.title &&
                                <span className='title'>{item.title}</span>
                            }
                            <img src={require(`../assets/portfolio/${item.img}`)} alt="img" />
                        </div>
                    ))}
                </div>
            ))}
        </section>
    )
}

export default Portfolio;