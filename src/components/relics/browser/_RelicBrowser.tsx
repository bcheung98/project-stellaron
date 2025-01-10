import { useState, BaseSyntheticEvent } from "react";

// Component imports
import InfoCard from "custom/InfoCard";
import Image from "custom/Image";
import ToggleButtons, { CustomToggleButtonProps } from "custom/ToggleButtons";
import { TextStyled } from "styled/StyledTypography";

// MUI imports
import Grid from "@mui/material/Grid2";

// Helper imports
import { useAppSelector } from "helpers/hooks";
import { selectCavernRelics, selectPlanarRelics } from "reducers/relic";

// Type imports
import { Relic } from "types/relic";

function RelicBrowser() {
    const documentTitle = `Relics ${import.meta.env.VITE_DOCUMENT_TITLE}`;
    const documentDesc = `A list of all Honkai: Star Rail Relic Sets`;
    document.title = documentTitle;
    document
        .querySelector('meta[property="og:title"]')
        ?.setAttribute("content", documentTitle);
    document
        .querySelector('meta[property="description"]')
        ?.setAttribute("content", documentDesc);
    document
        .querySelector('meta[property="og:description"]')
        ?.setAttribute("content", documentDesc);

    const [view, setView] = useState<("cavern" | "planar")[]>([
        "cavern",
        "planar",
    ]);
    const handleView = (
        _: BaseSyntheticEvent,
        newView: ("cavern" | "planar")[]
    ) => {
        setView(newView);
    };
    const buttons: CustomToggleButtonProps[] = [
        {
            value: "cavern",
            icon: (
                <Image
                    src="relics/icons/head"
                    alt="Cavern Relics"
                    style={{ width: "24px" }}
                    tooltip="Cavern Relics"
                />
            ),
        },
        {
            value: "planar",
            icon: (
                <Image
                    src="relics/icons/orb"
                    alt="Planar Ornaments"
                    style={{ width: "24px" }}
                    tooltip="Planar Ornaments"
                />
            ),
        },
    ];

    const cavernRelics = [...useAppSelector(selectCavernRelics)].sort((a, b) =>
        a.displayName.localeCompare(b.displayName)
    );
    const planarRelics = [...useAppSelector(selectPlanarRelics)].sort((a, b) =>
        a.displayName.localeCompare(b.displayName)
    );
    const currentRelics: Relic[] = [];
    if (view.includes("cavern")) {
        currentRelics.push(...cavernRelics);
    }
    if (view.includes("planar")) {
        currentRelics.push(...planarRelics);
    }

    return (
        <>
            <Grid
                container
                rowSpacing={2}
                columnSpacing={3}
                sx={{ mb: "20px" }}
            >
                <Grid size="auto">
                    <TextStyled variant="h5-styled" sx={{ lineHeight: "36px" }}>
                        Relics
                    </TextStyled>
                </Grid>
                <Grid size={{ xs: 6, sm: "auto" }}>
                    <ToggleButtons
                        color="primary"
                        buttons={buttons}
                        value={view}
                        onChange={handleView}
                        highlightOnHover={false}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                {currentRelics.map((relic, index) => (
                    <InfoCard
                        key={index}
                        id={`${relic.name}-relicBrowser`}
                        name={relic.name}
                        displayName={relic.displayName}
                        type="relic"
                        rarity={relic.rarity}
                    />
                ))}
            </Grid>
        </>
    );
}

export default RelicBrowser;
