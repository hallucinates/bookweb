import Image from 'next/image'
import React from 'react'
import { Client1, Client2, Client3, Kutip } from '../../../public'

const Testimonials = () => {
  return (
    <section>
      <div className='p-10 mt-20'>
        <div className='grid grid-cols-3 gap-3'>
          {/* col */}
          <div className='testimoni text-center border-2'>
            <div>
              <div className='flex justify-center items-center text-center'>
                <Image src={Client1} className='gambar ml-32 mr-20' />
                <Image src={Kutip} className='gambar' />
              </div>
              <h5>Eka Ardilah</h5>
              <p>I feel very helpful with all the books provided, so I do my job easily and happily</p>
            </div>
          </div>
          {/* col */}
          {/* col */}
          <div className='testimoni text-center border-2'>
            <div>
              <div className='flex justify-center items-center text-center'>
                <Image src={Client2} className='gambar ml-32 mr-20' />
                <Image src={Kutip} className='gambar' />
              </div>
              <h5>Hazar Hamzah</h5>
              <p>Thank you. Many good books to accompany everyday</p>
            </div>
          </div>
          {/* col */}
          {/* col */}
          <div className='testimoni text-center border-2'>
            <div>
              <div className='flex justify-center items-center text-center'>
                <Image src={Client3} className='gambar ml-32 mr-20' />
                <Image src={Kutip} className='gambar' />
              </div>
              <h5>Khoerunnisa</h5>
              <p>Thanks team, many recommended books for me to read</p>
            </div>
          </div>
          {/* col */}
          </div>
      </div>
    </section>
  )
}

export default Testimonials