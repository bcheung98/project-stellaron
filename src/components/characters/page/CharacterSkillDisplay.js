import * as React from "react";
import { useTheme } from "@mui/material/styles";
import parse from "html-react-parser";
import { Typography, Box, AppBar } from "@mui/material";

const CharacterSkillDisplay = (props) => {

    const theme = useTheme();

    let { name, element, path, skills } = props.character;

    return (
        <Box
            sx={{
                mx: "15px",
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
                    Skills
                </Typography>
            </AppBar>
        </Box>
    )

}

export default CharacterSkillDisplay;