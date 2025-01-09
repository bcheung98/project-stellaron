// Component imports
import InfoCard from "custom/InfoCard";
import { TextStyled } from "styled/StyledTypography";

// MUI imports
import Grid from "@mui/material/Grid2";

// Helper imports
import { useAppSelector } from "helpers/hooks";
import { selectCavernRelics, selectPlanarRelics } from "reducers/relic";

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

    const cavernRelics = [...useAppSelector(selectCavernRelics)].sort((a, b) =>
        a.displayName.localeCompare(b.displayName)
    );
    const planarRelics = [...useAppSelector(selectPlanarRelics)].sort((a, b) =>
        a.displayName.localeCompare(b.displayName)
    );
    const relics = [...cavernRelics, ...planarRelics];

    return (
        <>
            <TextStyled
                variant="h5-styled"
                sx={{ mb: "20px", lineHeight: "36px" }}
            >
                Relic Sets
            </TextStyled>
            <Grid container spacing={3}>
                {relics.map((relic, index) => (
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
