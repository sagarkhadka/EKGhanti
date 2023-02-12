import React from 'react'
import { useTable, usePagination } from 'react-table'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

const Table = ({ columns, data }) => {
  const tableInstance = useTable({ columns, data, initialState: { pageIndex: 0 } }, usePagination)
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    canNextPage,
    canPreviousPage,
    previousPage,
    pageOptions,
    prepareRow,
    setPageSize,
    state: { pageIndex, pageSize} } = tableInstance

  return (
    <>
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
          { pageIndex + 1 } | { pageOptions.length }
        </span>

        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className='btn-secondary'
        >
          <BiChevronRight size={24} />
        </button>
        <select name="pagesize" id="pagesize" value={pageSize} onChange={(e) => {setPageSize(Number(e.target.value))}}>
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show { pageSize }
            </option>
          ))
          }
        </select>
      </div>
    </>
  )
}

export default Table
