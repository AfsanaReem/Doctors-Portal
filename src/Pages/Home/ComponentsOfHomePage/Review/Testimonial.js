import React from 'react';
import imgs from '../../../../assets/icons/quote.svg';
import p1 from '../../../../assets/images/people1.png';
import p2 from '../../../../assets/images/people2.png';
import p3 from '../../../../assets/images/people3.png';
import Review from './Review';
const Testimonial = () => {
    const reviewData = [
        {
            id: 1,
            name: 'person1',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content',
            img: p1,
            location: 'California'
        },
        {
            id: 2,
            name: 'person2',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content',
            img: p2,
            location: 'California'
        },
        {
            id: 3,
            name: 'person3',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content',
            img: p3,
            location: 'California'
        },
    ]
    return (
        <section className='mt-16 md:mx-10'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary bold-text'>Testimonial</h4>
                    <h5 className='text-3xl'>What our patients says</h5>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={imgs} alt=''></img>
                </figure>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    reviewData.map(rev => <Review
                        key={rev.id}
                        rev={rev}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;