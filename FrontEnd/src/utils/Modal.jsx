import PropTypes from "prop-types";

const Modal = ({ handleClose, message }) => {

    return (
        <div className="modal fade" role="alertdialog">
            <section className="modal">
                <p>{message}</p>
                <button onClick={handleClose}>Close</button>
            </section>
        </div>
    );
};

Modal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    message: PropTypes.string
}

export default Modal;
