import React from 'react'

// Styles
import './AccordionLoader.scss';

/**
 * This is the AccordionLoader component a placeholder
 * when no data has been loaded for the AccordionContainer
 */
function AccordionLoader() {
  return (
    <div className='loader__container' >
      <div className='loader__bar'>
        <div className='loader__barSecondary' />
      </div>
      <div className='loader__bar'>
        <div className='loader__barSecondary' />
      </div>
      <div className='loader__bar'>
        <div className='loader__barSecondary' />
      </div>
      <div className='loader__bar'>
        <div className='loader__barSecondary' />
      </div>
      <div className='loader__bar'>
        <div className='loader__barSecondary' />
      </div>
    </div>
  );
}

export default AccordionLoader;