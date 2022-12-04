import React from 'react'
import Location from '../src/Assets/Location.svg'

const FeaturesFour = () => {
  return (
    <section className='featurestwo md:mt-[89.33px]  mt-[20px] bg-[#F4FBFF] px-12 md:px-2 lg:px-0'>
      <div>
        <form className=' container mx-auto max-w-[1539px] flex flex-col lg:flex-row xl:pl-[272px] space-x-[98px] lg:px-4'>
          <div className='max-w-[575px]'>
            <h1 className='max-w-[450px] md:pt-[64px] text-[#4B4C4E] lg:leading-[47px] lg:text-[36px] font-bold '>
              <span className='border-b-[5px] border-b-[#4EB9E3]'>Build</span>{' '}
              Your Dream Team!
            </h1>
            <p className=' mt-[31px] font-normal text-[16px] leading-[26px] text-[#1D272E]'>
              Start your team development with a free consultation. Fill out the
              form and a Vacanxe representative will contact you.
            </p>
            <div className='mt-[73px]'>
              <div className='pb-4'>
                <label
                  className='block text-[14px] font-medium leading-22px pb-[4px]'
                  htmlFor='name'
                >
                  Your Name
                </label>
                <input
                  className='border-[1px] border-[#C8D0DA] rounded-[10px] py-[14px] w-full text-[16px] px-[24px]'
                  type='text'
                  name='name'
                  placeholder='Enter Your Name'
                />
                <label
                  className='block text-[14px] font-medium leading-22px mt-[20px] pb-[4px]'
                  htmlFor='email'
                >
                  Your Email
                </label>
                <input
                  className='border-[1px] border-[#C8D0DA] rounded-[10px] py-[14px] w-full text-[16px] px-[24px]'
                  type='text'
                  name='email'
                  placeholder='Enter Your Email'
                />
                <label
                  className='block text-[14px] font-medium leading-22px mt-[20px] pb-[4px]'
                  htmlFor='number'
                >
                  Enter your phone number
                </label>
                <input
                  className='border-[1px] border-[#C8D0DA] rounded-[10px] py-[14px] w-full text-[16px] px-[24px]'
                  type='text'
                  name='email'
                  placeholder='Enter your phone number'
                />
                <label
                  className='block text-[14px] font-medium leading-22px mt-[20px] pb-[4px]'
                  htmlFor='company'
                >
                  Your company name
                </label>
                <input
                  className='border-[1px] border-[#C8D0DA] rounded-[10px] py-[14px] w-full text-[16px] px-[24px]'
                  type='text'
                  name='message'
                  placeholder='Enter your company name'
                />
                <label
                  className='block text-[14px] font-medium leading-22px mt-[20px] pb-[4px]'
                  htmlFor='message'
                >
                  Message
                </label>
                <input
                  className='border-[1px] border-[#C8D0DA] rounded-[10px] space-y-0 w-full text-[16px] px-[24px] h-[203px]'
                  type='text'
                  name='message'
                  placeholder='Type here...'
                />
                <button className='mt-[19px] btn bg-[#4EB9E3] text-white text-[14px] font-bold leading-[16px]'>
                  Consult with us
                </button>
              </div>
            </div>
          </div>
          <div className=' w-1/2'>
            <h2 className='lg:pt-[293px]'>Contact us</h2>
            <div className='  '>
              <p className='flex items-center gap-[20px]'>
                <img src={Location} />
                4517 Washington Ave. Manchester, Kentucky 39495
              </p>
            </div>
          </div>
        </form>
      </div>
      {/* <div className=' container mx-auto max-w-[1539px] flex flex-col md:flex-row lg:pl-[272px]'>
        <div className='max-w-[575px]'>
          <h1 className='max-w-[450px] md:pt-[64px] text-[#4B4C4E] lg:leading-[47px] lg:text-[36px] font-bold '>
            <span className='border-b-[5px] border-b-[#4EB9E3]'>Build</span>{' '}
            Your Dream Team!
          </h1>
          <p className=' mt-[31px] font-normal text-[16px] leading-[26px] text-[#1D272E]'>
            Start your team development with a free consultation. Fill out the
            form and a Vacanxe representative will contact you.
          </p>
        </div>
        <div className='mt-6'>
          <form>
            <label htmlFor=''>Your name</label>
            <input type='text' />
          </form>
          <div></div>
        </div>
      </div> */}
    </section>
  )
}

export default FeaturesFour
