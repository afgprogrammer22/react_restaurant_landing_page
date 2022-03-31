import React from 'react';

const NewsLetter = () => {
  return (
    <div className='flex items-center justify-center font-poppins z-1000'>
      <div className='flex flex-col items-center justify-center bg-white rounded-[47px] py-6 px-32 border-[1px] border-[#EA0000]'>
        <h4 className='text-[#2A333E] font-bold text-xl leading-7 text-center tracking-[0.02em] mb-2'>
          Get our special discounts
        </h4>
        <p className='text-sm text-[#2A333E] text-center w-3/4 mb-2'>
          Input email address and complete your subscription to get our special
          offer.
        </p>
        <div className='flex items-center p-2 rounded-[47px] border-[1px] border-[#EA0000] w-3/4'>
            <input type="text" className='w-full border-none outline-none px-4 rounded-full' placeholder='shakir260@gmail.com' />
            <button className='text-sm px-5 py-2.5 rounded-[47px] text-white bg-[#EA0000]'>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
