import {NavLink} from 'react-router'

function Header() {
  console.log("Navbar rendered")
  return (
    <div className="flex justify-between items-center bg-slate-800 text-white p-4">
      <h1 className="text-xl font-bold">Logo</h1>
      <ul className="flex gap-6">
        <li><NavLink to="/" className={({ isActive }) => (isActive ? "text-blue-700 bg-blue-200 p-3" : "")}>Home</NavLink></li>
        <li><NavLink to="/register" className={({ isActive }) => (isActive ? "text-blue-700 bg-blue-200 p-3" : "")}>Register</NavLink></li>
        <li><NavLink to="/login" className={({ isActive }) => (isActive ? "text-blue-700 bg-blue-200 p-3" : "")}>Login</NavLink></li>
        <li><NavLink to="/Technologies" className={({ isActive }) => (isActive ? "text-blue-700 bg-blue-200 p-3" : "")}>Technologies</NavLink></li>
      </ul>
    </div>
  );
}
export default Header;
