import { Route, Routes } from 'react-router-dom'
import Sidemenu from './components/Sidemenu'
import Topbar from './components/Topbar'
import Home from './pages/Home'
import Notfound from './pages/Notfound'
import Ticket from './pages/Ticket'
import { MenuContext } from './context/MenuContext'
import { useContext } from 'react'
import Newticket from './pages/Newticket'

const App = () => {
  const { isOpen } = useContext(MenuContext)
  return (
    <>
      <div className='flex'>
        <div className='fixed'>
          <Sidemenu />
        </div>
        <div className={`main w-full overflow-hidden ${isOpen ? 'ml-56' : 'ml-20'}`}>
          <div className=''>
            <Topbar />
            {/* ! kaam garena ta */}
          </div>
          <div className='main-content py-8 px-8 overflow-hidden max-w-fit'>
            <Routes>
              <Route
                path='/'
                element={<Home />}
              />
              <Route path='/ticket'>
                <Route
                  index
                  element={<Ticket />}
                />
                <Route path='new' element={ <Newticket /> } />
              </Route>
              <Route
                path='*'
                element={<Notfound />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

{
  // https://www.youtube.com/watch?v=siVVovFRzfw
  // https://www.youtube.com/watch?v=MpdFj8MEuJA
}
