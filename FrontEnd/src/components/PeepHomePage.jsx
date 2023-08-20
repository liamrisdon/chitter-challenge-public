import PropTypes from "prop-types";
import NewPeep from "../components/NewPeep.jsx";
import ShoutyBox from "../components/ShoutyBox.jsx";

const PeepHomePage = ({ data, loggedInUser }) => {


    const { peeps, error } = data;


    return (
        <>
            <div className="container">
                {loggedInUser && (<NewPeep user={loggedInUser.username} name={loggedInUser.name} />)}
                <ShoutyBox peeps={{ peeps, error }} />
            </div>
        </>

    )
}

PeepHomePage.propTypes = {
    loggedInUser: PropTypes.object,
    data: PropTypes.object,
    peeps: PropTypes.exact({
        peepData: PropTypes.arrayOf(
            PropTypes.shape({
                _id: PropTypes.string,
                username: PropTypes.string,
                name: PropTypes.string,
                content: PropTypes.string,
                dateCreated: PropTypes.string
            })
        ),
        error: PropTypes.string
    }),
}

export default PeepHomePage;