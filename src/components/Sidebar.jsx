import { Link } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import { PiBuildingApartmentLight } from "react-icons/pi";
import { FaRegCreditCard } from "react-icons/fa6";
import { IoCubeOutline } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { AiOutlineProfile } from "react-icons/ai";
import { BsRocketFill } from "react-icons/bs";



const Sidebar = () => {
  return (
    <>
    <div style={{gap:"5px"}}>
      <aside className="fixed-start">
        <div className="sidenav-header">
          <Link className="navbar-brand" to="/pages/dashboard" target="_blank">
            <img
              src="/logo-ct-dark.webp"
              className="navbar-brand-img"
              alt="main_logo"
            />
            <span className="ms-1 fw-bold">Soft UI Dashboard</span>
          </Link>
        </div>
        <hr className="horizontal-divider" />
        <nav className="navbar-nav">
          <ul className="nav-list list-unstyled">
            <li className="nav-item">
              <Link to="/pages/dashboard" className="nav-link">
                <div className="icon"></div> <FaHome/>
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/pages/table" className="nav-link">
                <div className="icon"></div><PiBuildingApartmentLight/>
                Tables
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#!" className="nav-link">
                <div className="icon"></div><FaRegCreditCard/>
                Billing
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#!" className="nav-link">
                <div className="icon"></div><IoCubeOutline/>
                Virtual Reality
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#!" className="nav-link">
                <div className="icon"></div><FaTools/>
                RTL
              </Link>
            </li>
            <li className="nav-item mt-3">
              <h6 className="section-header ps-4 ms-2 text-uppercase text-xs fw-bold ">
                Account Pages
              </h6>
            </li>
            <li className="nav-item">
              <Link to="#!" className="nav-link">
                <div className="icon"></div><CgProfile/>
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#!" className="nav-link">
                <div className="icon"></div><AiOutlineProfile/>
                Sign In
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#!" className="nav-link">
                <div className="icon"></div><BsRocketFill/>
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      </div>
    </>
  );
};

export default Sidebar;
