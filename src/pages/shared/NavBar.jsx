import { NavLink, Link } from "react-router-dom";
import logo from '../../assets/logo.svg'
const NavBar = () => {
    const navItems = <>
            <NavLink className={({isActive})=> isActive ? 'active' : 'default'} to="/">Home</NavLink>
            <NavLink className={({isActive})=> isActive ? 'active' : 'default'} to="/login">Login</NavLink>
    </>
    return (
        <div className="navbar bg-green-100 md:h-28 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className=" menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
             {navItems}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl">
            <img className="h-10 md:h-16" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="space-x-7 menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end md:mr-5">
          <a className="btn btn-outline btn-secondary">Appointment</a>
        </div>
      </div>
    );
};

export default NavBar;