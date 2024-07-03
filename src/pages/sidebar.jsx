import React from "react";
import { BsList } from "react-icons/bs";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside id="sidebar">
      <div>
        <h3 className="heading">Cencora</h3>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/">
            <BsList className="icon" /> Dashboard
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
