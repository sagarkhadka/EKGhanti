export const COLUMN = [
  {
    Header: 'Ticket ID',
    accessor: 'ticket_id',
  },
  {
    Header: 'Customer',
    accessor: 'Customer',
  },

  {
    Header: 'WalletID',
    accessor: 'wallet_id',
  },

  {
    Header: 'date',
    accessor: 'date',
  },

  {
    Header: 'Route',
    accessor: 'route',
  },

  {
    Header: 'Source',
    accessor: 'source',
  },

  {
    Header: 'Issue',
    accessor: 'Issue',
  },

  {
    Header: 'Status',
    accessor: 'Status',
    Cell: ({ row }) => (
      <>
        {
          row.values.Status === 'Pending' &&
          <span className='text-pending py-1.5 px-3 bg-orange-100 border border-pending rounded-full'>
            {row.values.Status}
          </span>
        }
        
        {
          row.values.Status === 'Solved' &&
          <span className='text-sucess py-1.5 px-3 bg-emerald-100 border border-sucess rounded-full'>
            {row.values.Status}
          </span>
        }
      </>
    ),
  },

  {
    id: 'Action',
    Header: 'Action',
    Cell: ({ row }) => (
      <>
        <div className='flex gap-3'>
          <button
            className='text-sucess p-2 border border-sucess rounded hover:bg-sucess/25'
            onClick={() => alert('Edit')}
          >
            Edit
          </button>
          <button
            className='text-fail p-2 border border-fail rounded hover:bg-fail/25'
            onClick={() => alert('Delete' + row.values.ticket_id)}
          >
            Delete
          </button>
        </div>
      </>
    ),
  },
]
