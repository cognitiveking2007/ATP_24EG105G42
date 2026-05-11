import {Outlet} from "react-router"

import Header from "./Header"
import Footer from "./Footer"


function RootLayout() {
  return (
    <div>App
   <Header />
   {/* placeholder*/}
   <div className='min-h-screen mx-16 bg-gray-100'>
    
    <Outlet />
   </div>
   <Footer />
    </div>
  )
}

export default RootLayout;