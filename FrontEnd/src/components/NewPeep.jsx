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

        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">Post a new Peep to the Shouty Box!</h5>
                <h6 className="card-subtitle mb-2 text-muted">{name}, {username}</h6>
                <form onSubmit={postNewPeep}>
                    <div className="form-group">
                        <label htmlFor="peepContent">Type Peep message here...</label>
                        <textarea
                            className="form-control"
                            id="peepContent"
                            value={peepContent}
                            onChange={(e) => setPeepContent(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
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