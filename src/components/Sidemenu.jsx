import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { BiHomeAlt } from 'react-icons/bi'
import { HiOutlineTicket } from 'react-icons/hi'
import { MenuContext } from '../context/MenuContext'

const Sidemenu = () => {
  const { isOpen } = useContext(MenuContext)

  return (
    <>
      <div className={`${isOpen ? 'w-60' : 'w-fit'} bg-light-grey px-5 py-6 min-h-screen space-y-5 duration-200`}>
        <div className=''>
          
          {/* <h5 className={`${isOpen ? 'block' : 'hidden'} duration-200 pl-2 text-indigo-900`}>Dashboard</h5> */}
          <img src="/logo.svg" alt="" className={`w-40 ${isOpen ? 'block': 'hidden'}`} />
          <img src="/icon.svg" alt="" className={`w-7 ${isOpen ? 'hidden': 'flex items-center justify-center'} m-0`} />
        </div>

        <div className=''>
          <ul>
            <li>
              <NavLink to='/' activeClassName='active-nav'>
                <div className='side-link'>
                  <div className='side-link-title'>
                    <BiHomeAlt className='text-indigo-700' size={22} />
                    <span className={`${isOpen ? 'block' : 'hidden'} duration-200`}>Home</span>
                  </div>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink to='/ticket'>
                <div className='side-link'>
                  <div className={`side-link-title`}>
                    <HiOutlineTicket className='text-indigo-700' size={22} />
                    <span className={`${isOpen ? 'block' : 'hidden'} duration-200`}>Ticket</span>
                  </div>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidemenu