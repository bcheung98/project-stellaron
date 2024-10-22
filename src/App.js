import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import { useEffect } from "react"
import { connect } from "react-redux"

// Fetch imports
import { fetchCharacters, fetchLightcones, fetchRelics, fetchBanners } from "./redux/actions/fetch"

// Component imports
import Nav from "./components/Nav"
import BottomNav from "./components/BottomNav"
import Home from "./components/Home"
import CharacterBrowser from "./components/characters/CharacterBrowser"
import CharacterPage from "./components/characters/page/_CharacterPage"
import LightconeBrowser from "./components/lightcones/LightconeBrowser"
import LightconePage from "./components/lightcones/page/_LightconePage"
import RelicBrowser from "./components/relics/RelicBrowser"
import AscensionPlanner from "./components/planner/_AscensionPlanner"
import BannerArchive from "./components/banners/BannerArchive"

// MUI imports
import theme from "./themes/theme"
import { ThemeProvider } from "@mui/material/styles"
import { Box } from "@mui/material"

// Helper imports
import ScrollTopFab from "./helpers/ScrollTopFab"

function App(props) {

    useEffect(() => {
        fetchCharacters()
        fetchLightcones()
        fetchRelics()
        fetchBanners()
    }, [])

    let { fetchCharacters, fetchLightcones, fetchRelics, fetchBanners } = props

    return (
        <ThemeProvider theme={theme}>
            <Router basename={`${process.env.REACT_APP_BASENAME}`}>
                <Box id="back-to-top-anchor" />
                <Box sx={{ display: "flex" }}>
                    <Nav />
                    <Box sx={{ mx: "20px", mt: "100px", minHeight: "90vh", minWidth: "30vw", width: "95vw" }}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/characters" component={CharacterBrowser} />
                            <Route path="/characters/:char_name" children={<CharacterPage />} />
                            <Route exact path="/lightcones" component={LightconeBrowser} />
                            <Route path="/lightcones/:lc_name" children={<LightconePage />} />
                            <Route exact path="/relics" component={RelicBrowser} />
                            <Route exact path="/planner" component={AscensionPlanner} />
                            <Route exact path="/banners/" component={BannerArchive} />
                        </Switch>
                    </Box>
                </Box>
                <BottomNav />
                <ScrollTopFab />
            </Router>
        </ThemeProvider>
    )
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters,
        lightcones: state.lightcones,
        relics: state.relics,
        characterBanners: state.characterBanners,
        lightconeBanners: state.lightconeBanners,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCharacters: () => dispatch(fetchCharacters()),
        fetchLightcones: () => dispatch(fetchLightcones()),
        fetchRelics: () => dispatch(fetchRelics()),
        fetchBanners: () => dispatch(fetchBanners())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)