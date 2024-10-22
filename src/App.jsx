import React from 'react'
import Testimonial from './components/Testimonial'
import Card from './components/Card'
import review from './data'

const App = () => {
  return (
    <div>
      <div>
        <h1>Our Testimonials</h1>
        <div></div>
        <Testimonial review={review}/>
      </div>
    </div>
  )
}

export default App