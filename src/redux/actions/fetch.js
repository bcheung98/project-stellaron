// https://api.irminsul.gg/hsr/characters.json
const charactersURL = "https://api.irminsul.gg/hsr/characters.json";

// https://api.irminsul.gg/hsr/lightcones.json
const lightconesURL = "https://api.irminsul.gg/hsr/lightcones.json";

// https://api.irminsul.gg/hsr/relics.json
const relicsURL = "https://api.irminsul.gg/hsr/relics.json";

const characterBannerURL = "https://api.irminsul.gg/hsr/character-banners.json";
const lightconeBannerURL = "https://api.irminsul.gg/hsr/lightcone-banners.json";

export const fetchCharacters = () => {
    return (dispatch) => {
        dispatch({ type: "START_GETTING_CHARS_REQUEST" });
        fetch(charactersURL)
            .then(res => res.json())
            .then(characters => dispatch({ type: "GET_CHARS", characters }))
            .catch((error) => {
                console.error(error);
            });
    }
}

export const fetchLightcones = () => {
    return (dispatch) => {
        dispatch({ type: "START_GETTING_LC_REQUEST" });
        fetch(lightconesURL)
            .then(res => res.json())
            .then(lightcones => dispatch({ type: "GET_LC", lightcones }))
            .catch((error) => {
                console.error(error);
            });
    }
}

export const fetchRelics = () => {
    return (dispatch) => {
        dispatch({ type: "START_GETTING_RELICS_REQUEST" });
        fetch(relicsURL)
            .then(res => res.json())
            .then(relics => dispatch({ type: "GET_RELICS", relics }))
            .catch((error) => {
                console.error(error);
            });
    }
}

export const fetchBanners = () => {
    return (dispatch) => {
        dispatch({ type: "START_GETTING_CHAR_BANNERS_REQUEST" });
        fetch(characterBannerURL)
            .then(res => res.json())
            .then(characterBanners => dispatch({ type: "GET_CHAR_BANNERS", characterBanners }))
            .catch((error) => {
                console.error(error);
            });
        dispatch({ type: "START_GETTING_LIGHTCONE_BANNERS_REQUEST" });
        fetch(lightconeBannerURL)
            .then(res => res.json())
            .then(lightconeBanners => dispatch({ type: "GET_LIGHTCONE_BANNERS", lightconeBanners }))
            .catch((error) => {
                console.error(error);
            });
    }
}