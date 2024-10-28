import React from 'react';
import Testimonial from './components/Testimonial';
import { review } from './data'; 

const App = () => {
  return (
    <div className='flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200'>
        <div className='text-center'>
      <h1 className='text-4xl font-bold ml-20'>Our Testimonials</h1>
      <div className='bg-violet-400 w-[28%] h-[4px] mt-1 mx-auto mr-40 mb-2'></div>
      <Testimonial reviews={review} />
    </div>
    </div>
  );
};

export default App;
