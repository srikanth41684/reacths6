import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="nav-links">
            <Link className="links" to='home'>Home</Link>
            <Link className="links" to='/student'>Students</Link>
            <Link className="links" to='/contact'>Contact</Link>
        </div>
    );
}

export default Navbar;