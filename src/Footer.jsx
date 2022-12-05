import React from 'react'
import Logo from '../src/Assets/logo 1.svg'
import ObjectOne from '../src/Assets/Object.svg'
import ObjectTwo from '../src/Assets/Objecttwo.svg'
import ObjectThree from '../src/Assets/Objectthree.svg'

const Footer = () => {
  return (
    <footer className='featurestwo bg-[#1D293F]  md:px-2 lg:px-12 absolute z-[-4] w-full'>
      <div className='lg:w-[250px] lg:h-[250px] w-[175px] h-[175px] absolute bg-white rounded-[50%] mt-[-120px] left-[-30px] pt-[134px] z-[-2]'>
        <img
          className='h-[30px] lg:h-[60px] relative m-auto '
          src={Logo}
          alt='logo'
        />
      </div>
      <div className='container mx-auto flex md:items-center items-start  md:flex-row md:flex-nowrap flex-wrap flex-col px-5  '>
        <div
          className=' flex-shrink-0 md:mx-0 mx-auto text-center lg:text-left  lg:mt-[180px] pr-[60px] lg:pr-[211px]
        '
        >
          <p className=' text-[16px] leading-[28px] font-medium max-w-[266px] text-[#8C97AC] pt-[30px] mt-[20px]'>
            Your ulitmate email solution to grow business and engaging with
            future customers and clients.
          </p>
          <button className='px-[8px] py-[13px] text-[#E9F7FE] bg-[#00B6FF] text-[13px] rounded-[10px] mt-[28px]'>
            Ask Question
          </button>
        </div>
        <div className='flex-grow flex flex-wrap  md:mt-[30px] mt-10 lg:text-left lg:mt-[127px]  '>
          <div className='lg:w-1/3 md:w-1/2  '>
            <h2 className='text-[18px] leading-[32px] font-normal text-[#8C97AC]'>
              Community
            </h2>
            <nav className='list-none mb-10 text-[#E9F7FE] text-[16px]'>
              <li>For Talents</li>
              <li>For Comapnies</li>
              <li>Facebook Group</li>
              <li>FAQ</li>
            </nav>
          </div>
          <div className='lg:w-1/3 md:w-1/2 '>
            <h2 className='text-[18px] leading-[32px] font-normal text-[#8C97AC]'>
              About us
            </h2>
            <nav className='list-none mb-10 text-[#E9F7FE]'>
              <li>Meet the Team</li>
              <li>Our Story</li>
              <li>Career</li>
            </nav>
          </div>
          <div className='lg:w-1/3 md:w-1/2  '>
            <h2 className='text-[18px] leading-[32px] font-normal text-[#8C97AC]'>
              Contacts
            </h2>
            <p className=' mb-10 text-[#E9F7FE]'>
              Feel free to get in touch with us via phone or send us a message.
            </p>
          </div>
        </div>
      </div>
      <div class='border-t-[1px]  border-[#313D55] mx-auto mt-[124px] container max-w-[1112px]'>
        <div className='flex py-[22px] justify-between items-center'>
          <p className='text-[13px] text-[#8C97AC] leading-[28px] font-normal italic'>
            © Vacanxe 2022, All Rights Reserved
          </p>
          <div className='flex gap-[18.67px]'>
            <img src={ObjectOne} alt='' className='w-[16px] h-[16px]' />
            <img src={ObjectTwo} alt='' className='w-[16px] h-[16px]' />
            <img src={ObjectThree} alt='' className='w-[16px] h-[16px]' />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
