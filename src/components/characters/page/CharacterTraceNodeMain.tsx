import * as React from "react"
import parse from "html-react-parser"

// Component imports
import CharacterTraceLevelUpMaterials from "./CharacterTraceLevelUpMaterials"

// MUI imports
import { useTheme, useMediaQuery, Typography, Box, Dialog, Button } from "@mui/material"

// Helper imports
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage"

// Type imports
import { TraceNodeProps } from "./CharacterTraceDisplay"

// Component for the main bonus abilities
function CharacterTraceNodeMain({
    id,
    character,
    traces
}: TraceNodeProps) {

    const theme = useTheme()

    const matches = useMediaQuery(theme.breakpoints.up("sm"))

    const { name, rarity, materials } = character

    const [open, setOpen] = React.useState(false)
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Box
            sx={{
                position: "relative",
                zIndex: 1,
                p: { xs: 0, sm: 2 },
                mx: { xs: "auto", sm: 0 },
                mb: "25px",
                width: { xs: "auto", lg: "30%" },
                backgroundColor: { xs: "none", sm: `${theme.table.body.backgroundColor}` },
                border: { xs: "none", sm: `1px solid ${theme.border.color}` },
                borderRadius: "5px",
            }}
            id={`_${id}`}
        >
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                    src={`${process.env.REACT_APP_URL}/characters/skills/${name.split(" ").join("_").toLowerCase()}_${traces.unlock.toLowerCase()}.png`}
                    alt={traces.name}
                    style={{
                        width: "48px",
                        height: "48px",
                        padding: "2px",
                        border: `2px solid ${theme.border.color}`,
                        borderRadius: "64px",
                        cursor: "pointer"
                    }}
                    id={id}
                    onClick={() => handleClickOpen()}
                    onError={ErrorLoadingImage}
                />
                <Box sx={{ display: { xs: "none", sm: "block" }, ml: "20px" }}>
                    <Typography sx={{ color: `${theme.text.color}`, fontSize: { xs: "16px", sm: "20px" }, cursor: "pointer" }} onClick={() => handleClickOpen()}>
                        {traces.name}
                    </Typography>
                    <Typography sx={{ color: `${theme.text.color}`, fontSize: { xs: "12px", sm: "16px" } }}>
                        <i>{traces.unlock}</i>
                    </Typography>
                </Box>
            </Box>
            <Typography sx={{ color: `${theme.text.color}`, fontSize: { xs: "12px", sm: "16px" }, display: { xs: "none", sm: "block" }, mt: "10px" }}>
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
                        width: { xs: "80vw", sm: "100%" },
                        backgroundColor: `${theme.paper.backgroundColor}`,
                        border: `2px solid ${theme.border.color}`,
                        borderRadius: "5px",
                    }}
                >
                    <Box sx={{ display: { xs: "block", sm: "none" }, mb: "20px" }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <img
                                src={`${process.env.REACT_APP_URL}/characters/skills/${name.split(" ").join("_").toLowerCase()}_${traces.unlock.toLowerCase()}.png`}
                                alt={traces.name}
                                style={{
                                    width: "48px",
                                    height: "48px",
                                    padding: "2px",
                                    border: `2px solid ${theme.border.color}`,
                                    borderRadius: "64px",
                                    cursor: "pointer"
                                }}
                                onError={ErrorLoadingImage}
                            />
                            <Box sx={{ ml: "15px" }}>
                                <Typography sx={{ color: `${theme.text.color}`, fontSize: "20px", cursor: "pointer" }}>
                                    {traces.name}
                                </Typography>
                                <Typography sx={{ color: `${theme.text.color}`, fontSize: "16px" }}>
                                    <i>{traces.unlock}</i>
                                </Typography>
                            </Box>
                        </Box>
                        <Typography sx={{ color: `${theme.text.color}`, fontSize: "13.5px", mt: "10px" }}>
                            {parse(traces.description)}
                        </Typography>
                    </Box>
                    <Typography sx={{ color: `${theme.text.color}`, fontSize: { xs: "16px", sm: "20px" }, mb: "15px" }}>
                        Cost to Unlock Trace Node
                    </Typography>
                    <CharacterTraceLevelUpMaterials type="main" rarity={rarity} materials={materials} unlock={traces.unlock} size={matches ? "64px" : "56px"} />
                    <Button variant="contained" sx={{ height: "24px", p: 0, backgroundColor: "#d32f2f", mt: "15px" }} onClick={handleClose}>
                        <Typography sx={{ fontFamily: `${theme.font.styled.family}`, fontSize: "13.5px" }}>Close</Typography>
                    </Button>
                </Box>
            </Dialog>
        </Box>
    )

}

export default CharacterTraceNodeMain