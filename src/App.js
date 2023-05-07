import * as React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import { ThemeProvider } from '@mui/material/styles';
import { defaultTheme as theme } from "./Theme";
import { fetchCharacters } from "./redux/actions/fetchCharacters";
import Nav from "./components/Nav";
import CharacterBrowser from "./components/characters/CharacterBrowser";
import { AppBar, Typography, Box, IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

const App = (props) => {

    useEffect(() => {
        fetchCharacters();
    }, [])

    let { fetchCharacters } = props;

    return (
        <ThemeProvider theme={theme}>
            <Router basename="project-stellaron">
                <Box id="back-to-top-anchor" />
                <Nav />
                <Switch>
                    <Route exact path="/" component={CharacterBrowser} />
                </Switch>
                <AppBar position="static" sx={{
                    mt: 10,
                    mb: -5,
                    pt: 2,
                    textAlign: "center",
                    backgroundColor: `${theme.appbar.backgroundColor}`,
                    borderTop: `1px solid ${theme.border.color}`,
                }}>
                    <Typography sx={{ mb: "5px" }} variant="body2">Project Stellaron is not affiliated with HoYoverse.<br />Honkai: Star Rail, images and data are registered trademarks of HoYoverse.</Typography>
                    <Box>
                        <IconButton disableRipple href={"https://github.com/bcheung98/project-stellaron"} target="_blank" color="inherit">
                            <GitHubIcon />
                        </IconButton>
                    </Box>
                </AppBar>
            </Router >
        </ThemeProvider>

    );
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCharacters: () => dispatch(fetchCharacters()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
