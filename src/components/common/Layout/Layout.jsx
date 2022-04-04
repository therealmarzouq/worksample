import React from 'react'
// import { Sidebar, Button, Modal, LoadingDots } from "@components/ui";
import { Sidebar } from '../../ui'
import { Header } from '../../common'
import './Layout.css'

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)
  return (
    <div className="app-l-root">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleMobileMenu={() =>
          setIsSidebarOpen({ isSidebarOpen: !isSidebarOpen.isSidebarOpen })
        }
      />
      <main className="app-l-main">
        <Header
          toggleMobileMenu={() =>
            setIsSidebarOpen({ isSidebarOpen: !isSidebarOpen.isSidebarOpen })
          }
        />
        {children}
      </main>
    </div>
  )
}

export default Layout
