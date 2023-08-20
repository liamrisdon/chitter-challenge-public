import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ setLogin, username }) => {

    const handleLogout = () => {
        setLogin(false);
        window.location.reload();
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-light custom-blue-bg">
            <div className="container-fluid px-4">
                <NavLink className="navbar-brand" to="/">
                    Chitter
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        {username && (
                            <li className="nav-item">
                                <span className="nav-link">Hello, {username}</span>
                            </li>
                        )}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">
                                Login
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/signup">
                                Sign Up
                            </NavLink>
                        </li>
                        {username && (
                            <li className="nav-item">
                                <button
                                    className="btn btn-danger nav-link"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>

    )
}

Header.propTypes = {
    setLogin: PropTypes.func,
    username: PropTypes.string
}

export default Header;