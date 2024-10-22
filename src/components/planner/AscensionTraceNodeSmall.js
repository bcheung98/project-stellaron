import * as React from "react";
import { connect } from "react-redux";
import { useTheme } from "@mui/material/styles";
import parse from "html-react-parser";
import { Typography, Avatar } from "@mui/material";
import { CustomTooltip } from "../_custom/CustomTooltip";

const AscensionTraceNodeSmall = (props) => {

    const theme = useTheme();

    let { updateCharacterCosts, updateTotalCosts } = props;
    let { name, rarity } = props.character;
    let { id, traces } = props;

    const GetCost = () => {
        if (selected) {
            let costArray = TraceLevelUpMaterials[rarity.toString()][traces.unlock];
            return {
                credits: costArray[0],
                calyx1: costArray[1],
                calyx2: costArray[2],
                calyx3: costArray[3],
                common1: costArray[4],
                common2: costArray[5],
                common3: costArray[6],
                weeklyBossMat: 0,
                tracksOfDestiny: 0
            }
        }
        else {
            return {
                credits: 0,
                common1: 0,
                common2: 0,
                common3: 0,
                calyx1: 0,
                calyx2: 0,
                calyx3: 0,
                weeklyBossMat: 0,
                tracksOfDestiny: 0
            }
        }
    }

    React.useEffect(() => {
        updateCharacterCosts([name, GetCost(), "trace", id])
        updateTotalCosts()
    })

    const [selected, setSelected] = React.useState(true);
    const handleSelect = () => {
        setSelected(!selected);
    }

    return (
        <CustomTooltip arrow placement="top" title={
            <Typography variant="body2" sx={{ color: `${theme.text.color}` }}>
                {parse(traces.description)} ({traces.unlock})
            </Typography>}
        >
            <Avatar alt={traces.type} src={(`${process.env.REACT_APP_URL}/stat_icons/${traces.type.split(" ").join("_")}.png`)}
                id={id}
                sx={{
                    width: "32px",
                    height: "32px",
                    border: `2px solid ${theme.border.color}`,
                    mx: "20px",
                    my: "5px",
                    cursor: "pointer",
                }}
                style={selected ? { opacity: "1" } : { opacity: "0.35" }}
                onClick={handleSelect}
            >
                <img src={`${process.env.REACT_APP_URL}/images/Unknown.png`} alt="Unknown" style={{ width: "48px", backgroundColor: `${theme.paper.backgroundColor}` }} />
            </Avatar>
        </CustomTooltip>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        updateCharacterCosts: (payload) => dispatch({ type: "UPDATE_CHAR_COSTS", payload }),
        updateTotalCosts: (payload) => dispatch({ type: "UPDATE_TOTAL_COSTS", payload })
    }
}

export default connect(null, mapDispatchToProps)(AscensionTraceNodeSmall);

const TraceLevelUpMaterials = {
    // [Credits, T2 Calyx Material, T3 Calyx Material, T4 Calyx Material, T2 Common Material, T3 Common Material, T4 Common Material]
    "5": {
        "A2": [5000, 3, 0, 0, 6, 0, 0],
        "A3": [10000, 0, 3, 0, 0, 3, 0],
        "A4": [20000, 0, 5, 0, 0, 4, 0],
        "A5": [45000, 0, 0, 3, 0, 0, 3],
        "A6": [160000, 0, 0, 8, 0, 0, 8],
        "Lv. 1": [2500, 0, 0, 0, 2, 0, 0],
        "Lv. 75": [160000, 0, 0, 8, 0, 0, 8],
        "Lv. 80": [160000, 0, 0, 8, 0, 0, 8]
    },
    "4": {
        "A2": [4000, 2, 0, 0, 4, 0, 0],
        "A3": [8000, 0, 2, 0, 0, 2, 0],
        "A4": [16000, 0, 4, 0, 0, 3, 0],
        "A5": [36000, 0, 0, 2, 0, 0, 2],
        "A6": [128000, 0, 0, 6, 0, 0, 6],
        "Lv. 1": [2000, 0, 0, 0, 2, 0, 0],
        "Lv. 75": [128000, 0, 0, 6, 0, 0, 6],
        "Lv. 80": [128000, 0, 0, 6, 0, 0, 6]
    }
}