import React from "react";
import { Link } from "react-router-dom";
import { FaRegBell } from "react-icons/fa6";

function Header() {
  return (
    <header className="header">
      <h2 className="header-text">GenSys/Genpro</h2>
      <Link to="/">
        <FaRegBell className="icon2" />
      </Link>
    </header>
  );
}

export default Header;
