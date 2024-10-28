import React from 'react';
import { FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Card = ({ review }) => {
  return (
    <div className='w-[600px]  bg-white p-8 rounded-lg relative overflow-visible flex flex-col md:relative'>
      
      <div className='absolute -top-12 left-4 z-[10]'>
      <div className='w-24 h-24 rounded-full bg-purple-500 absolute top-[-2px] z-[-10] 
        left-[10px] object-cover'></div>
        <img
          src={review.image}
          alt={review.name}
          className='w-24 h-24 rounded-full z-[25] relative object-cover'
        />
       
      </div>

      <div className='mt-1 ml-2'>
        <h2 className='text-2xl font-bold'>{review.name}</h2>
        <p className='text-sm text-purple-400 uppercase'>{review.company}</p>
      </div>

      <div className='mt-10 text-gray-700 flex flex-col items-center'>
        <FaQuoteLeft className='text-purple-400 text-xl mb-2' />
        <p className='text-center'>{review.text}</p>
        <FaQuoteRight className='text-purple-400 text-xl mt-2' />
      </div>
    </div>
  );
};

export default Card;
