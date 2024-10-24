import * as React from "react"
import { useSelector } from "react-redux"

// Component imports
import CustomCard from "../_custom/CustomCard"
import SearchBar from "../_custom/SearchBar"
import LightconeList from "./LightconeList"
import LightconeFilters from "./LightconeFilters"

// MUI imports
import { useTheme, useMediaQuery, Box, Typography, Button, ToggleButtonGroup, Dialog, SwipeableDrawer } from "@mui/material"
import Grid from "@mui/material/Grid2"
import ViewModuleSharpIcon from "@mui/icons-material/ViewModuleSharp"
import ListSharpIcon from "@mui/icons-material/ListSharp"
import FilterAltIcon from "@mui/icons-material/FilterAlt"

// Helper imports
import { filterLightcones } from "../../helpers/filterLightcones"
import { CustomToggleButton } from "../_custom/CustomToggleButton"

// Type imports
import { RootState } from "../../redux/store"

function LightconeBrowser() {

    const theme = useTheme()

    const matches = useMediaQuery(theme.breakpoints.up("sm"))

    const lightcones = useSelector((state: RootState) => state.lightcones)
    const lightconeFilters = useSelector((state: RootState) => state.lightconeFilters)

    const [searchValue, setSearchValue] = React.useState("")
    const handleInputChange = (event: React.BaseSyntheticEvent) => {
        setSearchValue(event.target.value)
    }

    const defaultView = "grid"
    const [view, setView] = React.useState(defaultView)
    const handleView = (event: React.BaseSyntheticEvent, newView: string) => {
        if (newView !== null) {
            setView(newView)
        }
    }

    const [dialogOpen, setDialogOpen] = React.useState(false)
    const handleDialogOpen = () => {
        setDialogOpen(true)
    }
    const handleDialogClose = () => {
        setDialogOpen(false)
    }

    const [drawerOpen, setDrawerOpen] = React.useState(false)
    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === "keydown" &&
                    ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
                ) {
                    return
                }
                setDrawerOpen(open)
            }

    document.title = `Light Cones ${process.env.REACT_APP_DOCUMENT_HEADER}`

    return (
        <React.Fragment>
            <Grid container rowSpacing={2} columnSpacing={4} sx={{ mb: "20px" }}>
                <Grid size={{ xs: 12, sm: "auto" }}>
                    <Box sx={{ display: "flex" }}>
                        <Typography
                            sx={{
                                mr: "25px",
                                fontFamily: `${theme.font.styled.family}`,
                                fontSize: "24px",
                                color: `${theme.text.color}`,
                                lineHeight: "40px"
                            }}
                        >
                            Light Cones
                        </Typography>
                        <ToggleButtonGroup value={view} exclusive onChange={handleView}>
                            <CustomToggleButton value="grid" size="small">
                                <ViewModuleSharpIcon sx={{ color: `white` }} />
                            </CustomToggleButton>
                            <CustomToggleButton value="list" size="small">
                                <ListSharpIcon sx={{ color: `white` }} />
                            </CustomToggleButton>
                        </ToggleButtonGroup>
                    </Box>
                </Grid>
                <Grid size="grow">
                    <Box sx={{ display: "flex" }}>
                        <Button
                            onClick={matches ? () => handleDialogOpen() : toggleDrawer(true)}
                            variant="contained"
                            startIcon={<FilterAltIcon sx={{ color: `${theme.text.color}` }} />}
                            sx={{ px: 3, mr: "25px" }}
                        >
                            <Typography sx={{ fontFamily: `${theme.font.styled.family}`, fontSize: { xs: "12px", sm: "14px" } }}>
                                Filters
                            </Typography>
                        </Button>
                        <SearchBar placeholder="Search" onChange={handleInputChange} size={{ width: "80%", height: "40px" }} />
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid size="grow">
                    {
                        lightcones.lightcones.length > 0 &&
                        <React.Fragment>
                            {
                                view === "grid" ?
                                    <Grid container spacing={2}>
                                        {filterLightcones(lightcones.lightcones, lightconeFilters, searchValue).sort((a, b) => a.rarity > b.rarity ? -1 : 1).map(lightcone => <CustomCard key={lightcone.id} name={lightcone.name} displayName={lightcone.displayName} type="lightcone" variant="avatar" rarity={lightcone.rarity} info={{ path: lightcone.path }} />)}
                                    </Grid>
                                    :
                                    <LightconeList lightcones={filterLightcones(lightcones.lightcones, lightconeFilters, searchValue)} />
                            }
                        </React.Fragment>
                    }
                </Grid>
                {/* {
                    matches && filterPosition === "side" ?
                        <Grid size={2.75}>
                            <CharacterFilters />
                        </Grid>
                        :
                        null
                } */}
                {
                    matches ?
                        <Dialog
                            open={dialogOpen}
                            onClose={handleDialogClose}
                        >
                            <LightconeFilters handleClose={handleDialogClose} />
                        </Dialog>
                        :
                        <SwipeableDrawer
                            anchor="bottom"
                            open={drawerOpen}
                            onClose={toggleDrawer(false)}
                            onOpen={toggleDrawer(true)}
                            sx={{
                                [`& .MuiDrawer-paper`]: {
                                    borderTop: `2px solid ${theme.border.color}`,
                                    backgroundColor: `${theme.appbar.backgroundColor}`,
                                    height: "auto",
                                    maxHeight: "88%"
                                }
                            }}
                        >
                            <LightconeFilters handleClose={toggleDrawer(false)} />
                        </SwipeableDrawer>
                }
            </Grid>
        </React.Fragment>
    )
}

export default LightconeBrowser