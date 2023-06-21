import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, Box, AppBar } from "@mui/material";
import Xarrow from "react-xarrows";
import { TraceNodeMain, TraceNodeSmall } from "./CharacterTraceNode";
import CharacterTraceLevelUpMaterials from "./CharacterTraceLevelUpMaterials";

// Recursively displays all trace nodes
const ShowTraces = (props) => {

    let { id, traces } = props;

    return (
        <Box sx={{ display: "flex", alignItems: "center" }} >
            {
                traces.name ?
                    <TraceNodeMain id={id} character={props.character} traces={traces} />
                    :
                    <TraceNodeSmall id={id} character={props.character} traces={traces} />
            }
            <Box>
                {
                    traces?.subTraces?.map((trace, index) => {
                        let nextID = incrementID(id);
                        // If there is more than one child node, add an extra identifier to the ID
                        if (traces.subTraces?.length > 1) {
                            nextID = nextID + `-${index}`;
                        }
                        return (
                            <Box key={index} sx={{ my: "15px" }}>
                                <ShowTraces character={props.character} traces={trace} id={nextID} />
                                <Xarrow start={id} end={nextID} showHead={false} path="grid" color="lightgray" strokeWidth={3} />
                            </Box>
                        )
                    })
                }
            </Box>
        </Box>
    )

}

const CharacterTraceDisplay = (props) => {

    const theme = useTheme();

    return (
        <Box
            sx={{
                mx: "15px",
                mt: "15px",
                backgroundColor: `${theme.paper.backgroundColor}`,
                border: `1px solid ${theme.border.color}`,
                borderRadius: "5px",
            }}
        >
            <AppBar position="static"
                sx={{
                    backgroundColor: `${theme.appbar.backgroundColor}`,
                    borderBottom: `1px solid ${theme.border.color}`,
                    borderRadius: "5px 5px 0px 0px",
                }}
            >
                <Typography sx={{ m: 2, color: `${theme.text.color}` }} variant="h6">
                    Traces
                </Typography>
            </AppBar>
            {
                props.character.traces?.map((trace, index) => {
                    return (
                        <Box key={index} sx={{ mx: "20px", mt: "25px" }}>
                            <ShowTraces character={props.character} traces={trace} id={`${String.fromCharCode(index + 65)}-1`} />
                            <hr style={{ border: `.5px solid ${theme.border.color}`, marginTop: "25px", marginBottom: "25px" }} />
                        </Box>
                    )
                })
            }
            <Typography sx={{ m: 2, color: `${theme.text.color}`, fontWeight: "bolder" }} variant="h6">
                Total Cost to Unlock Bonus Abilities
            </Typography>
            <CharacterTraceLevelUpMaterials total rarity={props.character.rarity} materials={props.character.materials} />
        </Box>
    )

}

export default CharacterTraceDisplay;

const incrementID = (id) => {
    let splitID = id.split("-");
    splitID[1] = parseInt(splitID[1]) + 1;
    return splitID.join("-");
}