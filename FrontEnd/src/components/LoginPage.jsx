import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const LoginPage = ({ loggedInUser, handleAuthentication }) => {

    const [user, setUser] = useState({ username: "", password: "" })


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    };
    // put this in API call?
    const loginHandler = async (e) => {
        e.preventDefault();
        console.log('User before login:', user);
        try {
            const res = await axios.post(`${import.meta.env.VITE_CHITTERURL}/login`, user);
            console.log('Response:', res.data);
            if (res.data.user) {
                setUser({ username: "", password: "" });
            }
            handleAuthentication(res.data.user);
        } catch (error) {
            console.error('Error during login:', error);
        }
    }


    return (

        <div className="container mt-4">
            <h2 className="mb-4">Login here...</h2>
            <div className="card p-4">
                {loggedInUser && loggedInUser.username && (
                    <h5>Hello, {loggedInUser.username}</h5>
                )}
                {!loggedInUser && (
                    <form>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                className="form-control"
                                placeholder="Username"
                                value={user.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="form-control"
                                placeholder="Password"
                                value={user.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <button
                                className="btn btn-primary"
                                type="submit"
                                onClick={loginHandler}
                            >
                                Login
                            </button>
                        </div>
                    </form>
                )}
            </div>
            <p className="mt-3">
                Not signed up yet? <Link to="/signup">Click here to sign up!</Link>
            </p>
        </div>

    );
};

LoginPage.propTypes = {
    "handleAuthentication": PropTypes.func.isRequired,
    "loggedInUser": PropTypes.exact({
        "username": PropTypes.string,
        "name": PropTypes.string,
        "email": PropTypes.string,
        "password": PropTypes.string,
        "_id": PropTypes.string,
        "__v": PropTypes.number
    })
}

export default LoginPage;