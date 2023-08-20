import PeepModel from "../utils/peep.model.js";
import PropTypes from "prop-types";

const Peep = ({ peep }) => {

    const { username, name, content, dateCreated } = peep;
    const peepDateCreated = new Date(dateCreated).toUTCString();

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">User: {username}, {name}</h5>
                <p className="card-text">{peepDateCreated}</p>
                <p className="card-text">Said... {content}</p>
            </div>

        </div>
    )
}

Peep.propTypes = {
    peep: PropTypes.instanceOf(PeepModel)
}

export default Peep;