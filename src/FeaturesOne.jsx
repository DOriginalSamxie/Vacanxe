import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import ImageOne from '../src/Assets/IMG.svg'

const FeaturesOne = () => {
  return (
    <section className='md:mt-[115px] px-4'>
      <div className='container mx-auto max-w-[859px] flex flex-col md:flex-row lg:gap-[24px] lg:space-x-[125px]'>
        <div className=''>
          <h1
            className='featuresone max-w-[379px] font-bold leading-[20px] text-[22px] lg:leading-[37px] lg:text-[28px] text-[#181818] mt-[42px]'
            data-aos='fade-down'
            data-aos-delay='200'
          >
            Get The best version of young talents
          </h1>
          <p
            className='max-w-[410px] max-h-[81px] text-[16px] font-medium leading-[27px] text-[#000C2D] mt-[24px] tracking-[0.01em]'
            data-aos='fade-down'
            data-aos-delay='300'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
          </p>
          <span
            className='flex items-center text-center text-[#4196B8] gap-2 lg:mt-[24px] text-[16px] leading-[28px] font-medium pb-4 pt-8'
            data-aos='fade-down'
            data-aos-delay='400'
          >
            <a href='signup' className='cursor-pointer'>
              Sign up now
            </a>
            <BsArrowRight className='cursor-pointer' />
          </span>
        </div>
        <div className='relative' data-aos='fade-right' data-aos-delay='500'>
          <span className='hidden lg:flex items-center text-center text-[#4196B8] gap-2 lg:mt-[24px] text-[16px] leading-[28px] font-medium absolute left-[155px] top-[-50px]'>
            Sign up now <BsArrowRight className='w-[24px] h-[24px]' />
          </span>
          <img src={ImageOne} alt='' />
        </div>
      </div>
    </section>
  )
}

export default FeaturesOne
