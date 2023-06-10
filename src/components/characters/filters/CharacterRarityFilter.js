import React from "react";
import { connect } from "react-redux";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const CharacterRarityFilter = (props) => {

    return (
        <React.Fragment>
            <img className="filter-off" id="5-button" src={(`${process.env.REACT_APP_URL}/stars/Icon_5_Stars.png`)} alt="5" onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
            <img className="filter-off" id="4-button" src={(`${process.env.REACT_APP_URL}/stars/Icon_4_Stars.png`)} alt="4" onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_CHAR_RARITY_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(CharacterRarityFilter);