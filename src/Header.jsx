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
                className='font-medium text-[18px] text-[#2E2E2E] leading-[21px]'
              >
                Post Job
              </a>
            </li>
            <li>
              <a href='Program'>Program</a>
            </li>
            <li>
              <a href='Services' className='border-b-[3px] border-[#4EB9E3]'>
                Services
              </a>
            </li>
            <li>Price</li>
          </ul>
        </div>
        <div className='hidden lg:flex justify-end items-center'>
          <div className='mr-[47px]'>Login</div>
          <div className='mr-[97px]'>Sign Up</div>
        </div>
        <div onClick={handleNav} className='lg:hidden absolute right-4'>
          {navMobile ? (
            <RiMenu4Fill className='text-primary-200 text-2xl cursor-pointer' />
          ) : (
            <RiCloseFill className='text-primary-200 text-2xl cursor pointer' />
          )}
        </div>
        <div
          className={
            navMobile
              ? 'fixed left-[-100%]'
              : 'lg:hidden w-full bg-neutral-500 fixed top-0 left-0 right-0 -bottom-12 -z-10 overflow-hidden transition-all '
          }
        ></div>
      </nav>
    </header>
  )
}

export default Header
