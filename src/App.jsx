import { Route, Routes } from 'react-router-dom'
import Sidemenu from './components/Sidemenu'
import Topbar from './components/Topbar'
import Home from './pages/Home'
import Notfound from './pages/Notfound'
import Ticket from './pages/Ticket'
import { MenuContextProvider } from './context/MenuContext'
import { useContext } from 'react'

function App() {
  // const { isOpen } = useContext(MenuContext)
  // console.log(isOpen)
  return (
    <>
      <MenuContextProvider>
        <div className='flex'>
          <div className='fixed'>
            <Sidemenu />
          </div>
          <div className={`main w-full ml-60`}>
            <div className='sticky top-0 w-full'>
              <Topbar />
              {/* ! kaam garena ta */}
            </div>
            <div className='main-content pt-8 px-8'>
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
                  {/* <Route path=':id' element={} /> */}
                </Route>
                <Route
                  path='*'
                  element={<Notfound />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </MenuContextProvider>
    </>
  )
}

export default App

{
  // https://www.youtube.com/watch?v=siVVovFRzfw
  // https://www.youtube.com/watch?v=MpdFj8MEuJA
}
