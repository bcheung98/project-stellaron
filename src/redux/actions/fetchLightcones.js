export const fetchLightcones = () => {
    // https://bcheung98.github.io/project-stellaron-db/lightcones.json
    const url = "https://bcheung98.github.io/project-stellaron-db/lightcones.json";
    return (dispatch) => {
        dispatch({ type: "START_GETTING_LC_REQUEST" });
        fetch(url)
            .then(res => res.json())
            .then(lightcones => dispatch({ type: "GET_LC", lightcones }))
            .catch((error) => {
                console.error(error);
            });
    }
}