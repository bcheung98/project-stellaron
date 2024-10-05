import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, Paper } from "@mui/material";
import { Accordion, AccordionDetails, AccordionSummary } from "../../../helpers/CustomAccordion";

import CharacterElementFilter from "./CharacterElementFilter";
import CharacterPathFilter from "./CharacterPathFilter";
import CharacterRarityFilter from "./CharacterRarityFilter";
import CharacterCalyxMatFilter from "./CharacterCalyxMatFilter";
import CharacterCommonMatFilter from "./CharacterCommonMatFilter";
import CharacterBossMatFilter from "./CharacterBossMatFilter";
import CharacterWeeklyBossMatFilter from "./CharacterWeeklyBossMatFilter";
import CharacterWorldFilter from "./CharacterWorldFilter";

const CharacterFilters = () => {

    const theme = useTheme();

    return (
        <Paper
            variant="outlined"
            square
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

            {/* ELEMENT */}
            <Accordion>
                <AccordionSummary>
                    <Typography variant="body1" className="filter-text-off" id="element-filter-text" sx={{ color: `${theme.text.color}` }}>Combat Type</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <CharacterElementFilter />
                </AccordionDetails>
            </Accordion>

            {/* PATH */}
            <Accordion>
                <AccordionSummary>
                    <Typography variant="body1" className="filter-text-off" id="path-filter-text" sx={{ color: `${theme.text.color}` }}>Path</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <CharacterPathFilter />
                </AccordionDetails>
            </Accordion>

            {/* RARITY */}
            <Accordion>
                <AccordionSummary>
                    <Typography variant="body1" className="filter-text-off" id="rarity-filter-text" sx={{ color: `${theme.text.color}` }}>Rarity</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <CharacterRarityFilter />
                </AccordionDetails>
            </Accordion>

            {/* CALYX MAT */}
            <Accordion>
                <AccordionSummary>
                    <Typography variant="body1" className="filter-text-off" id="calyx-filter-text" sx={{ color: `${theme.text.color}` }}>Calyx Material</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <CharacterCalyxMatFilter />
                </AccordionDetails>
            </Accordion>

            {/* COMMON MAT */}
            <Accordion>
                <AccordionSummary>
                    <Typography variant="body1" className="filter-text-off" id="common-filter-text" sx={{ color: `${theme.text.color}` }}>Common Material</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <CharacterCommonMatFilter />
                </AccordionDetails>
            </Accordion>

            {/* BOSS MAT */}
            <Accordion>
                <AccordionSummary>
                    <Typography variant="body1" className="filter-text-off" id="boss-filter-text" sx={{ color: `${theme.text.color}` }}>Stagnant Shadow Material</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <CharacterBossMatFilter />
                </AccordionDetails>
            </Accordion>

            {/* WEEKLY BOSS MAT */}
            <Accordion>
                <AccordionSummary>
                    <Typography variant="body1" className="filter-text-off" id="weeklyboss-filter-text" sx={{ color: `${theme.text.color}` }}>Echo of War Material</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <CharacterWeeklyBossMatFilter />
                </AccordionDetails>
            </Accordion>

            {/* WORLD */}
            <Accordion>
                <AccordionSummary>
                    <Typography variant="body1" className="filter-text-off" id="world-filter-text" sx={{ color: `${theme.text.color}` }}>World</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <CharacterWorldFilter />
                </AccordionDetails>
            </Accordion>

        </Paper>
    )
}

export default CharacterFilters;