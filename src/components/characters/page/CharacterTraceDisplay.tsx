import * as React from "react"
import { useSelector } from "react-redux"
import Xarrow, { anchorType } from "react-xarrows"

// Component imports
import CharacterTraceNodeMain from "./CharacterTraceNodeMain"
import CharacterTraceNodeSmall from "./CharacterTraceNodeSmall"
import CharacterTraceLevelUpMaterials from "./CharacterTraceLevelUpMaterials"

// MUI imports
import { useTheme, useMediaQuery, Typography, Box, AppBar } from "@mui/material"

// Helper imports
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage"

// Type imports
import { RootState } from "../../../redux/store"
import { CharacterTraceData } from "../../../types/character/CharacterTraceData"
import { Character, CharacterProps } from "../../../types/character"

export interface TraceNodeProps {
    id: string,
    character: Character,
    traces: CharacterTraceData
}

// Recursively displays all trace nodes
function ShowTraces({
    id,
    character,
    traces
}: TraceNodeProps) {

    const theme = useTheme()

    const matches_xs_up = useMediaQuery(theme.breakpoints.up("xs"))
    const matches_sm_up = useMediaQuery(theme.breakpoints.up("sm"))
    const matches_lg_up = useMediaQuery(theme.breakpoints.up("lg"))

    let startAnchor: anchorType, endAnchor: anchorType
    if (matches_lg_up) {
        [startAnchor, endAnchor] = ["right", "left"]
    }
    else if (matches_sm_up) {
        [startAnchor, endAnchor] = ["bottom", "left"]
    }
    else if (matches_xs_up) {
        [startAnchor, endAnchor] = ["bottom", "top"]
    }

    return (
        <Box
            sx={{
                display: { xs: "block", lg: "flex" },
                alignItems: "center",
            }}
        >
            <Box sx={{ display: { xs: "flex", sm: "inline-block", lg: "contents" } }}>
                {
                    traces.name ?
                        <CharacterTraceNodeMain id={id} character={character} traces={traces} />
                        :
                        <CharacterTraceNodeSmall id={id} character={character} traces={traces} />
                }
            </Box>
            <Box sx={{ display: { xs: "flex", sm: "block" } }}>
                {
                    traces.subTraces?.map((trace, index) => {
                        let nextID = incrementID(id)
                        // If there is more than one child node, add an extra identifier to the ID
                        if (traces.subTraces && traces.subTraces.length > 1) {
                            nextID = nextID + `-${index}`
                        }
                        return (
                            <Box
                                key={index}
                                sx={{
                                    flexGrow: 0.75,
                                    mx: { xs: "auto", sm: "64px", md: "96px", lg: "80px" },
                                }}
                            >
                                <ShowTraces character={character} traces={trace} id={nextID} />
                                <Xarrow
                                    start={id}
                                    end={nextID}
                                    showXarrow={!matches_lg_up}
                                    showHead={false}
                                    path="grid"
                                    color="lightgray"
                                    strokeWidth={3}
                                    startAnchor={startAnchor}
                                    endAnchor={endAnchor}
                                />
                                <Xarrow
                                    start={`_${id}`}
                                    end={`_${nextID}`}
                                    showXarrow={matches_lg_up}
                                    showHead={false}
                                    path="grid"
                                    color="lightgray"
                                    strokeWidth={3}
                                    startAnchor={startAnchor}
                                    endAnchor={endAnchor}
                                />
                            </Box>
                        )
                    })
                }
            </Box>
        </Box>
    )

}

function CharacterTraceDisplay({ character }: CharacterProps) {

    const theme = useTheme()

    const traceStats = useSelector((state: RootState) => state.traceStats)

    return (
        <Box
            sx={{
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
                    mb: "25px",
                }}
            >
                <Typography sx={{ m: 2, color: `${theme.text.color}` }} variant="h6">
                    Traces
                </Typography>
            </AppBar>
            <Box sx={{ p: 2 }}>
                {
                    character.traces?.map((trace, index) => {
                        return (
                            <Box key={index}>
                                <ShowTraces character={character} traces={trace} id={`${String.fromCharCode(index + 65)}-1`} />
                                <hr style={{ border: `.5px solid ${theme.border.color}`, marginTop: "0px", marginBottom: "25px" }} />
                            </Box>
                        )
                    })
                }
                <Box>
                    <Typography sx={{ color: `${theme.text.color}`, fontSize: { xs: "16px", sm: "20px" }, mb: "15px" }}>
                        Total Stat Bonus From Traces
                    </Typography>
                    {
                        Object.keys(traceStats).map((trace, index) => (
                            <Box key={index} sx={{ display: "flex", alignItems: "center", mb: "10px" }}>
                                <img
                                    src={`${process.env.REACT_APP_URL}/stat_icons/${trace.split(" ").join("_")}.png`}
                                    alt={trace}
                                    style={{
                                        width: "40px",
                                        padding: "2px",
                                        border: `2px solid ${theme.border.color}`,
                                        borderRadius: "64px",
                                    }}
                                    onError={ErrorLoadingImage}
                                />
                                <Box sx={{ ml: "10px" }}>
                                    {
                                        ["SPD"].includes(trace) ?
                                            <Typography sx={{ color: `${theme.text.color}`, fontSize: "16px" }}>
                                                {trace} +{parseFloat(traceStats[trace].toFixed(1))}
                                            </Typography>
                                            :
                                            <Typography sx={{ color: `${theme.text.color}`, fontSize: "16px" }}>
                                                {trace} +{parseFloat(traceStats[trace].toFixed(1))}%
                                            </Typography>
                                    }
                                </Box>
                            </Box>
                        ))
                    }
                </Box>
                <hr style={{ border: `.5px solid ${theme.border.color}`, margin: "25px 0px 25px 0px" }} />
                <Box sx={{ mb: "25px" }}>
                    <Typography sx={{ color: `${theme.text.color}`, fontSize: { xs: "16px", sm: "20px" }, mb: "15px" }}>
                        Total Cost to Unlock Bonus Abilities
                    </Typography>
                    <CharacterTraceLevelUpMaterials type="total" rarity={character.rarity} materials={character.materials} />
                </Box>
            </Box>
        </Box>
    )

}

export default CharacterTraceDisplay

const incrementID = (id: string) => {
    let splitID = id.split("-")
    splitID[1] = (parseInt(splitID[1]) + 1).toString()
    return splitID.join("-")
}