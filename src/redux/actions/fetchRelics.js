export const fetchRelics = () => {
    // https://bcheung98.github.io/project-stellaron-db/relics.json
    const url = "https://bcheung98.github.io/project-stellaron-db/relics.json";
    return (dispatch) => {
        dispatch({ type: "START_GETTING_RELICS_REQUEST" });
        fetch(url)
            .then(res => res.json())
            .then(relics => dispatch({ type: "GET_RELICS", relics }))
            .catch((error) => {
                console.error(error);
            });
    }
}