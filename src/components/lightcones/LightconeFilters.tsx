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
import { LightconeFilterState, setPath, setRarity, setCalyxMats, setCommonMats } from "../../redux/reducers/LightconeFilterReducer"
import { CalyxMats, CommonMats } from "../../data/MaterialList"
import { formatCalyxMats, formatCommonMats } from "../../helpers/TooltipText"

// Type imports
import { RootState } from "../../redux/store"

function LightconeFilters(props: {
    handleClose?: (arg0: any) => void
}) {

    const theme = useTheme()

    const dispatch = useDispatch()

    const lightconeFilters = useSelector((state: RootState) => state.lightconeFilters)

    const filters: {
        name: string,
        tag: string,
        component: React.ReactNode
    }[] = [
            {
                name: "Path",
                tag: "path",
                component:
                    <Grid container spacing={1}>
                        {["Destruction", "Hunt", "Erudition", "Harmony", "Nihility", "Preservation", "Abundance"].map((path, index) => <FilterButton key={index} tag={path} img={`paths/The_${path}`} active={lightconeFilters.path.includes(path)} onClick={() => dispatch(setPath(path))} />)}
                    </Grid>
            },
            {
                name: "Rarity",
                tag: "rarity",
                component:
                    <Grid container spacing={1}>
                        {[5, 4, 3].map((rarity, index) => <FilterButton key={index} variant="text" tag={[...Array(rarity).keys()].map(() => "✦").join("")} active={lightconeFilters.rarity.includes(rarity)} onClick={() => dispatch(setRarity(rarity))} />)}
                    </Grid>
            },
            {
                name: "Calyx Material",
                tag: "calyxMat",
                component:
                    <Grid container spacing={1}>
                        {CalyxMats.map((material, index) => <FilterButton key={index} tag={formatCalyxMats(`${material}-filter`)} img={`materials/calyx_mats/${material.split(" ").join("_")}3`} active={lightconeFilters.calyxMat.includes(material)} onClick={() => dispatch(setCalyxMats(material))} />)}
                    </Grid>
            },
            {
                name: "Common Material",
                tag: "commonMat",
                component:
                    <Grid container spacing={1}>
                        {CommonMats.map((material, index) => <FilterButton key={index} tag={formatCommonMats(material)} img={`materials/common_mats/${material.split(" ").join("_")}3`} active={lightconeFilters.commonMat.includes(material)} onClick={() => dispatch(setCommonMats(material))} />)}
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
                                    color: lightconeFilters[filter.tag as keyof LightconeFilterState].length > 0 ? `gold` : `${theme.text.color}`
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

export default LightconeFilters