import { Routes, Route } from "react-router";

import Layout from "components/Layout";
import Home from "components/home/Home";
import PageNotFound from "components/PageNotFound";
import CharacterBrowser from "components/characters/browser/_CharacterBrowser";
import CharacterPage from "components/characters/page/_CharacterPage";
import WeaponBrowser from "components/weapons/browser/_WeaponBrowser";
import WeaponPage from "components/weapons/page/_WeaponPage";
import RelicBrowser from "components/relics/browser/_RelicBrowser";
import RelicPage from "components/relics/page/_RelicPage";
import Planner from "components/planner/_Planner";
import BannerArchive from "components/banners/_BannerArchive";

function RouteConfig() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/characters" element={<CharacterBrowser />} />
                <Route path="/characters/:name" element={<CharacterPage />} />
                <Route path="/lightcones" element={<WeaponBrowser />} />
                <Route path="/lightcones/:name" element={<WeaponPage />} />
                <Route path="/relics" element={<RelicBrowser />} />
                <Route path="/relics/:name" element={<RelicPage />} />
                <Route path="/planner" element={<Planner />} />
                <Route path="/banners" element={<BannerArchive />} />
                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    );
}

export default RouteConfig;
