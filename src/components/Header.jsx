import React from 'react';

const Header = () => {
    return (
        <header className='row'>
            <img src={require("../assets/header/features-printing.jpg")} alt="img" />
            <span className='aplication'>Заявка на расчёт</span>
            <div
                className="select-box"
                onClick={e => e.currentTarget.classList.toggle('visibleMsg')}
            >
                <i className="messager item"></i>
                <div className="dropdownMenu">
                    <a className='item viber' target='_blank' href="viber://add?number=380112233445"></a>
                    <a className='item telegram' target='_blank' href="https://t.me/spekterHR"></a>
                </div>
            </div>
        </header>
    )
}

export default Header;