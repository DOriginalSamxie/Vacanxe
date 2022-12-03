import React from 'react'
import PartnerLogo from '../src/Assets/partnerhero.svg'

const Hero = () => {
  return (
    <section className='hero mt-[40px] relative w-full'>
      <div className='container mx-auto '>
        <div className='flex flex-col items-center  lg:gap-[7px] '>
          <h1
            className='max-w-[620px] mt-[30px] md:text-[25px] lg:mt-[95px] font-bold lg:text-[44px] lg:leading-[65px] text-white text-center'
            data-aos='fade-down'
            data-aos-delay='500'
          >
            Find the right <span className='text-[#FFAE1B]'>talents</span> to
            fuel your business growth
          </h1>
          <p
            className='font-medium  leading-[30px] text-center text-[#fff] text-[16px]  max-w-[605px]'
            data-aos='fade-down'
            data-aos-delay='600'
          >
            Join a vibrant community of MSPs to forge long-lasting relationships
            with partners that help you create excellent customer experiences
          </p>
        </div>
        <div className=' lg:flex px-8 max-w-[350px] absolute md:left-[30%] lg:left-[70.7%] lg:right-[ 6.97%] lg:top-[ 6.33%] lg:bottom-[18%] '>
          <img
            src={PartnerLogo}
            className=''
            data-aos='fade-right'
            data-aos-delay='700'
            alt=''
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
