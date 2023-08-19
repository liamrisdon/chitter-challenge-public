import PeepModel from "../utils/peep.model.js";
import PropTypes from "prop-types";

const Peep = ({ peep }) => {

    const { username, name, content, dateCreated } = peep;
    const peepDateCreated = new Date(dateCreated).toUTCString();

    return (
        <div className="peepcard">
            <p>User: {name}, {username}</p>
            <p>{peepDateCreated}</p>
            <p>Said... {content}</p>
        </div>
    )
}

Peep.propTypes = {
    peep: PropTypes.instanceOf(PeepModel)
}

export default Peep;