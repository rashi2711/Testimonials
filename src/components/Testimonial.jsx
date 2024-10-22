import React from 'react'

const Testimonial = (props) => {
  let reviews=props.reviews
  return (
    <div><Card reviews={reviews[0]}></Card></div>
  )
}

export default Testimonial