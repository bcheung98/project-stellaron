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
                }}
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
                }}
            >
                <img src={`${process.env.REACT_APP_URL}/images/Unknown.png`} alt="Unknown" style={{ width: "48px", backgroundColor: `${theme.paper.backgroundColor}` }} />
            </Avatar>
        </CustomTooltip>
    )

}