// import PropTypes from "prop-types";

const NewPeep = () => {

    return (

        <div>
            <h2>Post a new Peep to the Shouty Box!</h2>
            <form>

                <label>Type Peep message here...</label>
                <textarea></textarea>
                <input type="submit" value="submit" />

            </form>
        </div>

    )
}

NewPeep.propTypes = {

}

export default NewPeep;