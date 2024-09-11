import * as React from "react";
import { connect } from "react-redux";
import { CustomTooltip } from "../../../helpers/CustomTooltip";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const Worlds = ["Astral Express", "Stellaron Hunters", "Herta Space Station", "Jarilo-VI", "The Xianzhou Alliance", "Penacony", "Interastral Peace Corporation", "Cosmic"]

const CharacterWorldFilter = (props) => {

    return (
        <React.Fragment>
            {
                Worlds.map((world, index) => (
                    <CustomTooltip key={index} title={world} arrow placement="top">
                        <img className="filter-off" id={`${world.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/factions/${world.split(" ").join("_")}.png`} alt={world} onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                ))
            }
        </React.Fragment>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_CHAR_WORLD_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(CharacterWorldFilter);