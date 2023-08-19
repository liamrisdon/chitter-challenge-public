import { Link } from "react-router-dom";

const SignUpPage = () => {

    return (
        <div>
            <h2>Sign Up...</h2>
            <div className="SignUpCard">
                <form>
                    <div>
                        <label htmlFor="username">Username:</label><input type="text" name="username" id="username" />
                    </div>
                    <div>
                        <label htmlFor="name">Name:</label><input type="text" name="name" id="name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label><input type="email" name="email" id="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label><input type="password" name="password" id="password" />
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

export default SignUpPage;