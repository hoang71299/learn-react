import React from 'react'
import Header from '../Header'
import { createContext } from 'react'
export const MenuContext = createContext()
function Layout() {
  const menus = [
    "trang chủ",
    "tin tức",
    "Giới thiệu",
    "Liên hệ"
  ]
  return (
    <>
    <MenuContext.Provider value={menus}>
      <Header/>
    </MenuContext.Provider>
      
      <div>Main</div>
      <div>Footer</div>
    </>
  )
}

export default Layout