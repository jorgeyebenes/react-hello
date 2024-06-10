import React from "react";

const NavBar = () => {
	return (
      <nav className="navbar navbar-dark bg-dark justify-content-between">
          <div className="navbar-header">
            <a className="navbar-brand" href="https://getbootstrap.com/">Start Bootstrap</a>
          </div>

          <div className="navbar-nav">
                <a className="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                <a className="nav-item nav-link" href="#">Features</a>
                <a className="nav-item nav-link" href="#">Pricing</a>
          </div>
      </nav>
    );
};
export default NavBar;