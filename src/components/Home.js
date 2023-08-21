import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import VersionHighlights from "./VersionHighlights";

const Home = () => {

    const theme = useTheme();

    return (
        <React.Fragment>
            <Box>
                <Box
                    sx={{
                        backgroundColor: `${theme.paper.backgroundColor}`,
                        border: `1px solid ${theme.border.color}`,
                        borderRadius: "5px",
                        display: "block",
                        margin: "auto",
                        mt: "20px",
                        width: "70%",
                        p: "20px",
                        textAlign: "center",
                        color: `${theme.text.color}`,
                    }}
                >
                    <Typography variant="h3" component="p">Welcome to PROJECT STELLARON</Typography>
                </Box>
                {/* <img src={(`${process.env.REACT_APP_URL}/images/Second_Closed_Beta_Wallpaper.webp`)} alt=""
                    style={{
                        border: `1px solid ${theme.border.color}`,
                        borderRadius: "5px",
                        display: "block",
                        margin: "auto",
                        marginTop: "30px",
                        width: "75%",
                    }}
                /> */}
                <VersionHighlights />
            </Box>
        </React.Fragment>
    )
}

export default Home;