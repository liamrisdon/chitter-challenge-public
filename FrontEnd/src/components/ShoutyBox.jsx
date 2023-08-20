import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PeepModel from "../utils/peep.model";
import Peep from "./Peep.jsx"

const ShoutyBox = ({ peeps }) => {

    console.log(peeps);
    const peepData = peeps.peeps;

    const [dataStatus, setDataStatus] = useState({ name: "loading", message: "loading peeps" })



    useEffect(() => {
        const { error } = peeps;
        if (error?.length > 0) {
            return setDataStatus({ name: "error", message: error });
        }
        setDataStatus({ name: "loading", message: "loading peeps" });
    }, [peeps]);

    const populatePeeps = () => {

        console.log(peepData);
        if (peepData?.length > 0) {

            const sortedPeeps = peepData.sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated));

            const showPeeps = sortedPeeps.map(peep => {
                const thisPeep = new PeepModel(peep._id, peep.username, peep.name, peep.content, peep.dateCreated);
                return <Peep peep={thisPeep} key={thisPeep._id} />
            });
            return showPeeps;
        }
        return (
            <p id={dataStatus.name}>{dataStatus.message}</p>
        );
    }

    return (
        <div className="container-fluid mt-3">
            <div className="row justify-content-center">
                <div className="col-md-18">
                    <div className="card p-4">
                        <h2 className="mb-4">Shouty Box!</h2>
                        {populatePeeps()}
                    </div>
                </div>
            </div>
        </div>
    )

}

//fix these, some are unnecessary

ShoutyBox.propTypes = {
    peeps: PropTypes.shape({
        peeps: PropTypes.arrayOf(
            PropTypes.shape({
                _id: PropTypes.string,
                username: PropTypes.string,
                name: PropTypes.string,
                content: PropTypes.string,
                dateCreated: PropTypes.string
            })
        ),
        error: PropTypes.string
    })
};

ShoutyBox.defaultProps = {
    peeps: []
};

ShoutyBox.PropTypes = {
    peeps: PropTypes.shape({
        peeps: PropTypes.Object,
        error: PropTypes.string
    })
}
export default ShoutyBox;
