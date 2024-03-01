import React from 'react'
import { NavbarMenu } from '../Navbar/NavbarMenu'

export const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <NavbarMenu />
      {children}
    </>
  )
}
