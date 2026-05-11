import React from 'react'
import {Outlet} from "react-router"
import {NavLink} from 'react-router'

function Technologies() {
  return (
    <div className="flex justify-between items-center  text-blue  p-10">Technologies
        <div>
        <li><NavLink to="Java" className={({ isActive }) => (isActive ? "text-red-700 bg-red-200 p-3" : "")}>Java</NavLink> </li>
        <li><NavLink to="Nodejs" className={({ isActive }) => (isActive ? "text-red-700 bg-red-200 p-3" : "")}>Nodejs</NavLink></li>
        <li><NavLink to="Vue" className={({ isActive }) => (isActive ? "text-red-700 bg-red-200 p-3" : "")}>Vue</NavLink></li> 
        </div>
       <Outlet />
    </div>
  )
}

export default Technologies;