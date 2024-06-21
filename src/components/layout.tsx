import { Outlet } from 'react-router-dom';
import Navigation from './navbar';
import Footer from './footer'

export default function Layout() {
   return (
      <>
      <Navigation/>
      <Outlet/>
      <Footer/>
      </>
   )
}
