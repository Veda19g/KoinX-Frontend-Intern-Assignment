import React from 'react';
import promotionImage from "../images/promotion.jpg"
const Promotioncard = () => {
  return (
    <div className='flex flex-col p-4 rounded-lg justify-center items-center  md:w-96 md:p-8 md:mr-14 bg-blue-700  md:justify-center md:items-center md:rounded-2xl'>
      <div className='text-2xl text-center text-white font-semibold tracking-wide'>Get Started with KoinX for FREE</div>
      <div className='text-sm mt-5 text-center tracking-wide text-white font-semibold leading-6 '>With our range of features that you can equip for free,koinX allows you to be more educated and aware of your tax reports</div>
      <div className='mt-5'><img src={promotionImage} alt='' className=' md:h-18 h-16 ' /></div>
      <div><button className='mt-10 p-2 rounded-md font-semibold bg-white'>Get Started for Free →</button></div>
    </div>
  );
  }

export default Promotioncard;