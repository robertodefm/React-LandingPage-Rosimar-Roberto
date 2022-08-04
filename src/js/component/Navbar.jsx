import React from 'react'

//we're create a navbar const for all items we need as: titlem home, abour us, services, contact
const navbar = {
  navbarTitle: "Start Bootstrap",
  navbarHome: "Home",
  navbarAboutUs: "About Us",
  navbarServices: "Services",
  navbarContact: "Contact"
};

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark bg-faded justify-content-center">
    <div className="container">
        <a className="navbar-brand" href="#">{navbar.navbarTitle}</a>
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" 
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarSupportedContent" className="navbar-collapse collapse">
            <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
                <li className="nav-item active">
                    <a className="nav-link active" aria-current="page" href="#">{navbar.navbarHome}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">{navbar.navbarAboutUs}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">{navbar.navbarServices}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">{navbar.navbarContact}</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

  );
};

export default Navbar;

