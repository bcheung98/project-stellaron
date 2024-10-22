import * as React from "react";
import { connect } from "react-redux";
import { CustomTooltip } from "../../_custom/CustomTooltip";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const Paths = ["Destruction", "Hunt", "Erudition", "Harmony", "Nihility", "Preservation", "Abundance"]

const CharacterPathFilter = (props) => {

    return (
        <React.Fragment>
            {
                Paths.map((path, index) => (
                    <CustomTooltip key={index} title={path} arrow placement="top">
                        <img className="filter-off" id={`${path.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/paths/The_${path}.png`} alt={path} onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                ))
            }
        </React.Fragment>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_CHAR_PATH_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(CharacterPathFilter);