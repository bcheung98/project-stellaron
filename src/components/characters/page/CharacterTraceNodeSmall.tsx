import * as React from "react"
import { useDispatch } from "react-redux"
import parse from "html-react-parser"

// Component imports
import CharacterTraceLevelUpMaterials from "./CharacterTraceLevelUpMaterials"

// MUI imports
import { useTheme, useMediaQuery, Typography, Box, Dialog, Button } from "@mui/material"

// Helper imports
import { addStat } from "../../../redux/reducers/CharacterTraceStatReducer"
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage"

// Type imports
import { TraceNodeProps } from "./CharacterTraceDisplay"

// Component for the extra trace nodes
function TraceNodeSmall({
    id,
    character,
    traces
}: TraceNodeProps) {

    const theme = useTheme()

    const matches = useMediaQuery(theme.breakpoints.up("sm"))

    const dispatch = useDispatch()

    let { rarity, materials } = character

    const [open, setOpen] = React.useState(false)
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    React.useEffect(() => {
        dispatch(addStat({ type: traces.type as string, description: traces.description }))
    }, [traces])

    return (
        <Box
            sx={{
                position: "relative",
                zIndex: 1,
                p: { xs: 0, sm: 1.5 },
                mx: { xs: "auto", sm: 0 },
                mb: "25px",
                minWidth: { lg: "10%" },
                backgroundColor: { xs: "none", sm: `${theme.table.body.backgroundColor}` },
                border: { xs: "none", sm: `1px solid ${theme.border.color}` },
                borderRadius: "5px",
            }}
            id={`_${id}`}
        >
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                    src={`${process.env.REACT_APP_URL}/stat_icons/${traces.type?.split(" ").join("_")}.png`}
                    alt={traces.name}
                    style={{
                        width: "40px",
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
                    <Typography sx={{ color: `${theme.text.color}`, fontSize: "16px", cursor: "pointer" }} onClick={() => handleClickOpen()}>
                        {parse(traces.description)}
                    </Typography>
                    <Typography sx={{ color: `${theme.text.color}`, fontSize: "16px" }}>
                        <i>{traces.unlock}</i>
                    </Typography>
                </Box>
            </Box>
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
                                src={`${process.env.REACT_APP_URL}/stat_icons/${traces.type?.split(" ").join("_")}.png`}
                                alt={traces.name}
                                style={{
                                    width: "40px",
                                    padding: "2px",
                                    border: `2px solid ${theme.border.color}`,
                                    borderRadius: "64px",
                                    cursor: "pointer"
                                }}
                                onError={ErrorLoadingImage}
                            />
                            <Box sx={{ ml: "15px" }}>
                                <Typography sx={{ color: `${theme.text.color}`, fontSize: "20px" }}>
                                    {parse(traces.description)}
                                </Typography>
                                <Typography sx={{ color: `${theme.text.color}`, fontSize: "16px" }}>
                                    <i>{traces.unlock}</i>
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Typography sx={{ color: `${theme.text.color}`, fontSize: { xs: "16px", sm: "20px" }, mb: "15px" }}>
                        Cost to Unlock Trace Node
                    </Typography>
                    <CharacterTraceLevelUpMaterials type="small" rarity={rarity} materials={materials} unlock={traces.unlock} size={matches ? "64px" : "56px"} />
                    <Button variant="contained" sx={{ height: "24px", p: 0, backgroundColor: "#d32f2f", mt: "15px" }} onClick={handleClose}>
                        <Typography sx={{ fontFamily: `${theme.font.styled.family}`, fontSize: "13.5px" }}>Close</Typography>
                    </Button>
                </Box>
            </Dialog>
        </Box>
    )

}

export default TraceNodeSmall