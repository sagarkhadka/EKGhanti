import React from 'react'
import { tickets } from '../data/tickets'

const Tablelist = () => {
  return (
    <>
      <table className='min-w-full divide-y divide-gray-200'>
        <thead className='bg-gray-200'>
          <tr className=''>
            <th
              scope='col'
              className='px-6 py-4 text-xs font-bold text-left text-gray-500 uppercase'
            >
              Ticket id
            </th>
            <th
              scope='col'
              className='px-6 py-4 text-xs font-bold text-left text-gray-500 uppercase'
            >
              Customer
            </th>
            <th
              scope='col'
              className='px-6 py-4 text-xs font-bold text-left text-gray-500 uppercase'
            >
              Wallet id
            </th>
            <th
              scope='col'
              className='px-6 py-4 text-xs font-bold text-left text-gray-500 uppercase'
            >
              Created at
            </th>
            <th
              scope='col'
              className='px-6 py-4 text-xs font-bold text-left text-gray-500 uppercase'
            >
              route
            </th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((item, index) => (
            <tr
              key={index}
              className='divide-x'
            >
              <td className={`px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap ${index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'}`}>{item.ticketID}</td>
              <td className={`px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap ${index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'}`}>{item.customer}</td>
              <td className={`px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap ${index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'}`}>{item.walletID}</td>
              <td className={`px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap ${index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'}`}>{item.created}</td>
              <td className={`px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap ${index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'}`}>
                {item.route === 1 &&
                  <span className='bg-emerald-100 px-4 text-sucess py-2 rounded-full'>Incomming</span>
                }
                {
                  item.route === 2 &&
                  <span className='bg-red-100 px-4 text-fail py-2 rounded-full'>Outgoing</span>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Tablelist
