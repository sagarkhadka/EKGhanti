import React from 'react'
import Datatable from '../components/Datatable'
import Pagetitle from '../components/Pagetitle'
import Tablelist from '../components/Tablelist'

const Ticket = () => {
  return (
    <>
      <section className='space-y-6'>
        <Pagetitle title='Ticket' />
        {/* <Datatable /> */}
        <Tablelist />
      </section>
    </>
  )
}

export default Ticket
