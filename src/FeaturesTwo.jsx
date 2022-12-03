import React from 'react'
import ImageTwo from '../src/Assets/IMGTWO.svg'
import { BsArrowRight } from 'react-icons/bs'

const FeaturesTwo = () => {
  return (
    <section className='featurestwo md:mt-[93px] px-4 mt-[20px]'>
      <div className='container mx-auto max-w-[900px] flex flex-col md:flex-row lg:gap-[24px] lg:space-x-[164.33px]'>
        <div
          className='max-w-[311.67px]'
          data-aos='fade-right'
          data-aos-delay='500'
        >
          <img src={ImageTwo} alt='' />
        </div>
        <div className='max-w-[424px]'>
          <h1
            className='max-w-[379px] font-bold leading-[28px] text-[28px] lg:leading-[37px] lg:text-[28px] text-[#181818] mt-[42px]'
            data-aos='fade-down'
            data-aos-delay='600'
          >
            Your Job Posting is on Steroids
          </h1>
          <p
            className='max-w-[410px] max-h-[81px] text-[16px] font-medium leading-[27px] text-[#000C2D] mt-[24px] tracking-[0.01em]'
            data-aos='fade-down'
            data-aos-delay='700'
          >
            Gain brand authority and visibility with the help of the largest IT
            service ecosystem. Find customers who are looking for your solution
            right now!
          </p>
          <span
            className='flex items-center text-center text-[#4196B8] gap-2 lg:mt-[24px] text-[16px] leading-[28px] font-medium pb-4 pt-12'
            data-aos='fade-down'
            data-aos-delay='800'
          >
            <a href='signup' className='cursor-pointer'>
              Sign up now
            </a>
            <BsArrowRight className='cursor-pointer' />
          </span>
        </div>
      </div>
    </section>
  )
}

export default FeaturesTwo
