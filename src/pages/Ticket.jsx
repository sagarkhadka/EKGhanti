import React from 'react'
import Datatable from '../components/tickettable/Datatable'
import Datas from '../components/Datas'

const Ticket = () => {
  return (
    <>
      <section className='space-y-6 w-full'>
        <Datas />
        <Datatable />
      </section>
    </>
  )
}

export default Ticket
