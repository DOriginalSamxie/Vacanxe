import React from 'react'
import { useState } from 'react'
import Logo from '../src/Assets/logo 1.svg'
import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri'

const Header = () => {
  const [navMobile, setNavMobile] = useState(true)
  const [isActive, setIsActive] = useState(false)
  const handleNav = () => {
    setNavMobile(!navMobile)
  }
  return (
    <header
      className={`${
        isActive ? 'bg-neutral-500 py-[16px]' : 'bg-transparent py-[20px] '
      }relative max-w-[1520px] z-30 container mx-auto   transition-all duration-300 mt-[33px] pl-[65px]`}
    >
      <nav className=' flex justify-between items-center'>
        <a href='/'>
          <img className='h-[30px] lg:h-[60px]' src={Logo} alt='logo' />
        </a>
        <div>
          <ul className='hidden lg:flex justify-center items-center gap-x-[24px]'>
            <li>
              {' '}
              <a
                href='post'
                className='font-medium text-[18px] text-[#2E2E2E] leading-[21px] hover:text-[#2E2E2E]/75'
              >
                Post Job
              </a>
            </li>
            <li>
              <a
                href='Program'
                className='font-medium text-[18px] text-[#2E2E2E] leading-[21px] hover:text-[#2E2E2E]/75'
              >
                Program
              </a>
            </li>
            <li>
              <a
                href='Services'
                className='border-b-[3px] border-[#4EB9E3] font-medium text-[18px] text-[#2E2E2E] leading-[21px] hover:text-[#2E2E2E]/75'
              >
                Services
              </a>
            </li>
            <li>
              <a
                href='Price'
                className='font-medium text-[18px] text-[#2E2E2E] leading-[21px] hover:text-[#2E2E2E]/75'
              >
                Price
              </a>
            </li>
          </ul>
        </div>
        <div className='hidden lg:flex justify-end items-center'>
          <div className='mr-[47px] text-[#4196B8] cursor-pointer hover:text-[#4196B8]/75'>
            <a href='login'>Login</a>
          </div>
          <div className='mr-[97px] text-[#4196B8] cursor-pointer hover:text-[#4196B8]/75'>
            <a href='signup'>Sign Up</a>
          </div>
        </div>
        <div onClick={handleNav} className='lg:hidden absolute right-4'>
          {navMobile ? (
            <RiMenu4Fill className='text-primary-200 text-2xl cursor-pointer' />
          ) : (
            <RiCloseFill className='text-primary-200 text-2xl cursor-pointer' />
          )}
        </div>
        <div
          className={
            navMobile
              ? 'fixed left-[-100%]'
              : 'lg:hidden w-full bg-neutral-500 fixed top-0 left-0 right-0 -bottom-12 -z-10 overflow-hidden transition-all '
          }
        >
          <ul className='w-full h-full flex flex-col justify-center items-center gap-y-8'>
            <li className='cursor-pointer'>
              <a
                className='text-white cursor-pointer hover:text-[#4EB9E3]'
                href='job'
              >
                Post Job
              </a>
            </li>
            <li>
              <a
                className='text-white cursor-pointer hover:text-[#4EB9E3]'
                href='program'
              >
                Program
              </a>
            </li>
            <li>
              <a
                className='text-white cursor-pointer hover:text-[#4EB9E3]'
                href='services'
              >
                Services
              </a>
            </li>
            <li>
              <a
                className='text-white cursor-pointer hover:text-[#4EB9E3]'
                href='price'
              >
                Price
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
