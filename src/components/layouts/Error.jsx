import React from 'react'
import bg from "../../assets/images/error-bg.png"
import Images from '../utils/Images'

const Error = () => {
  return (
    <section className='h-screen'>
      <Images src={bg} alt='img' className=""/>
    </section>
  )
}

export default Error