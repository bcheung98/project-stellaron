import * as React from "react";
import { useTheme } from "@mui/material/styles";
import parse from "html-react-parser";
import { Typography, Box, CardHeader, Avatar } from "@mui/material";
import CharacterTraceLevelUpMaterials from "./CharacterTraceLevelUpMaterials";

// Component for the main bonus abilities
export const TraceNodeMain = (props) => {

    const theme = useTheme();

    let { name, rarity, materials } = props.character;
    let { id, traces } = props;

    return (
        <Box
            sx={{
                backgroundColor: `${theme.table.body.backgroundColor}`,
                border: `1px solid ${theme.border.color}`,
                borderRadius: "5px",
                pr: "15px",
                width: "30%",
                mr: "80px",
            }}
            id={id}
        >
            <CardHeader
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}
                avatar={
                    <Avatar alt={traces.name} src={(`${process.env.REACT_APP_URL}/characters/traces/${name.split(" ").join("_").toLowerCase()}_${traces.unlock.toLowerCase()}.webp`)}
                        sx={{
                            width: "56px",
                            height: "56px",
                            border: `2px solid ${theme.border.color}`,
                        }}
                    >
                        <img src={`${process.env.REACT_APP_URL}/Unknown.png`} alt="Unknown" style={{ width: "56px", backgroundColor: `${theme.paper.backgroundColor}` }} />
                    </Avatar>
                }
                title={
                    <React.Fragment>
                        <Typography variant="h6" sx={{ color: `${theme.text.color}`, fontWeight: "450" }}>
                            {traces.name}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: `${theme.text.color}`, fontWeight: "450" }}>
                            <i>{traces.unlock}</i>
                        </Typography>
                    </React.Fragment>
                }
            />
            <Typography variant="body1" sx={{ color: `${theme.text.color}`, ml: "20px" }}>
                {parse(traces.description)}
            </Typography>
            <CharacterTraceLevelUpMaterials main rarity={rarity} materials={materials} unlock={traces.unlock} />
        </Box>
    )

}

// Component for the extra trace nodes
export const TraceNodeSmall = (props) => {

    const theme = useTheme();

    let { rarity, materials } = props.character;
    let { id, traces } = props;

    return (
        <Box
            sx={{
                backgroundColor: `${theme.table.body.backgroundColor}`,
                border: `1px solid ${theme.border.color}`,
                borderRadius: "5px",
                mr: "80px",
            }}
            id={id}
        >
            <CardHeader
                sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: "-15px",
                }}
                avatar={
                    <Avatar alt={traces.type} src={(`${process.env.REACT_APP_URL}/stat_icons/${traces.type.split(" ").join("_")}.webp`)}
                        sx={{
                            width: "48px",
                            height: "48px",
                            border: `2px solid ${theme.border.color}`,
                        }}
                    >
                        <img src={`${process.env.REACT_APP_URL}/Unknown.png`} alt="Unknown" style={{ width: "48px", backgroundColor: `${theme.paper.backgroundColor}` }} />
                    </Avatar>
                }
                title={
                    <React.Fragment>
                        <Typography variant="body1" sx={{ color: `${theme.text.color}`, fontWeight: "450" }}>
                            {parse(traces.description)}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: `${theme.text.color}`, fontWeight: "450" }}>
                            <i>{traces.unlock}</i>
                        </Typography>
                    </React.Fragment>
                }
            />
            <CharacterTraceLevelUpMaterials rarity={rarity} materials={materials} unlock={traces.unlock} />
        </Box>
    )

}