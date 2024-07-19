import Image from 'next/image'
import React from 'react'
import { Author1, Author2, Author3, Author4, Cover1, Cover2, Cover3, Cover4, Cover5, Cover6, Cover7, Cover8, StarOFF, StarON } from '../../../public'

const Latest = () => {
  return (
    <section className='popular'>
      <div className='flex justify-between items-center p-10'>
        <h2>Latest Books</h2>
        <a href='#'>View All</a>
      </div>
      <div className='pl-10 pr-10 grid grid-cols-4 gap-4'>
        {/* col */}
        <div className='cover flex justify-center items-center rounded-xl'>
          <div className='p-10'>
            <Image src={Cover5} />
            <h3 className='mt-3'>The Compound Effect</h3>
            <ul className='flex'>
              <li><Image src={StarON} /></li>
              <li><Image src={StarON} /></li>
              <li><Image src={StarON} /></li>
              <li><Image src={StarON} /></li>
              <li><Image src={StarOFF} /></li>
            </ul>
            <h4 className='mt-5 mb-5'>Drren Hardy</h4>
            <div className='flex items-center'>
              <Image src={Author1} />
              <p className='ml-2'><span className='font-semibold'>Andre Syak</span> - 1 week ago</p>
            </div>
          </div>
        </div>
        {/* col */}
        {/* col */}
        <div className='cover flex justify-center items-center rounded-xl'>
          <div className='p-10'>
            <Image src={Cover6} />
            <h3 className='mt-3'>Build A Story Brand</h3>
            <ul className='flex'>
              <li><Image src={StarON} /></li>
              <li><Image src={StarON} /></li>
              <li><Image src={StarON} /></li>
              <li><Image src={StarON} /></li>
              <li><Image src={StarON} /></li>
            </ul>
            <h4 className='mt-5 mb-5'>Donald Miller</h4>
            <div className='flex items-center'>
              <Image src={Author2} />
              <p className='ml-2'><span className='font-semibold'>John Lucas</span> - 5 day ago</p>
            </div>
          </div>
        </div>
        {/* col */}
        {/* col */}
        <div className='cover flex justify-center items-center rounded-xl'>
          <div className='p-10'>
            <Image src={Cover7} />
            <h3 className='mt-3'>Crushing IT</h3>
            <ul className='flex'>
              <li><Image src={StarON} /></li>
              <li><Image src={StarON} /></li>
              <li><Image src={StarON} /></li>
              <li><Image src={StarON} /></li>
              <li><Image src={StarON} /></li>
            </ul>
            <h4 className='mt-5 mb-5'>Gary Vaynerchuck</h4>
            <div className='flex items-center'>
              <Image src={Author3} />
              <p className='ml-2'><span className='font-semibold'>Ade Barkah</span> - 1 day ago</p>
            </div>
          </div>
        </div>
        {/* col */}
        {/* col */}
        <div className='cover flex justify-center items-center rounded-xl'>
          <div className='p-10'>
            <Image src={Cover8} />
            <h3 className='mt-3'>Atomic Habits</h3>
            <ul className='flex'>
              <li><Image src={StarON} /></li>
              <li><Image src={StarON} /></li>
              <li><Image src={StarON} /></li>
              <li><Image src={StarON} /></li>
              <li><Image src={StarOFF} /></li>
            </ul>
            <h4 className='mt-5 mb-5'>James Clear</h4>
            <div className='flex items-center'>
              <Image src={Author4} />
              <p className='ml-2'><span className='font-semibold'>Andre Syak</span> - 2 week ago</p>
            </div>
          </div>
        </div>
        {/* col */}
      </div>
    </section>
  )
}

export default Latest