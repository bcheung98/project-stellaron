import React from "react";
import { connect } from "react-redux";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const LightconeRarityFilter = (props) => {

    return (
        <React.Fragment>
            <img className="filter-off" id="lc-5-button" src={(`${process.env.REACT_APP_URL}/stars/Icon_5_Stars.png`)} alt="5" onClick={(e) => props.setLightconeFilter(e.target.alt)} onError={ErrorLoadingImage} />
            <img className="filter-off" id="lc-4-button" src={(`${process.env.REACT_APP_URL}/stars/Icon_4_Stars.png`)} alt="4" onClick={(e) => props.setLightconeFilter(e.target.alt)} onError={ErrorLoadingImage} />
            <img className="filter-off" id="lc-3-button" src={(`${process.env.REACT_APP_URL}/stars/Icon_3_Stars.png`)} alt="3" onClick={(e) => props.setLightconeFilter(e.target.alt)} onError={ErrorLoadingImage} />
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLightconeFilter: (target) => dispatch({ type: "SET_LC_RARITY_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(LightconeRarityFilter);