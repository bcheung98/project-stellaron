import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, Box } from "@mui/material";
import Xarrow from "react-xarrows";
import AscensionTraceNodeMain from "./AscensionTraceNodeMain";
import AscensionTraceNodeSmall from "./AscensionTraceNodeSmall";

const CharacterAscensionTraces = (props) => {

    const theme = useTheme();

    return (
        <Box>
            <Typography variant="h6" sx={{ color: `${theme.text.color}`, fontWeight: "bold", ml: "15px", mb: "15px" }}>
                Traces
            </Typography>
            {
                props.character.traces?.map((trace, index) => {
                    return (
                        <Box key={index}>
                            <ShowTraces character={props.character} traces={trace} id={`${props.character.name} ${String.fromCharCode(index + 65)}-1`} />
                            <hr style={{ border: `.5px solid ${theme.border.color}`, marginLeft: "25px", marginRight: "25px" }} />
                        </Box>
                    )
                })
            }
        </Box>
    )

}

export default CharacterAscensionTraces;

// Recursively displays all trace nodes
const ShowTraces = (props) => {

    let { id, traces } = props;

    return (
        <Box sx={{ display: "flex", alignItems: "center" }} >
            {
                traces.name ?
                    <AscensionTraceNodeMain id={id} character={props.character} traces={traces} />
                    :
                    <AscensionTraceNodeSmall id={id} character={props.character} traces={traces} />
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
                            <Box key={index}>
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

const incrementID = (id) => {
    let splitID = id.split("-");
    splitID[1] = parseInt(splitID[1]) + 1;
    return splitID.join("-");
}