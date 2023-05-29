import * as React from "react";
import { connect } from "react-redux";
import { CustomTooltip } from "../../../helpers/CustomTooltip";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const Elements = ["Physical", "Fire", "Ice", "Lightning", "Wind", "Quantum", "Imaginary"]

const CharacterElementFilter = (props) => {

    return (
        <React.Fragment>
            {
                Elements.map((element, index) => (
                    <CustomTooltip key={index} title={element} arrow placement="top">
                        <img className="filter-off" id={`${element.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/elements/Element_${element}.png`} alt={element} onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                ))
            }
        </React.Fragment>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_CHAR_ELEMENT_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(CharacterElementFilter);