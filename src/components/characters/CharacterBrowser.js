import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CharacterCard from "./CharacterCard";

const CharacterBrowser = (props) => {

    const theme = useTheme();

    let { characters } = props;

    return (
        <React.Fragment>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
                }}
            >
                <Typography variant="h4"
                    sx={{
                        mx: "25px",
                        my: "20px",
                        display: { xs: "none", md: "flex" },
                        letterSpacing: ".2rem",
                        color: `${theme.text.color}`,
                        textDecoration: "none",
                        textAlign: "center",
                    }}
                >
                    CHARACTERS
                </Typography>
            </Box>
            <Grid container sx={{ margin: "auto", width: "98%" }}>
                <Grid xs={9}>
                    <Grid container>
                        {characters.characters.length > 0 &&
                            <React.Fragment>
                                {
                                    characters.characters.map(char => <CharacterCard key={char.id} character={char} />)
                                }
                            </React.Fragment>
                        }
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters,
    }
}

export default connect(mapStateToProps)(CharacterBrowser);