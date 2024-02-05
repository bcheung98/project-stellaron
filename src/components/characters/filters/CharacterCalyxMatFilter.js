import * as React from "react";
import { connect } from "react-redux";
import { CustomTooltip } from "../../../helpers/CustomTooltip";
import { formatCalyxMats } from "../../../helpers/TooltipText";
import { CalyxMats } from "../../../helpers/MaterialList";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const CharacterCalyxMatFilter = (props) => {

    return (
        <React.Fragment>
            {
                CalyxMats.map((mat, index) => (
                    <CustomTooltip key={index} title={formatCalyxMats(`${mat}-filter`)} arrow placement="top">
                        <img className="filter-off" id={`${mat.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/materials/calyx_mats/${mat.split(" ").join("_")}3.png`} alt={mat} onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                ))
            }
        </React.Fragment>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_CHAR_CALYX_MAT_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(CharacterCalyxMatFilter);