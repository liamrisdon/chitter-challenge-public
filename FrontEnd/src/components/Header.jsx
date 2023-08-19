import { NavLink } from "react-router-dom";
// import PropTypes from "prop-types";

const Header = () => {

    return (
        <div className="header">
            <NavLink to="/" className="link">PeepHome</NavLink>
            <NavLink to="/login" className="link">Login</NavLink>
            <NavLink to="/signup" className="link">Sign Up</NavLink>
            <button className="button">Logout</button>
        </div>

    )
}

Header.propTypes = {

}

export default Header;