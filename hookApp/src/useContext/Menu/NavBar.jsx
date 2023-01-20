import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" href="#">
                        UseContext
                    </Link>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active" : ""}`
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active" : ""}`
                                }
                            >
                                About
                            </NavLink>
                            {/* <li className="nav-item">
                                <Link to="/login" className="nav-link" href="#">
                                    Login
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
