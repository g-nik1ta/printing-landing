import React from 'react';

const Contacts = () => {
    return (
        <section className='row contacts' id='contacts'>
            <div className="info-box">
                <span className="title">Контакты</span>
                <p>Адрес: 12542, Украина, г. Киев ул. Шевченка, 1</p>
                <p>тел.: + 38 (011) 223 34 45</p>
                <p>По вопросам сотрудничества с прессой: digital@test.com</p>
                <p>Booking</p>
                <p>тел.: + 38 (011) 223 34 45</p>
                <p>test.com</p>
                <p>Конференц-сервис: conference@test</p>
            </div>
            <iframe
                className="map-frame"
                title="Inline Frame"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1386.8823374701083!2d30.439760107685856!3d50.38959422684213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c910fd12f7bf%3A0x35349609aaeb07a2!2z0YPQuy4g0KjQtdCy0YfQtdC90LrQviwgMSwg0JrQuNC10LIsIDAyMDAw!5e1!3m2!1sru!2sua!4v1685376629576!5m2!1sru!2sua"
            ></iframe>
        </section>
    )
}

export default Contacts;