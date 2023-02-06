import React, { useMemo, useState } from 'react'
import { useTable, usePagination } from 'react-table'
import { COLUMN } from './Column'
import MOCK_DATA from '../../assets/MOCK_DATA.json'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { MdAdd } from 'react-icons/md'
import Newticketform from '../Newticketform'

const Datatable = () => {
  const [isOpen, setIsOpen] = useState(false)
  const data = useMemo(() => MOCK_DATA, [])
  const columns = useMemo(() => COLUMN, [])

  const tableInstance = useTable({ columns, data }, usePagination)
  const { getTableProps, getTableBodyProps, headerGroups, page, nextPage, canNextPage, canPreviousPage, previousPage, pageOptions, state, prepareRow } = tableInstance
  const { pageIndex } = state

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

      <div className='overflow-auto rounded shadow-lg border w-full'>
        <table
          {...getTableProps()}
          className='w-full divide-y divide-gray-200 table-auto'
        >
          <thead className='bg-indigo-100'>
            {headerGroups.map((headerGroup, index) => (
              <tr
                className=''
                key={index}
                {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup.headers.map((column) => (
                  <>
                    <th
                      key={index}
                      {...column.getHeaderProps()}
                      className='px-4 tracking-wide py-4 text-xs whitespace-nowrap font-bold text-left text-indigo-900 uppercase'
                    >
                      {column.render('Header')}
                    </th>
                  </>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row)
              return (
                <tr
                  {...row.getRowProps()}
                  key={index}
                  className='duration-200'
                >
                  {row.cells.map((cell) => (
                    <>
                      <td
                        {...cell.getCellProps()}
                        className={`px-4 py-3 text-sm w-fit font-medium text-gray-800 whitespace-nowrap ${index % 2 === 0 ? 'bg-white' : 'bg-light-grey'}`}
                      >
                        {cell.render('Cell')}
                      </td>
                      {/* <td>edit</td> */}
                    </>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className='flex items-center gap-4'>
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className='btn-secondary'
        >
          <BiChevronLeft size={24} />
        </button>

        <span>
          {pageIndex + 1} | {pageOptions.length}
        </span>

        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className='btn-secondary'
        >
          <BiChevronRight size={24} />
        </button>
      </div>
    </>
  )
}

export default Datatable
