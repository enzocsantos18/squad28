import React from "react";
import './style.css'
import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header className="menu">
        <Link to="/"> 
         <img src={logo} alt="Logo da empresa Lapiseira"></img>
        </Link>
      </header>
    </>
  );
}

export default Header;
