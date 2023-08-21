import * as React from "react";
import { connect } from "react-redux";
import { CustomTooltip } from "../../../helpers/CustomTooltip";
import { formatWeeklyBossMats } from "../../../helpers/TooltipText";
import { WeeklyBossMats } from "../../../helpers/MaterialList";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const CharacterWeeklyBossMatFilter = (props) => {

    return (
        <React.Fragment>
            {
                WeeklyBossMats.map((mat, index) => (
                    <CustomTooltip key={index} title={formatWeeklyBossMats(mat)} arrow placement="top">
                        <img className="filter-off" id={`${mat.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/materials/weekly_boss_mats/${mat.split(" ").join("_")}.png`} alt={mat} onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                ))
            }
        </React.Fragment>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_CHAR_WEEKLYBOSS_MAT_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(CharacterWeeklyBossMatFilter);