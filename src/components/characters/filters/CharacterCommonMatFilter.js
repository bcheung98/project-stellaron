import * as React from "react";
import { connect } from "react-redux";
import { CustomTooltip } from "../../../helpers/CustomTooltip";
import { formatCommonMats } from "../../../helpers/TooltipText";
import { CommonMats } from "../../../helpers/MaterialList";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const CharacterCommonMatFilter = (props) => {

    return (
        <React.Fragment>
            {
                CommonMats.map((mat, index) => (
                    <CustomTooltip key={index} title={formatCommonMats(mat)} arrow placement="top">
                        <img className="filter-off" id={`${mat.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/materials/common_mats/${mat.split(" ").join("_")}3.png`} alt={mat} onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                ))
            }
        </React.Fragment>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_CHAR_COMMON_MAT_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(CharacterCommonMatFilter);