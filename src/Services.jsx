import React from 'react'

const Services = () => {
  return (
    <section className='container mx-auto'>
      <div className=' mt-[40px]  space-x-4 mx-auto w-max'>
        <button
          className='btn text-[#4196B8] border-[#E9FBFF] bg-[#E9FBFF] hover:bg-[#4196B8]/75'
          data-aos='fade-down'
          data-aos-delay='500'
        >
          Core Services
        </button>
        <button
          className='btn text-[#949494] border-[#AFAFAF] bg-[#afafaf]/20 hover:bg-[#949494]/75'
          data-aos='fade-down'
          data-aos-delay='500'
        >
          Better Recruitment
        </button>
      </div>
    </section>
  )
}

export default Services
