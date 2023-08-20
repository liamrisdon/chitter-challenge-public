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
        <div>
            <h2>Sign Up...</h2>
            <div className="SignUpCard">
                {successMessage !== null && <p className="success-message">Successfully signed in!</p>}
                <form onSubmit={signUpHandler}>
                    <div>
                        <label htmlFor="username">Username:</label><input type="text" name="username" id="username" value={newUser.username} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="name">Name:</label><input type="text" name="name" id="name" value={newUser.name} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label><input type="email" name="email" id="email" value={newUser.email} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label><input type="password" name="password" id="password" value={newUser.password} onChange={handleChange} />
                    </div>
                    <div>
                        <input type="submit" value="Sign Up" />
                    </div>
                </form>
            </div>
            <p>Already a user? <Link to="/login">Click here to login!</Link></p>
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