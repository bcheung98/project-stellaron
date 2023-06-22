import * as React from "react";
import { connect } from "react-redux";
import { CustomTooltip } from "../../../helpers/CustomTooltip";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const WeeklyBossMats = ["Destroyer's Final Road", "Guardian's Lament"];

const CharacterWeeklyBossMatFilter = (props) => {

    return (
        <React.Fragment>
            {
                WeeklyBossMats.map((mat, index) => (
                    <CustomTooltip key={index} title={mat} arrow placement="top">
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