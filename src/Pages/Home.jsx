import React from 'react'
import Hero from '../Components/Hero.jsx'
import Trusted from '../Components/Trusted.jsx'
import Pop from '../Components/Pop.jsx'
import Review from '../Components/Review.jsx'
import ReviewOverview from '../Components/ReviewOverview.jsx'
import Working from '../Components/Working.jsx'
import Form from '../Components/Form.jsx'


function Home() {
  return (
    <div>
      <Hero/>
      <Pop/>
      <Trusted/>
      <Review/>
      <Form/>
      <ReviewOverview/>
      <Working/>
    </div>

  )
}

export default Home