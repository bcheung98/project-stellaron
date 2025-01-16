import { useParams } from "react-router";

// Component imports
import RelicInfo from "./RelicInfo";
import BetaTag from "custom/BetaTag";
import PageNotFound from "components/PageNotFound";

// MUI imports
import { Stack } from "@mui/material";

// Helper imports
import { useAppSelector } from "helpers/hooks";
import { selectCavernRelics, selectPlanarRelics } from "reducers/relic";

function RelicPage() {
    const cavernRelics = useAppSelector(selectCavernRelics);
    const planarRelics = useAppSelector(selectPlanarRelics);
    const relics = [...cavernRelics, ...planarRelics];

    const params = useParams<{ name: string }>();
    const relic = relics.find(
        (r) => r.name.split(" ").join("_").toLowerCase() === params.name
    );

    if (relic) {
        const documentTitle = `${relic.displayName} ${
            import.meta.env.VITE_DOCUMENT_TITLE
        }`;
        const documentDesc = `2-Pc: ${relic.setEffect.twoPiece}\n4-Pc: ${relic.setEffect.fourPiece}`;
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

        return (
            <Stack spacing={2}>
                <BetaTag version={relic.release.version} />
                <RelicInfo relic={relic} />
            </Stack>
        );
    } else {
        return <PageNotFound />;
    }
}

export default RelicPage;
