import Image from 'next/image'
import React from 'react'
import { FBImg, IGImg, LogoImg } from '../../../public'

const Footer = () => {
  return (
    <section className='footer'>
      <div className='p-10 mt-12'>
        <div className='flex justify-between mt-5 pl-10 pr-10'>
          <div>
            <Image src={LogoImg} />
            <p className='mt-5'>Is the best place to review a book</p>
          </div>
          <div className='flex menu'>
            <ul className='mr-52'>
              <li><p className='mb-5'>Navigation</p></li>
              <li className='mb-3'><a href='#'>Home</a></li>
              <li className='mb-3'><a href='#'>Bestseller</a></li>
              <li className='mb-3'><a href='#'>Category</a></li>
              <li className='mb-3'><a href='#'>Contact</a></li>
            </ul>
            <ul className='mr-20'>
              <li><p className='mb-5'>Company</p></li>
              <li className='mb-3'><a href='#'>admin@baca.web</a></li>
              <li className='mb-3'><a href='#'>Jl. Jalan No. 0</a></li>
              <li className='mb-3'><a href='#'>Cirebon</a></li>
            </ul>
          </div>
        </div>
        <div className='flex  justify-between items-center mt-5 pl-10 pr-10'>
          <p>@ 2024 Book Web.</p>
          <div className='flex'>
            <Image src={IGImg} className='mr-5' />
            <Image src={FBImg} className='mr-32' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer