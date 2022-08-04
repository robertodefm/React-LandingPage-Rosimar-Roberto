import React from "react";

const navb = {
	navbarTitle: "Start Bootstrap",
	navbarHome: "Home",
	navbarAbout: "About",
    navbarServices: "Services",
    navbarContact: "Contact"
};

//create your first component
const Nabvar = () => {
    
        return (
                <nav className="navbar navbar-expand-md navbar-dark bg-dark bg-faded justify-content-center">
                    <div className="container">
                        <a className="navbar-brand" href="#">{navb.navbarTitle}</a>
                        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div id="navbarSupportedContent" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
                                <li className="nav-item active">
                                    <a className="nav-link active" aria-current="page" href="#">{navb.navbarHome}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">{navb.navbarAbout}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">{navb.navbarServices}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">{navb.navbarContact}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        );
};

export default Nabvar;