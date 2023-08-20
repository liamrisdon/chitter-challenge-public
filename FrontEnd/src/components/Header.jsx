import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ setLogin, username }) => {

    const handleLogout = () => {
        setLogin(false);
        window.location.reload();
    }


    return (
        <div className="header">
            {username && <span className="username">Hello, {username}</span>}
            <NavLink to="/" className="link">PeepHome</NavLink>
            <NavLink to="/login" className="link">Login</NavLink>
            <NavLink to="/signup" className="link">Sign Up</NavLink>
            <button className="button" onClick={handleLogout}>Logout</button>
        </div>

    )
}

Header.propTypes = {
    setLogin: PropTypes.func,
    username: PropTypes.string
}

export default Header;