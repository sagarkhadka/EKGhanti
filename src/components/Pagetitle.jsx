import React from 'react'

const Pagetitle = ({ title }) => {
  return (
    <>
      <section>
        <div className='flex justify-between items-center'>
          <h3 className='text-dark-grey'>{title}</h3>
          <button className='btn-primary'>New</button>
        </div>
      </section>
    </>
  )
}

export default Pagetitle
