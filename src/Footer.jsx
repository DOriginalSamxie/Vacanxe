import React from 'react'
import Logo from '../src/Assets/logo 1.svg'

const Footer = () => {
  return (
    <footer className='featurestwo bg-[#1D293F]  md:px-2 lg:px-0 max-w-[1900px] '>
      <div className='w-[250px] height-[250px] absolute bg-white rounded-[100%] mt-[-118px] ml-[-30px] z-0'>
        <img
          className='h-[30px] lg:h-[60px] relative m-auto mt-[55%]'
          src={Logo}
          alt='logo'
        />
      </div>
      <div className='container mx-auto flex md:items-center items-start  md:flex-row md:flex-nowrap flex-wrap flex-col px-5 lg:pl-[245px] '>
        <div className='max-w-[266px] flex-shrink-0 md:mx-0 mx-auto text-center lg:text-left lg:mt-[180px]'>
          <p className=' text-[16px] leading-[28px] font-medium max-w-[266px] text-[#8C97AC]'>
            Your ulitmate email solution to grow business and engaging with
            future customers and clients.
          </p>
          <button>Ask Question</button>
        </div>
        <div className='flex-grow flex flex-wrap lg:pl-[210px] md:mt-0 mt-10 lg:text-left lg:mt-[127px] '>
          <div className='lg:w-1/4 md:w-1/2 w-full '>
            <h2 className='text-[18px] leading-[32px] font-normal text-[#8C97AC]'>
              Community
            </h2>
            <nav className='list-none mb-10 text-[#E9F7FE]'>
              <li>For Talents</li>
              <li>For Comapnies</li>
              <li>Facebook</li>
              <li>FAQ</li>
            </nav>
          </div>
          <div className='lg:w-1/4 md:w-1/2 w-full '>
            <h2 className='text-[18px] leading-[32px] font-normal text-[#8C97AC]'>
              Community
            </h2>
            <nav className='list-none mb-10 text-[#E9F7FE]'>
              <li>For Talents</li>
              <li>For Comapnies</li>
              <li>Facebook</li>
              <li>FAQ</li>
            </nav>
          </div>
          <div className='lg:w-1/4 md:w-1/2 w-full '>
            <h2 className='text-[18px] leading-[32px] font-normal text-[#8C97AC]'>
              Community
            </h2>
            <nav className='list-none mb-10 text-[#E9F7FE]'>
              <li>For Talents</li>
              <li>For Comapnies</li>
              <li>Facebook</li>
              <li>FAQ</li>
            </nav>
          </div>
        </div>
      </div>
      <div class='border-t-[1px]  border-[#313D55] mx-auto container max-w-[1112px]'>
        <div className='flex'>
          <p>© Vacanxe 2022, All Rights Reserved</p>
          <div></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
