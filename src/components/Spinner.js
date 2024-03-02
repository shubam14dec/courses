import React from 'react';
import './Spinner.css';

const Spinner = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-y-2'>
      <div className='spinner'></div>
      <p className='font-semibold text-lg'>Loading...</p>
    </div>
  )
}

export default Spinner