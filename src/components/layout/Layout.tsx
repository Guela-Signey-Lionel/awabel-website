import { Outlet } from 'react-router-dom'
import Topbar from './Topbar'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
      <Topbar />
      <Navbar />
      {/*
        paddingTop compense :
          - desktop/tablette : ticker 38px + navbar 68px = 106px
          - mobile (<576px)  : ticker 34px + navbar ~56px = 90px
        Géré via la classe CSS awabel-main-content dans _global.scss
      */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
