// Component imports
import CurrentBanners from "components/banners/CurrentBanners";
import VersionHighlights from "./VersionHighlights";

// MUI imports
import { Stack } from "@mui/material";

function Home() {
    document.title = `Honkai: Star Rail - Irminsul.GG`;

    return (
        <Stack spacing={3}>
            <CurrentBanners />
            <VersionHighlights />
        </Stack>
    );
}

export default Home;
