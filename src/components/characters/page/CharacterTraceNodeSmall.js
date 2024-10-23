import * as React from "react";
import { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux";
import parse from "html-react-parser";
import { Typography, Box, CardHeader, Avatar, Dialog } from "@mui/material";
import CharacterTraceLevelUpMaterials from "./CharacterTraceLevelUpMaterials";

// Component for the extra trace nodes
const TraceNodeSmall = (props) => {

    useEffect(() => {
        addStat([traces.type, traces.description]);
    }, [])

    const theme = useTheme();

    let { rarity, materials } = props.character;
    let { id, traces, addStat } = props;

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box
            sx={{
                backgroundColor: `${theme.table.body.backgroundColor}`,
                border: `1px solid ${theme.border.color}`,
                borderRadius: "5px",
                mr: "80px",
                minWidth: "11%"
            }}
            id={id}
        >
            <CardHeader
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}
                avatar={
                    <Avatar alt={traces.type} src={(`${process.env.REACT_APP_URL}/stat_icons/${traces.type.split(" ").join("_")}.png`)}
                        sx={{
                            width: "48px",
                            height: "48px",
                            border: `2px solid ${theme.border.color}`,
                            cursor: "pointer"
                        }}
                        onClick={() => handleClickOpen()}
                    >
                        <img src={`${process.env.REACT_APP_URL}/images/Unknown.png`} alt="Unknown" style={{ width: "48px", backgroundColor: `${theme.paper.backgroundColor}` }} />
                    </Avatar>
                }
                title={
                    <React.Fragment>
                        <Typography variant="body1" sx={{ color: `${theme.text.color}`, fontWeight: "bold", cursor: "pointer" }} onClick={() => handleClickOpen()}>
                            {parse(traces.description)}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: `${theme.text.color}`, fontWeight: "bold" }}>
                            <i>{traces.unlock}</i>
                        </Typography>
                    </React.Fragment>
                }
            />
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth={false}
            >
                <Box
                    sx={{
                        p: "10px",
                        backgroundColor: `${theme.paper.backgroundColor}`,
                        border: `2px solid ${theme.border.color}`,
                        borderRadius: "5px",
                    }}
                >
                    <Typography variant="h6" sx={{ color: `${theme.text.color}`, mb: "15px" }}>
                        Cost to Unlock Trace Node
                    </Typography>
                    <CharacterTraceLevelUpMaterials type="small" rarity={rarity} materials={materials} unlock={traces.unlock} />
                </Box>
            </Dialog>
        </Box>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        addStat: (data) => dispatch({ type: "ADD_TRACE_STAT", data })
    }
}

export default connect(null, mapDispatchToProps)(TraceNodeSmall);