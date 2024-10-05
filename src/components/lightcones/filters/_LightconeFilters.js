import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, Paper } from "@mui/material";
import { Accordion, AccordionDetails, AccordionSummary } from "../../../helpers/CustomAccordion";
import LightconePathFilter from "./LightconePathFilter";
import LightconeRarityFilter from "./LightconeRarityFilter";
import LightconeCalyxMatFilter from "./LightconeCalyxMatFilter";
import LightconeCommonMatFilter from "./LightconeCommonMatFilter";

const LightconeFilters = () => {

    const theme = useTheme();

    return (
        <Paper variant="outlined" square
            sx={{
                color: `${theme.text.color}`,
                backgroundColor: `${theme.appbar.backgroundColor}`,
                border: `2px solid ${theme.border.color}`,
                borderRadius: "5px",
            }}
        >
            <Typography variant="h6"
                sx={{
                    ml: "15px",
                    my: "10px",
                }}
            >
                Filters
            </Typography>

            {/* PATH */}
            <Accordion>
                <AccordionSummary>
                    <Typography variant="body1" className="filter-text-off" id="lc-path-filter-text" sx={{ color: `${theme.text.color}` }}>Path</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <LightconePathFilter />
                </AccordionDetails>
            </Accordion>

            {/* RARITY */}
            <Accordion>
                <AccordionSummary>
                    <Typography variant="body1" className="filter-text-off" id="lc-rarity-filter-text" sx={{ color: `${theme.text.color}` }}>Rarity</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <LightconeRarityFilter />
                </AccordionDetails>
            </Accordion>

            {/* CALYX MAT */}
            <Accordion>
                <AccordionSummary>
                    <Typography variant="body1" className="filter-text-off" id="lc-calyx-filter-text" sx={{ color: `${theme.text.color}` }}>Calyx Material</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <LightconeCalyxMatFilter />
                </AccordionDetails>
            </Accordion>

            {/* COMMON MAT */}
            <Accordion>
                <AccordionSummary>
                    <Typography variant="body1" className="filter-text-off" id="lc-common-filter-text" sx={{ color: `${theme.text.color}` }}>Common Material</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <LightconeCommonMatFilter />
                </AccordionDetails>
            </Accordion>

        </Paper>
    )
}

export default LightconeFilters;