import React from 'react'
import Contact from './Contact'

function Home(porbs) {
  return (
    <div>
      <h1>Hello Welcome!</h1>
      <p>We are learning react js.</p>
      <Contact namee = {porbs.name} agee = {porbs.age} phonee = {porbs.phone} coursee = {porbs.course}/>
    </div>
  )
}

export default Home
