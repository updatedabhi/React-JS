import React from 'react'

function Contact(porbs) {
  return (
    <div>
      <h1>My name is {porbs.namee}</h1>
      <p>Age: {porbs.agee}</p>
      <p>Contact: {porbs.phonee}</p>
      <p>Course: {porbs.coursee}</p>
    </div>
  )
}

export default Contact
