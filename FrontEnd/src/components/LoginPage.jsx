import { Link } from "react-router-dom";

const LoginPage = () => {

    return (

        <div>
            <h2>Login here...</h2>
            <div className="LoginCard">
                <form>
                    <div>
                        <label htmlFor="username">Username:</label><input type="text" name="username" id="username" />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label><input type="password" name="password" id="password" />
                    </div>
                    <div>
                        <input type="submit" value="login" />
                    </div>
                </form>
            </div>
            <p>Not signed up yet? <Link to="/signup">Click here to sign up!</Link></p>
        </div>

    )
}

export default LoginPage;