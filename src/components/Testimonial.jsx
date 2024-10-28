import React, { useState } from 'react';
import Card from './Card';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Testimonial = ({ reviews }) => {
  const [index, setIndex] = useState(0)
  function leftShift(){
    if(index-1<0){
      setIndex(reviews.length-1)
    }else{
      setIndex(index-1)
    }

  }
  function rightShift(){
    if(index+1>=reviews.length){
      setIndex(0)
    } else{
      setIndex(index+1)
    }
  }
  function surpriseHandler(){
    let randomIndex = Math.floor(Math.random()*reviews.length);
    setIndex(randomIndex);
  }
  return (
    <div className="flex flex-col items-center justify-center  bg-white">

      <Card review={reviews[index]} />

      <div className="mt-1 flex gap-4">
        <button onClick={leftShift} className=" text-purple-700 p-3 rounded-full">
          <FiChevronLeft size={24} />
        </button>
        <button onClick={rightShift} className=" text-purple-700 p-3 rounded-full ">
          <FiChevronRight size={24} />
        </button>
      </div>

      <div className="mb-4">
        <button onClick={surpriseHandler} className="bg-purple-400 text-white px-8 py-2 rounded-lg hover:bg-purple-700 transition duration-300">
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
