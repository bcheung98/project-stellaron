import * as React from "react";
import { useTheme } from "@mui/material/styles";
import parse from "html-react-parser";
import { Typography, Box, CardHeader, Avatar } from "@mui/material";
import { CustomTooltip } from "../../helpers/CustomTooltip";

// Component for the main bonus abilities
export const TraceNodeMain = (props) => {

    const theme = useTheme();

    let { name, rarity, materials } = props.character;
    let { id, traces } = props;

    const [selected, setSelected] = React.useState(true);
    const handleSelect = () => {
        setSelected(!selected);
    }

    return (
        <CustomTooltip arrow placement="top" title={
            <Typography variant="body2" sx={{ color: `${theme.text.color}` }}>
                {parse(traces.name)}
            </Typography>}>
            <Avatar alt={traces.name} src={(`${process.env.REACT_APP_URL}/characters/traces/${name.split(" ").join("_").toLowerCase()}_${traces.unlock.toLowerCase()}.webp`)}
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

// Component for the extra trace nodes
export const TraceNodeSmall = (props) => {

    const theme = useTheme();

    let { rarity, materials } = props.character;
    let { id, traces } = props;

    const [selected, setSelected] = React.useState(true);
    const handleSelect = () => {
        setSelected(!selected);
    }

    return (
        <CustomTooltip arrow placement="top" title={
            <Typography variant="body2" sx={{ color: `${theme.text.color}` }}>
                {parse(traces.description)}
            </Typography>}
        >
            <Avatar alt={traces.type} src={(`${process.env.REACT_APP_URL}/stat_icons/${traces.type.split(" ").join("_")}.webp`)}
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

const TraceLevelUpMaterialsMain = {
    // [Credits, T2 Calyx Material, T3 Calyx Material, T4 Calyx Material, Weekly Boss Material, Tracks of Destiny]
    "5": {
        "A2": [5000, 3, 0, 0, 1, 0],
        "A4": [20000, 0, 5, 1, 1],
        "A6": [160000, 0, 0, 8, 1, 1]
    },
    "4": {
        "A2": [4000, 2, 0, 0, 1, 0],
        "A4": [16000, 0, 4, 1, 1],
        "A6": [128000, 0, 0, 6, 1, 1]
    }
}

const TraceLevelUpMaterials = {
    // [Credits, T2 Calyx Material, T3 Calyx Material, T4 Calyx Material, T2 Common Material, T3 Common Material, T4 Common Material, Weekly Boss Material, Tracks of Destiny]
    "5": {
        "A2": [5000, [3, 2], [6, 2]],
        "A3": [10000, [3, 3], [3, 3]],
        "A4": [20000, [5, 3], [4, 3]],
        "A5": [45000, [3, 4], [3, 4]],
        "A6": [160000, [8, 4], [8, 4]],
        "Lv. 1": [2500, [0, 0], [2, 2]],
        "Lv. 75": [160000, [8, 4], [8, 4]],
        "Lv. 80": [160000, [8, 4], [8, 4]]
    },
    "4": {
        "A2": [4000, [2, 2], [4, 2]],
        "A3": [8000, [2, 3], [2, 3]],
        "A4": [16000, [4, 3], [3, 3]],
        "A5": [36000, [2, 4], [2, 4]],
        "A6": [128000, [6, 4], [6, 4]],
        "Lv. 1": [2000, [0, 0], [2, 2]],
        "Lv. 75": [128000, [6, 4], [6, 4]],
        "Lv. 80": [128000, [6, 4], [6, 4]]
    }
}