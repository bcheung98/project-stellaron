import * as React from "react";
import { connect } from "react-redux";
import { CustomTooltip } from "../../../helpers/CustomTooltip";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const Paths = ["Destruction", "Hunt", "Erudition", "Harmony", "Nihility", "Preservation", "Abundance"]

const LightconePathFilter = (props) => {

    return (
        <React.Fragment>
            {
                Paths.map((path, index) => (
                    <CustomTooltip key={index} title={path} arrow placement="top">
                        <img className="filter-off" id={`lc-${path.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/paths/Path_The_${path}.png`} alt={path} onClick={(e) => props.setLightconeFilter(e.target.alt)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                ))
            }
        </React.Fragment>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        setLightconeFilter: (target) => dispatch({ type: "SET_LC_PATH_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(LightconePathFilter);