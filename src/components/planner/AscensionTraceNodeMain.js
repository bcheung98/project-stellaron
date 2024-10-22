import * as React from "react";
import { connect } from "react-redux";
import { useTheme } from "@mui/material/styles";
import parse from "html-react-parser";
import { Typography, Avatar } from "@mui/material";
import { CustomTooltip } from "../_custom/CustomTooltip";

const AscensionTraceNodeMain = (props) => {

    const theme = useTheme();

    let { updateCharacterCosts, updateTotalCosts } = props;
    let { name, rarity } = props.character;
    let { id, traces } = props;

    const GetCost = () => {
        if (selected) {
            let costArray = TraceLevelUpMaterialsMain[rarity.toString()][traces.unlock];
            return {
                credits: costArray[0],
                calyx1: costArray[1],
                calyx2: costArray[2],
                calyx3: costArray[3],
                weeklyBossMat: costArray[4],
                tracksOfDestiny: costArray[5]
            }
        }
        else {
            return {
                credits: 0,
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
                {parse(traces.name)} ({traces.unlock})
            </Typography>}>
            <Avatar alt={traces.name} src={(`${process.env.REACT_APP_URL}/characters/skills/${name.split(" ").join("_").toLowerCase()}_${traces.unlock.toLowerCase()}.png`)}
                id={id}
                sx={{
                    width: "40px",
                    height: "40px",
                    border: `2px solid ${theme.border.color}`,
                    mx: "20px",
                    my: "5px",
                    cursor: "pointer",
                }}
                style={selected ? { opacity: "1" } : { opacity: "0.35" }}
                onClick={handleSelect}
            >
                <img src={`${process.env.REACT_APP_URL}/images/Unknown.png`} alt="Unknown" style={{ width: "56px", backgroundColor: `${theme.paper.backgroundColor}` }} />
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

export default connect(null, mapDispatchToProps)(AscensionTraceNodeMain);

const TraceLevelUpMaterialsMain = {
    // [Credits, T2 Calyx Material, T3 Calyx Material, T4 Calyx Material, Weekly Boss Material, Tracks of Destiny]
    "5": {
        "A2": [5000, 3, 0, 0, 1, 0],
        "A4": [20000, 0, 5, 0, 1, 1],
        "A6": [160000, 0, 0, 8, 1, 1]
    },
    "4": {
        "A2": [4000, 2, 0, 0, 1, 0],
        "A4": [16000, 0, 4, 0, 1, 1],
        "A6": [128000, 0, 0, 6, 1, 1]
    }
}