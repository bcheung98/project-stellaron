import * as React from "react";
import { connect } from "react-redux";
import { CustomTooltip } from "../../../helpers/CustomTooltip";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const BossMaterials = ["Broken Teeth of Iron Wolf", "Endotherm Chitin", "Enigmatic Ectostella", "Gelid Chitin", "Golden Crown of the Past Shadow", "Horn of Snow", "Lightning Crown of the Past Shadow", "Shape Shifter's Lightning Staff", "Storm Eye", "Void Cast Iron", "Ascendant Debris"];

const BossMatFilter = (props) => {

    return (
        <React.Fragment>
            {
                BossMaterials.map((mat, index) => (
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