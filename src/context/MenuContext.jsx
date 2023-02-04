import { createContext, useState, useEffect } from 'react'

export const MenuContext = createContext()

export const MenuContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true)
  console.log(isOpen)

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem('MENU_STATE'))
  //   if (data) {
  //     setIsOpen(data)
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('MENU_STATE', JSON.stringify(isOpen))
  // }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <MenuContext.Provider value={{isOpen, toggleMenu}}>
      { children }
    </MenuContext.Provider>
  )
}

// export default MenuContext