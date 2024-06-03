import React from "react";

const NavBar = () => {
	return (
        <nav className="navbar navbar-inverse">
        <div className="container-fluid d-flex">
          <div className="navbar-header">
            <a className="navbar-brand" href="https://getbootstrap.com/">Start Bootstrap</a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><a href="https://getbootstrap.com/">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
};
export default NavBar;