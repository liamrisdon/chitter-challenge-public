import PropTypes from "prop-types";
import { useState } from "react";
import PeepModel from "../utils/peep.model";
import axios from "axios";

const NewPeep = ({ user: username, name }) => {

    const [peepContent, setPeepContent] = useState("");

    const postNewPeep = async (e) => {
        e.preventDefault();
        const peepDateCreated = new Date().toISOString();
        const newPeep = new PeepModel(null, username, name, peepContent, peepDateCreated);
        console.log(newPeep);
        try {

            await axios.post(import.meta.env.VITE_CHITTERURL, newPeep);

            setPeepContent("");
            window.alert("Your peep has been posted");
            window.location.reload();
        } catch (e) {
            console.log("Unsuccessful: ", e.message)
        }
    }

        // const [submitted, setSubmitted] = useState(false);

    // UseEffect(() => {
    //     if (submitted) navigate("/");
    // }, [submitted, navigate]);

    return (

        <div>
            <h2>Post a new Peep to the Shouty Box!</h2>
            <h3 className="name">{name}</h3>
            <h3 className="username">{username}</h3>
            <form onSubmit={postNewPeep}>

                <label>Type Peep message here...</label>
                <textarea value={peepContent} onChange={e => setPeepContent(e.target.value)}></textarea>
                <input type="submit" value="submit" />

            </form>
        </div>

    )
}


NewPeep.propTypes = {
    currentUser: PropTypes.object,
    name: PropTypes.string,
    user: PropTypes.string,
    peeps: PropTypes.shape({
        _id: PropTypes.string,
        username: PropTypes.string,
        name: PropTypes.string,
        content: PropTypes.string,
        dateCreated: PropTypes.string
    })
}

export default NewPeep;