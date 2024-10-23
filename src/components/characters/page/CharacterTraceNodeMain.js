import * as React from "react";
import { useTheme } from "@mui/material/styles";
import parse from "html-react-parser";
import { Typography, Box, CardHeader, Avatar, Dialog } from "@mui/material";
import CharacterTraceLevelUpMaterials from "./CharacterTraceLevelUpMaterials";

// Component for the main bonus abilities
const CharacterTraceNodeMain = (props) => {

    const theme = useTheme();

    let { name, rarity, materials } = props.character;
    let { id, traces } = props;

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
                    <Avatar alt={traces.name} src={(`${process.env.REACT_APP_URL}/characters/skills/${name.split(" ").join("_").toLowerCase()}_${traces.unlock.toLowerCase()}.png`)}
                        sx={{
                            width: "56px",
                            height: "56px",
                            border: `2px solid ${theme.border.color}`,
                            cursor: "pointer"
                        }}
                        onClick={() => handleClickOpen()}
                    >
                        <img src={`${process.env.REACT_APP_URL}/images/Unknown.png`} alt="Unknown" style={{ width: "56px", backgroundColor: `${theme.paper.backgroundColor}` }} />
                    </Avatar>
                }
                title={
                    <React.Fragment>
                        <Typography variant="h6" sx={{ color: `${theme.text.color}`, fontWeight: "bold", cursor: "pointer" }} onClick={() => handleClickOpen()}>
                            {traces.name}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: `${theme.text.color}`, fontWeight: "bold" }}>
                            <i>{traces.unlock}</i>
                        </Typography>
                    </React.Fragment>
                }
            />
            <Typography variant="body1" sx={{ color: `${theme.text.color}`, ml: "20px", mb: "20px" }}>
                {parse(traces.description)}
            </Typography>
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
                    <CharacterTraceLevelUpMaterials type="main" rarity={rarity} materials={materials} unlock={traces.unlock} />
                </Box>
            </Dialog>
        </Box>
    )

}

export default CharacterTraceNodeMain;