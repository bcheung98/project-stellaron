export const fetchBanners = () => {
    const charUrl = "https://bcheung98.github.io/project-stellaron-db/character-banners.json";
    const lcUrl = "https://bcheung98.github.io/project-stellaron-db/lightcone-banners.json";
    return (dispatch) => {
        dispatch({ type: "START_GETTING_CHAR_BANNERS_REQUEST" });
        fetch(charUrl)
            .then(res => res.json())
            .then(characterBanners => dispatch({ type: "GET_CHAR_BANNERS", characterBanners }))
            .catch((error) => {
                console.error(error);
            });
        dispatch({ type: "START_GETTING_LIGHTCONE_BANNERS_REQUEST" });
        fetch(lcUrl)
            .then(res => res.json())
            .then(lightconeBanners => dispatch({ type: "GET_LIGHTCONE_BANNERS", lightconeBanners }))
            .catch((error) => {
                console.error(error);
            });
    }
}