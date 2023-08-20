import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const SignUpPage = ({ handleAuthentication }) => {

    const [newUser, setNewUser] = useState({ username: "", name: "", email: "", password: "" })
    const [successMessage, setSuccessMessage] = useState("");



    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewUser({
            ...newUser,
            [name]: value
        });
    }


    const signUpHandler = async (e) => {
        e.preventDefault();

        const res = await axios.post(`${import.meta.env.VITE_CHITTERURL}/signup`, newUser);
        console.log(res.data.newUser);

        if (res.data) {
            console.log("User successfully signed up!")
            setSuccessMessage("User successfully signed up!")
            setNewUser({
                username: "",
                name: "",
                email: "",
                password: ""
            })
            handleAuthentication(res.data.newUser);
        } else {
            setSuccessMessage(null);
        }
    }


    return (

        <div className="container mt-4">
            <h2 className="mb-4">Sign Up...</h2>
            <div className="card p-4">
                {successMessage && (
                    <div className="text-success mb-3">
                        {successMessage}
                    </div>
                )}
                <form onSubmit={signUpHandler}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            className="form-control"
                            value={newUser.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            value={newUser.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            value={newUser.email}
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
                            value={newUser.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
            <p className="mt-3">
                Already a user? <Link to="/login">Click here to login!</Link>
            </p>
        </div>

    )
}

SignUpPage.propTypes = {

    handleAuthentication: PropTypes.func.isRequired,
    newUser: PropTypes.arrayOf(
        PropTypes.shape({
            "username": PropTypes.string.isRequired,
            "name": PropTypes.string.isRequired,
            "email": PropTypes.string.isRequired,
            "password": PropTypes.string.isRequired,
        })
    )
}



export default SignUpPage;