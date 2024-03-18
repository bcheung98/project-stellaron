import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux";
import { Box, Typography, Paper, InputBase, Stack, ToggleButtonGroup } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import ListSharpIcon from '@mui/icons-material/ListSharp';
import { CustomToggleButton } from "../../helpers/CustomToggleButton";
import CharacterCard from "./CharacterCard";
import CharacterList from "./CharacterList";
import CharacterFilters from "./filters/_CharacterFilters";
import { filterCharacters } from "../../helpers/FilterCharacters";

const CharacterBrowser = (props) => {

    const theme = useTheme();

    const [searchValue, setSearchValue] = React.useState("");
    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    }

    const [view, setView] = React.useState("grid");
    const handleView = (event, newView) => {
        if (newView !== null) {
            setView(newView);
        }
    }

    let { characters, characterFilters } = props;

    document.title = "Characters - Project Stellaron";

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
                <Stack direction="row" spacing={4}>
                    <ToggleButtonGroup value={view} exclusive onChange={handleView} sx={{ border: `1px solid ${theme.border.color}` }}>
                        <CustomToggleButton value="grid">
                            <AppsSharpIcon sx={{ color: "white" }} />
                        </CustomToggleButton>
                        <CustomToggleButton value="list">
                            <ListSharpIcon sx={{ color: "white" }} />
                        </CustomToggleButton>
                    </ToggleButtonGroup>
                </Stack>
            </Box>
            <Grid container sx={{ margin: "auto", width: "98%" }}>
                <Grid xs={9}>
                    <Grid container>
                        {characters.characters.length > 0 &&
                            <React.Fragment>
                                {
                                    view === "grid" ?
                                        filterCharacters(characters.characters, characterFilters, searchValue).map(char => <CharacterCard key={char.id} character={char} showMaterials />)
                                        :
                                        <CharacterList characters={filterCharacters(characters.characters, characterFilters, searchValue)} />
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
                                fontFamily: "DIN, Roboto, Segoe UI",
                                fontWeight: "bold",
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
        characterFilters: state.characterFilters,
    }
}

export default connect(mapStateToProps)(CharacterBrowser);