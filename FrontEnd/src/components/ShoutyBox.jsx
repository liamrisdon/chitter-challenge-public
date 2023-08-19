// import PropTypes from "prop-types";
import Peep from "./Peep.jsx"

const ShoutyBox = () => {

    const populatePeeps = () => {
        return <Peep />
    }

    return (
        <>
            <h2>Shouty Box!</h2>
            <div>
                {populatePeeps}
            </div>
        </>
    )

}

ShoutyBox.propTypes = {

}

export default ShoutyBox;
