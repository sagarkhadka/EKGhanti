import React from 'react'
import { BsFillPersonFill } from 'react-icons/bs'

const Newticketform = ({ toggle }) => {
  return (
    <>
      <form action='' className='space-y-4 mt-4'>
        <div className="flex gap-4">
          <div className='space-y-1 w-full'>
            <span className='text-sm uppercase font-semibold text-dark-grey tracking-wide'>Customer ID</span>
            <input
              className='placeholder:normal-case placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-3 px-4 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm'
              placeholder='Customer ID'
              type='number'
              name='search'
            />
          </div>

          <div className='space-y-1 w-full'>
            <span className='text-sm uppercase font-semibold text-dark-grey tracking-wide'>Wallet ID</span>
            <input
              className='placeholder:normal-case placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-3 px-4 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm'
              placeholder='Wallet ID'
              type='number'
              name='search'
            />
          </div>
        </div>

        <div className='flex gap-4'>
          <div className='space-y-1 w-full'>
            <span className='text-sm uppercase font-semibold text-dark-grey tracking-wide'>Route</span> <br />
            <select name="route" id="route" className='focus:ring-indigo-500 focus:border-indigo-500 rounded-md py-3 px-4 border w-full border-slate-300'>
              <option value="manual">Manual</option>
              <option value="in">Incomming</option>
              <option value="out">Outgoing</option>
            </select>
          </div>
          <div className='space-y-1 w-full'>
            <span className='text-sm uppercase font-semibold text-dark-grey tracking-wide'>Source</span> <br />
            <select name="route" id="route" className='focus:ring-indigo-500 focus:border-indigo-500 rounded-md py-3 px-4 border w-full border-slate-300'>
              <option value="call">Call</option>
              <option value="app">App</option>
            </select>
          </div>
        </div>

        <div className='space-y-1'>
          <span className='text-sm uppercase font-semibold text-dark-grey tracking-wide'>Issue</span> <br />
          <textarea className='focus:ring-indigo-500 focus:border-indigo-500 rounded-md py-3 px-4 border w-full border-slate-300' name="" id="" cols="60" rows="2"></textarea>
        </div>

        <div className="btn-group flex gap-4">
          <button className="btn-primary border border-indigo-600 px-5">Add</button>
          <button onClick={toggle} className="btn-secondary border border-indigo-600 px-5">Close</button>
        </div>
      </form>
    </>
  )
}

export default Newticketform
