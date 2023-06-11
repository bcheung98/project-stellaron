import * as React from "react";
import { useTheme } from "@mui/material/styles";
import parse from "html-react-parser";
import { Typography, Box, AppBar, CardHeader, Avatar } from "@mui/material";

const CharacterEidolonDisplay = (props) => {

    const theme = useTheme();

    let { name, eidolon } = props.character;

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
                    Eidolons
                </Typography>
            </AppBar>
            {Object.keys(eidolon).map((key, index) => {
                return (
                    <React.Fragment key={index}>
                        <CardHeader
                            sx={{
                                display: "flex",
                                alignItems: "center",
                            }}
                            avatar={
                                <Avatar alt={eidolon[key].name} src={(`${process.env.REACT_APP_URL}/characters/eidolons/${name.split(" ").join("_").toLowerCase()}_${key}.webp`)}
                                    sx={{
                                        width: "96px",
                                        height: "96px",
                                    }}
                                >
                                    <img src={`${process.env.REACT_APP_URL}/Unknown.png`} alt="Unknown" style={{ width: "96px", backgroundColor: `${theme.paper.backgroundColor}` }} />
                                </Avatar>
                            }
                            title={
                                <React.Fragment>
                                    <Typography variant="h5" sx={{ color: `${theme.text.color}` }}>
                                        <b>{eidolon[key].name}</b>
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ color: `${theme.text.color}` }}>
                                        <i>{key.toUpperCase()}</i>
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                        <Typography variant="body1" sx={{ color: `${theme.text.color}`, ml: "20px" }}>
                            {parse(eidolon[key].description)}
                        </Typography>
                        <br />
                        {key !== "e6" && <hr style={{ border: `.5px solid ${theme.border.color}`, marginTop: "5px", marginBottom: "15px" }} />}
                    </React.Fragment>
                )
            })}
        </Box>
    )

}

export default CharacterEidolonDisplay;