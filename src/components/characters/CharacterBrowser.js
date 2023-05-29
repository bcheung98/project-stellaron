import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux";
import { Box, Typography, Paper, InputBase } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CharacterCard from "./CharacterCard";
import CharacterFilters from "./filters/_CharacterFilters";

const CharacterBrowser = (props) => {

    const theme = useTheme();

    const [searchValue, setSearchValue] = React.useState("");
    const [view, setView] = React.useState("grid");

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    }

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
                <Grid xs={3}>
                    <Paper
                        sx={{
                            border: `2px solid ${theme.border.color}`,
                            borderRadius: "5px",
                            backgroundColor: `${theme.paper.backgroundColor}`,
                            display: "flex",
                            margin: "auto",
                            height: "40px",
                            width: "84.5%",
                            marginBottom: "10px",
                            marginLeft: "35px",
                        }}
                    >
                        <InputBase
                            sx={{
                                marginLeft: "10px",
                                flex: 1,
                                color: `${theme.text.color}`,
                            }}
                            placeholder="Search"
                            onChange={handleInputChange}
                        />
                    </Paper>
                    <CharacterFilters />
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