import React, { useMemo, useState } from 'react'
import { COLUMN } from './Column'
import MOCK_DATA from '../../assets/MOCK_DATA.json'
import { MdAdd } from 'react-icons/md'
import Newticketform from '../Newticketform'
import Table from '../Table'

const Datatable = () => {
  const [isOpen, setIsOpen] = useState(false)
  const data = useMemo(() => MOCK_DATA, [])
  const columns = useMemo(() => COLUMN, [])

  const setModel = () => {
    setIsOpen(!isOpen)
  }

  if (isOpen) {
    document.body.style = `
      overflow: hidden
    `
  } else {
    document.body.style.overflow = 'auto'
  }

  return (
    <>
      <div className='flex justify-between items-center'>
        <h3 className='text-dark-grey'>Ticket</h3>
        <button onClick={() => setModel()} className='btn-primary pl-4'>
          <span className='text-lg'>
            <MdAdd />
          </span>
          New
        </button>
      </div>

      {
        isOpen &&
        <div className="absolute -top-8 right-0 bottom-0 bg-black bg-opacity-40 w-full">
          <div className="bg-light-grey p-5 shadow-xl w-fit absolute top-1/2  -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-md">
            <h5 className='text-indigo-600 divide-y'>Add New Ticket</h5>
            <Newticketform toggle={setModel} />
          </div>
        </div>
      }

      <Table columns={columns} data={data} />
    </>
  )
}

export default Datatable
