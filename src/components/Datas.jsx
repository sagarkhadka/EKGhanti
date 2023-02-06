import React from 'react'
import { HiOutlineTicket } from 'react-icons/hi'
import { CgSandClock, CgCheck } from 'react-icons/cg'

const Datas = () => {
  return (
    <>
      <section className="grid grid-cols-3 gap-6">
        <div className='px-6 py-4 bg-indigo-50 flex gap-3 rounded-lg border border-indigo-200 text-indigo-600'>
          <div className='text-indigo-500'>
            <HiOutlineTicket size={50} />
          </div>
          <div className="flex flex-col">
            <h6>Total Tickets</h6>
            <h4>200</h4>
          </div>
        </div>

        <div className='px-6 py-4 bg-emerald-50 flex gap-3 rounded-lg border border-emerald-200 text-sucess'>
          <div className='text-sucess'>
            <CgCheck size={50} />
          </div>
          <div className="flex flex-col">
            <h6>Solved Issues</h6>
            <h4>190</h4>
          </div>
        </div>

        <div className='px-6 py-4 bg-orange-50 flex gap-3 rounded-lg border border-orange-200 text-pending'>
          <div className='text-pending'>
            <CgSandClock size={50} />
          </div>
          <div className="flex flex-col">
            <h6>Pending Issues</h6>
            <h4>10</h4>
          </div>
        </div>
      </section>
    </>
  )
}

export default Datas
