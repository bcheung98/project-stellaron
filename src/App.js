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
import { fetchLightcones } from "./redux/actions/fetchLightcones";
import Home from "./components/Home";
import Nav from "./components/Nav";
import CharacterBrowser from "./components/characters/CharacterBrowser";
import CharacterPage from "./components/characters/page/_CharacterPage";
import LightconeBrowser from "./components/lightcones/LightconeBrowser";
import { AppBar, Typography, Box, IconButton, Fade, useScrollTrigger, Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import GitHubIcon from '@mui/icons-material/GitHub';

const App = (props) => {

    useEffect(() => {
        fetchCharacters();
        fetchLightcones();
    }, [])

    let { fetchCharacters, fetchLightcones } = props;

    return (
        <ThemeProvider theme={theme}>
            <Router basename="project-stellaron">
                <Box id="back-to-top-anchor" />
                <Nav />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/characters" component={CharacterBrowser} />
                    <Route path="/character/:char_name" children={<CharacterPage />} />
                    <Route exact path="/lightcones" component={LightconeBrowser} />
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
                <ScrollTop {...props}>
                    <Fab size="medium" disableRipple color="primary">
                        <KeyboardArrowUpIcon sx={{ color: `${theme.text.color}` }} />
                    </Fab>
                </ScrollTop>
            </Router >
        </ThemeProvider>

    );
}

function ScrollTop(props) {
    const { children } = props;
    const trigger = useScrollTrigger({ threshold: 600 });
    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            "#back-to-top-anchor",
        );
        if (anchor) {
            anchor.scrollIntoView({
                block: "center",
            });
        }
    };

    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                sx={{ position: "fixed", bottom: 96, right: 16 }}
            >
                {children}
            </Box>
        </Fade>
    );
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters,
        lightcones: state.lightcones,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCharacters: () => dispatch(fetchCharacters()),
        fetchLightcones: () => dispatch(fetchLightcones()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
