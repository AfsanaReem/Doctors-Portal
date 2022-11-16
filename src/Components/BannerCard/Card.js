import React from 'react';

const Card = ({ card }) => {
    const { name, details, icon, bgClass } = card;
    return (
        <div>
            <div className={`card card-side bg-base-100 shadow-xl ${bgClass} text-white`}>
                <figure className='ml-8'><img src={icon} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;