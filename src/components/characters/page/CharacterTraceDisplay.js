import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux";
import { Typography, Box, AppBar, Avatar, CardHeader } from "@mui/material";
import Xarrow from "react-xarrows";
import CharacterTraceNodeMain from "./CharacterTraceNodeMain";
import CharacterTraceNodeSmall from "./CharacterTraceNodeSmall";
import CharacterTraceLevelUpMaterials from "./CharacterTraceLevelUpMaterials";

// Recursively displays all trace nodes
const ShowTraces = (props) => {

    let { id, traces } = props;

    return (
        <Box sx={{ display: "flex", alignItems: "center" }} >
            {
                traces.name ?
                    <CharacterTraceNodeMain id={id} character={props.character} traces={traces} />
                    :
                    <CharacterTraceNodeSmall id={id} character={props.character} traces={traces} />
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
            <Box sx={{ px: 3 }}>
                {
                    props.character.traces?.map((trace, index) => {
                        return (
                            <Box key={index} sx={{ mt: "25px" }}>
                                <ShowTraces character={props.character} traces={trace} id={`${String.fromCharCode(index + 65)}-1`} />
                                <hr style={{ border: `.5px solid ${theme.border.color}`, marginTop: "25px", marginBottom: "25px" }} />
                            </Box>
                        )
                    })
                }
                <Box>
                    <Typography sx={{ my: 2, color: `${theme.text.color}`, fontWeight: "bolder" }} variant="h6">
                        Total Stat Bonus From Traces
                    </Typography>
                    {
                        Object.keys(props.traceStats).map((trace, index) => (
                            <Box key={index} sx={{ display: "inline-flex" }}>
                                <CardHeader
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        mr: "20px",
                                        px: 0
                                    }}
                                    avatar={
                                        <Avatar alt={trace} src={(`${process.env.REACT_APP_URL}/stat_icons/${trace.split(" ").join("_")}.png`)}
                                            sx={{
                                                width: "48px",
                                                height: "48px",
                                                border: `2px solid ${theme.border.color}`
                                            }}
                                        >
                                            <img src={`${process.env.REACT_APP_URL}/images/Unknown.png`} alt="Unknown" style={{ width: "48px", backgroundColor: `${theme.paper.backgroundColor}` }} />
                                        </Avatar>
                                    }
                                    title={
                                        <React.Fragment>
                                            {
                                                ["SPD"].includes(trace) ?
                                                    <Typography variant="h6" sx={{ color: `${theme.text.color}`, fontWeight: "bold" }}>
                                                        {trace} +{parseFloat(props.traceStats[trace].toFixed(1))}
                                                    </Typography>
                                                    :
                                                    <Typography variant="h6" sx={{ color: `${theme.text.color}`, fontWeight: "bold" }}>
                                                        {trace} +{parseFloat(props.traceStats[trace].toFixed(1))}%
                                                    </Typography>
                                            }
                                        </React.Fragment>
                                    }
                                />
                            </Box>
                        ))
                    }
                </Box>
                <hr style={{ border: `.5px solid ${theme.border.color}`, margin: "25px 0px 25px 0px" }} />
                <Box sx={{ mb: "25px" }}>
                    <Typography sx={{ my: 2, color: `${theme.text.color}`, fontWeight: "bolder" }} variant="h6">
                        Total Cost to Unlock Bonus Abilities
                    </Typography>
                    <CharacterTraceLevelUpMaterials type="total" rarity={props.character.rarity} materials={props.character.materials} />
                </Box>
            </Box>
        </Box>
    )

}

const mapStateToProps = (state) => {
    return {
        traceStats: state.traceStats.traceStats,
    }
}

export default connect(mapStateToProps)(CharacterTraceDisplay);

const incrementID = (id) => {
    let splitID = id.split("-");
    splitID[1] = parseInt(splitID[1]) + 1;
    return splitID.join("-");
}