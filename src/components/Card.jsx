import React from 'react'
import { FaQuoteLeft,FaQuoteRight,FaGem } from 'react-icons/fa';

const Card = (props) => {
  let review =props.review;
  return (
    <div>
      <div>
        <img src={review.image}/>
      </div>
      <div>
        <p>{review.name}</p>
      </div>
      <div>
        <p>{review.company}</p>
      </div>
     
      <div>
        <FaQuoteLeft />
        </div>
        <div>
        <p>{review.text}</p>
        </div>
        <div>
        <FaQuoteRight />
        </div>
       
 
    </div>
  )
}

export default Card