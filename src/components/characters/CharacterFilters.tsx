import * as React from "react"
import { useSelector, useDispatch } from "react-redux"

// Component imports
import { Accordion, AccordionDetails, AccordionSummary } from "../_custom/CustomAccordion"
import FilterButton from "../_custom/FilterButton"

// MUI imports
import { useTheme, Typography, Box, AppBar, IconButton } from "@mui/material"
import Grid from "@mui/material/Grid2"
import CloseIcon from "@mui/icons-material/Close"

// Helper imports
import { CharacterFilterState, setElement, setPath, setRarity, setCalyxMats, setCommonMats, setBossMats, setWeeklyBossMats, setWorld } from "../../redux/reducers/CharacterFilterReducer"
import { CalyxMats, CommonMats, BossMats, WeeklyBossMats } from "../../data/MaterialList"
import { formatCalyxMats, formatCommonMats, formatWeeklyBossMats } from "../../helpers/TooltipText"

// Type imports
import { RootState } from "../../redux/store"

function CharacterFilters(props: {
    handleClose?: (arg0: any) => void
}) {

    const theme = useTheme()
    
    const dispatch = useDispatch()

    const characterFilters = useSelector((state: RootState) => state.characterFilters)

    const filters: {
        name: string,
        tag: string,
        component: React.ReactNode
    }[] = [
            {
                name: "Combat Type",
                tag: "element",
                component:
                    <Grid container spacing={1}>
                        {["Physical", "Fire", "Ice", "Lightning", "Wind", "Quantum", "Imaginary"].map((element, index) => <FilterButton key={index} tag={element} img={`elements/Element_${element}`} active={characterFilters.element.includes(element)} onClick={() => dispatch(setElement(element))} />)}
                    </Grid>
            },
            {
                name: "Path",
                tag: "path",
                component:
                    <Grid container spacing={1}>
                        {["Destruction", "Hunt", "Erudition", "Harmony", "Nihility", "Preservation", "Abundance"].map((path, index) => <FilterButton key={index} tag={path} img={`paths/The_${path}`} active={characterFilters.path.includes(path)} onClick={() => dispatch(setPath(path))} />)}
                    </Grid>
            },
            {
                name: "Rarity",
                tag: "rarity",
                component:
                    <Grid container spacing={1}>
                        {[5, 4].map((rarity, index) => <FilterButton key={index} variant="text" tag={[...Array(rarity).keys()].map(() => "✦").join("")} active={characterFilters.rarity.includes(rarity)} onClick={() => dispatch(setRarity(rarity))} />)}
                    </Grid>
            },
            {
                name: "Calyx Material",
                tag: "calyxMat",
                component:
                    <Grid container spacing={1}>
                        {CalyxMats.map((material, index) => <FilterButton key={index} tag={formatCalyxMats(`${material}-filter`)} img={`materials/calyx_mats/${material.split(" ").join("_")}3`} active={characterFilters.calyxMat.includes(material)} onClick={() => dispatch(setCalyxMats(material))} />)}
                    </Grid>
            },
            {
                name: "Common Material",
                tag: "commonMat",
                component:
                    <Grid container spacing={1}>
                        {CommonMats.map((material, index) => <FilterButton key={index} tag={formatCommonMats(material)} img={`materials/common_mats/${material.split(" ").join("_")}3`} active={characterFilters.commonMat.includes(material)} onClick={() => dispatch(setCommonMats(material))} />)}
                    </Grid>
            },
            {
                name: "Stagnant Shadow Material",
                tag: "bossMat",
                component:
                    <Grid container spacing={1}>
                        {BossMats.map((material, index) => <FilterButton key={index} tag={material} img={`materials/boss_mats/${material.split(" ").join("_")}`} active={characterFilters.bossMat.includes(material)} onClick={() => dispatch(setBossMats(material))} />)}
                    </Grid>
            },
            {
                name: "Echo of War Material",
                tag: "weeklyBossMat",
                component:
                    <Grid container spacing={1}>
                        {WeeklyBossMats.map((material, index) => <FilterButton key={index} tag={formatWeeklyBossMats(material)} img={`materials/weekly_boss_mats/${material.split(" ").join("_")}`} active={characterFilters.bossMat.includes(material)} onClick={() => dispatch(setWeeklyBossMats(material))} />)}
                    </Grid>
            },
            {
                name: "World",
                tag: "world",
                component:
                    <Grid container spacing={1}>
                        {["Astral Express", "Stellaron Hunters", "Herta Space Station", "Jarilo-VI", "The Xianzhou Alliance", "Penacony", "Interastral Peace Corporation", "Cosmic"].map((world, index) => <FilterButton key={index} tag={world} img={`factions/${world.split(" ").join("_")}`} active={characterFilters.world.includes(world)} onClick={() => dispatch(setWorld(world))} />)}
                    </Grid>
            }
        ]

    return (
        <Box
            sx={{
                color: `${theme.text.color}`,
                backgroundColor: `${theme.card.backgroundColor}`,
                border: { xs: "none", sm: `2px solid ${theme.border.color}` },
                borderRadius: "5px",
                width: "100%",
                overflowY: { xs: "none", sm: "auto" }
            }}
        >
            <AppBar position="static"
                sx={{
                    backgroundColor: `${theme.appbar.backgroundColor}`,
                    borderBottom: `1px solid ${theme.border.color}`,
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                        sx={{
                            px: 2,
                            py: 1.5,
                            fontFamily: `${theme.font.styled.family}`,
                            fontSize: "18px",
                            flexGrow: 1
                        }}
                    >
                        Filters
                    </Typography>
                    <IconButton onClick={props.handleClose}>
                        <CloseIcon sx={{ color: `white` }} />
                    </IconButton>
                </Box>
            </AppBar>
            {
                filters.map((filter, index) => (
                    <Accordion key={index}>
                        <AccordionSummary>
                            <Typography
                                sx={{
                                    fontFamily: `${theme.font.styled.family}`,
                                    color: characterFilters[filter.tag as keyof CharacterFilterState].length > 0 ? `gold` : `${theme.text.color}`
                                }}
                            >
                                {filter.name}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ pl: 1 }}>
                            {filter.component}
                        </AccordionDetails>
                    </Accordion>
                ))
            }
        </Box>
    )

}

export default CharacterFilters