import React from 'react';
import icon1 from '../../assets/icons/clock.svg'
import icon2 from '../../assets/icons/marker.svg'
import icon3 from '../../assets/icons/phone.svg'
import Card from './Card';
const Cards = () => {
    const cardData = [
        {
            id: 1,
            name: "Opening Hours",
            details: "Open from 9am to 5pm",
            icon: icon1,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: "Our location",
            details: "Open from 9am to 5pm",
            icon: icon2,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: "Contact Us",
            details: "Open from 9am to 5pm",
            icon: icon3,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                cardData.map(card => <Card
                    key={card.id}
                    card={card}></Card>)
            }
        </div>
    );
};

export default Cards;