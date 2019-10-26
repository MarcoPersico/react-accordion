import React from 'react'

// Styles
import './AccordionLoader.scss';

const AccordionLoader = () => (
  <div className='loader__container' > 
    <div className='loader__bar'>
      <div className='loader__barSecondary'/>
    </div>
    <div className='loader__bar'>
      <div className='loader__barSecondary'/>
    </div>
    <div className='loader__bar'>
      <div className='loader__barSecondary'/>
    </div>
    <div className='loader__bar'>
      <div className='loader__barSecondary'/>
    </div>
  </div>
)

export default AccordionLoader;