import React from 'react';
import Card from './Card';

const Testimonial = ({ reviews }) => {
  return (
    <div className='flex flex-wrap justify-center mt-5'>
      {reviews.length > 0 && <Card review={reviews[0]} />}
    </div>
  );
};

export default Testimonial;
