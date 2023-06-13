import * as React from "react";
import { useTheme } from "@mui/material/styles";
import parse from "html-react-parser";
import { Typography, Box, AppBar, CardHeader, Avatar } from "@mui/material";
import Xarrow from "react-xarrows";

const CharacterTraceDisplay = (props) => {

    const theme = useTheme();

    let { name } = props.character;

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
                            <ShowTraces name={name} traces={trace} id={`${String.fromCharCode(index + 65)}-1`} />
                            <hr style={{ border: `.5px solid ${theme.border.color}`, marginTop: "25px", marginBottom: "25px" }} />
                        </Box>
                    )
                })
            }
        </Box>
    )

}

export default CharacterTraceDisplay;

// Recursively displays all trace nodes
const ShowTraces = (props) => {

    const theme = useTheme();

    let { name, traces, id } = props;

    return (
        <Box sx={{ display: "flex", alignItems: "center" }} >
            {
                traces.name ?
                    // Component for the bonus abilities
                    <Box
                        sx={{
                            backgroundColor: `${theme.table.body.backgroundColor}`,
                            border: `1px solid ${theme.border.color}`,
                            borderRadius: "5px",
                            pr: "15px",
                            py: "10px",
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
                    </Box>
                    :
                    // Component for the extra trace nodes
                    <React.Fragment>
                        {
                            traces.description &&
                            <Box
                                sx={{
                                    backgroundColor: `${theme.table.body.backgroundColor}`,
                                    border: `1px solid ${theme.border.color}`,
                                    borderRadius: "5px",
                                    mr: "60px",
                                }}
                                id={id}
                            >
                                <CardHeader
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
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
                            </Box>
                        }
                    </React.Fragment>
            }
            <Box>
                {
                    traces?.subTraces?.map((trace, index) => {
                        let nextID = "";
                        // If there is more than one child node, add an extra identifier to the ID
                        if (traces.subTraces?.length > 1) {
                            nextID = incrementID(id) + `-${index}`;
                        }
                        else {
                            nextID = incrementID(id);
                        }
                        return (
                            <Box key={index} sx={{ my: "15px" }}>
                                <ShowTraces name={name} traces={trace} id={nextID} />
                                <Xarrow start={id} end={nextID} showHead={false} path="grid" />
                            </Box>
                        )
                    })
                }
            </Box>
        </Box>
    )

}

const incrementID = (id) => {
    let splitID = id.split("-")
    splitID[1] = parseInt(splitID[1]) + 1;
    return splitID.join("-");
}