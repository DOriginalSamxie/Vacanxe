import React from 'react'
import Location from '../src/Assets/Location.svg'
import Calling from '../src/Assets/Calling.svg'
import Message from '../src/Assets/Message.svg'
import Facebook from '../src/Assets/facebook.svg'
import Twitter from '../src/Assets/twitter.svg'
import Linkedin from '../src/Assets/linkedin.svg'
import Instagram from '../src/Assets/instagram.svg'

const FeaturesFour = () => {
  return (
    <section className='featurestwo md:mt-[89.33px]  mt-[20px] bg-[#F4FBFF] px-12 md:px-2 lg:px-0 pb-[140px]'>
      <div>
        <form className=' container mx-auto max-w-[1539px]  flex flex-col lg:flex-row xl:pl-[272px] lg:space-x-[98px] lg:px-4'>
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
          <div className=' '>
            <h2 className='lg:pt-[293px] pb-[17px]'>Contact us</h2>
            <div className='  '>
              <p className='flex items-center gap-[20px] text-[16px] leading-[26px] pb-[25px]'>
                <img src={Location} alt='location' />
                4517 Washington Ave. Manchester, Kentucky 39495
              </p>
            </div>
            <div className='  '>
              <ul className='flex gap-[20px] pb-[25px]'>
                <div>
                  <img src={Calling} alt='calling' />
                </div>
                <div>
                  <li>(505) 555-0119</li>
                  <li>(505) 555-0120</li>
                  <li>(505) 555-0125</li>
                </div>
              </ul>
            </div>
            <div>
              <p className='flex gap-[20px] pb-[51px]'>
                <img src={Message} alt='message' />
                consult@vacanxe.com
              </p>
            </div>
            <div>
              <h2 className='pb-[15px]'>Follow us:</h2>
              <div className='flex gap-[20px]'>
                <img src={Facebook} alt='facebook' />
                <img src={Twitter} alt='twiiter' />
                <img src={Linkedin} alt='linkedin' />
                <img src={Instagram} alt='instagram' />
              </div>
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
