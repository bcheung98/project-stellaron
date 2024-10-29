import Xarrow from "react-xarrows"

// Component imports
import CharacterAscensionTraceNodeMain from "./CharacterAscensionTraceNodeMain"
import CharacterAscensionTraceNodeSmall from "./CharacterAscensionTraceNodeSmall"

// MUI imports
import { useTheme, Typography, Box } from "@mui/material"

// Type imports
import { CharacterCostObject } from "../../../types/costs"
import { CharacterTraceData } from "../../../types/character/CharacterTraceData"

function CharacterAscensionTrace({ character }: { character: CharacterCostObject }) {

    const theme = useTheme()

    return (
        <Box>
            <Typography variant="h6" sx={{ color: `${theme.text.color}`, fontWeight: "bold", ml: "15px", mb: "15px" }}>
                Traces
            </Typography>
            {character.traces?.map((trace, index) => {
                return (
                    <Box key={index}>
                        <ShowTraces character={character} traces={trace} id={`${character.name} ${String.fromCharCode(index + 65)}-1`} />
                        <hr style={{ border: `.5px solid ${theme.border.color}`, marginLeft: "25px", marginRight: "25px" }} />
                    </Box>
                )
            })}
        </Box>
    )

}

export default CharacterAscensionTrace

export interface AscensionTraceNodeProps {
    character: CharacterCostObject,
    traces: CharacterTraceData,
    id: string
}

// Recursively displays all trace nodes
function ShowTraces({ character, traces, id }: AscensionTraceNodeProps) {

    return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            {traces.name ?
                <CharacterAscensionTraceNodeMain id={id} character={character} traces={traces} />
                :
                <CharacterAscensionTraceNodeSmall id={id} character={character} traces={traces} />}
            <Box>
                {traces?.subTraces?.map((trace, index) => {
                    let nextID = incrementID(id)
                    // If there is more than one child node, add an extra identifier to the ID
                    if (traces.subTraces && traces.subTraces.length > 1) {
                        nextID = nextID + `-${index}`
                    }
                    return (
                        <Box key={index}>
                            <ShowTraces character={character} traces={trace} id={nextID} />
                            <Xarrow start={id} end={nextID} showHead={false} path="grid" color="lightgray" strokeWidth={3} />
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )

}

const incrementID = (id: string) => {
    let splitID = id.split("-")
    splitID[1] = (parseInt(splitID[1]) + 1).toString()
    return splitID.join("-")
}