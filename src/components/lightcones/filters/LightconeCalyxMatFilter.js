import * as React from "react";
import { connect } from "react-redux";
import { CustomTooltip } from "../../_custom/CustomTooltip";
import { formatCalyxMats } from "../../../helpers/TooltipText";
import { CalyxMats } from "../../../data/MaterialList";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const LightconeCalyxMatFilter = (props) => {

    return (
        <React.Fragment>
            {
                CalyxMats.map((mat, index) => (
                    <CustomTooltip key={index} title={formatCalyxMats(`${mat}-filter`)} arrow placement="top">
                        <img className="filter-off" id={`lc-${mat.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/materials/calyx_mats/${mat.split(" ").join("_")}3.png`} alt={mat} onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                ))
            }
        </React.Fragment>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_LC_CALYX_MAT_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(LightconeCalyxMatFilter);