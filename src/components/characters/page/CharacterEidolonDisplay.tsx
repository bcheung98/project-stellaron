import parse from "html-react-parser"

// MUI imports
import { useTheme, useMediaQuery, Typography, Box, AppBar } from "@mui/material"
import Grid from "@mui/material/Grid2"

// Helper imports
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage"

// Type imports
import { CharacterEidolons, CharacterProps } from "../../../types/character"

function CharacterEidolonDisplay({ character }: CharacterProps) {

    const theme = useTheme()

    const matches = useMediaQuery(theme.breakpoints.up("sm"))

    const { name, eidolon } = character

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
                    Eidolons
                </Typography>
            </AppBar>
            <Grid container rowSpacing={2} columnSpacing={6} sx={{ p: 3 }}>
                {
                    Object.keys(eidolon).map((key) => (
                        <Grid key={key} size={{ xs: 12, sm: 6, md: 4 }}
                            sx={{
                                p: 2,
                                backgroundColor: `${theme.table.body.backgroundColor}`,
                                border: `1px solid ${theme.border.color}`,
                                borderRadius: "5px",
                            }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center", mb: "10px" }}>
                                <img
                                    src={`${process.env.REACT_APP_URL}/characters/eidolons/${name.split(" ").join("_").toLowerCase()}_${key}.png`}
                                    alt={(eidolon[key as keyof CharacterEidolons]).name}
                                    style={{
                                        width: matches ? "48px" : "40px",
                                        padding: "2px",
                                        border: `2px solid ${theme.border.color}`,
                                        borderRadius: "64px"
                                    }}
                                    onError={ErrorLoadingImage}
                                />
                                <Box sx={{ ml: "15px" }}>
                                    <Typography sx={{ color: `${theme.text.color}`, fontSize: { xs: "16px", sm: "20px" } }}>
                                        {(eidolon[key as keyof CharacterEidolons]).name}
                                    </Typography>
                                    <Typography sx={{ color: `${theme.text.color}`, fontSize: { xs: "13.5px", sm: "16px" } }}>
                                        <i>{key.toUpperCase()}</i>
                                    </Typography>
                                </Box>
                            </Box>
                            <Typography sx={{ color: `${theme.text.color}`, fontSize: { xs: "13.5px", sm: "16px" } }}>
                                {parse((eidolon[key as keyof CharacterEidolons]).description as string)}
                            </Typography>
                            <br />
                            {/* {index !== 5 && <hr style={{ border: `.5px solid ${theme.border.color}` }} />} */}
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )

}

export default CharacterEidolonDisplay