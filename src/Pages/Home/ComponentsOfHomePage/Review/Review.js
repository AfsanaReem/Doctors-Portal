import React from 'react';

const Review = ({ rev }) => {
    const { img, name, review, location } = rev;
    return (
        <div>
            <div className="card shadow-xl">
                <div className="card-body">
                    <p>{review}</p>
                    <div className="avatar mt-4">
                        <div className="w-16 rounded-full mr-3">
                            <img src={img} alt='' />
                        </div>
                        <div>
                            <h5>{name}</h5>
                            <h5>{location}</h5>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Review;