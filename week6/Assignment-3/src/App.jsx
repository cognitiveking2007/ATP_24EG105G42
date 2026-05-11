import {createBrowserRouter,RouterProvider} from 'react-router'
import RootLayout from './RootLayout' // Add this line

import Home from "./Home"
import Register from './Register'
import Login from './Login'
import Technologies from './Technologies'
import Java from './Java' 
import Nodejs from './Nodejs'
import Vue from './Vue'



function App() {

  const routerObj=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout />,
      children:[
         {
          path:"",
          element:<Home />,
         },
         {
          path:"register",
          element:<Register />,
         },
         {
          path:"Login",
          element:<Login />,
         },
         {
          path:"Technologies",
          element:<Technologies />,
          children :[
            {
              path:"Java",
              element:<Java />,
            },
            {
              path:"Nodejs",
              element:<Nodejs />
            },
            {
              path:"Vue",
              element:<Vue />
            },
          ]
         }
      
      ]
    }
  ]);

  return (
    <RouterProvider router={routerObj} />
  )
}

export default App;