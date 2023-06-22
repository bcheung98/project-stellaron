import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, Paper } from "@mui/material";
import { Accordion, AccordionDetails, AccordionSummary } from "../../../helpers/CustomAccordion";

import CharacterElementFilter from "./CharacterElementFilter";
import CharacterPathFilter from "./CharacterPathFilter";
import CharacterRarityFilter from "./CharacterRarityFilter";
import CharacterCommonMatFilter from "./CharacterCommonMatFilter";
import CharacterWeeklyBossMatFilter from "./CharacterWeeklyBossMatFilter";

const CharacterFilters = () => {

    const theme = useTheme();

    return (
        <Box
            sx={{
                margin: "auto",
                width: "85%",
                marginLeft: "35px",
            }}
        >
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

                {/* ELEMENT */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="element-filter-text" sx={{ color: `${theme.text.color}` }}>Element</Typography>
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

                {/* COMMON MAT */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="common-filter-text" sx={{ color: `${theme.text.color}` }}>Common Material</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <CharacterCommonMatFilter />
                    </AccordionDetails>
                </Accordion>

                {/* WEEKLY BOSS MAT */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="weeklyboss-filter-text" sx={{ color: `${theme.text.color}` }}>Weekly Boss</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <CharacterWeeklyBossMatFilter />
                    </AccordionDetails>
                </Accordion>

            </Paper>
        </Box>
    )
}

export default CharacterFilters;