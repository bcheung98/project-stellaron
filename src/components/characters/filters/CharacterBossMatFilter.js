import * as React from "react";
import { connect } from "react-redux";
import { CustomTooltip } from "../../_custom/CustomTooltip";
import { BossMats } from "../../../data/MaterialList";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const BossMatFilter = (props) => {

    return (
        <React.Fragment>
            {
                BossMats.map((mat, index) => (
                    <CustomTooltip key={index} title={`${mat}`} arrow placement="top">
                        <img className="filter-off" id={`${mat.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/materials/boss_mats/${mat.split(" ").join("_")}.png`} alt={mat} onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                ))
            }
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_CHAR_BOSS_MAT_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(BossMatFilter);