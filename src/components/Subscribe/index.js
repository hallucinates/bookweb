import React from 'react'

const Subscribe = () => {
  return (
    <section className='subscribe flex justify-center items-center mt-20'>
      <div className='p-10'>
        <h4 className='mb-12'>Recommended books from you to review</h4>
        <form>
            <input placeholder='Write your recommendation' className='submit-area' />
            <button className='submit-button'>
              Submit
            </button>
        </form>
      </div>
    </section>
  )
}

export default Subscribe