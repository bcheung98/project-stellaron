export const fetchLightcones = () => {
    const url = "https://bcheung98.github.io/project-stellaron-db/lightcones.json";
    return (dispatch) => {
        dispatch({ type: "START_GETTING_LC_REQUEST" });
        fetch(url)
            .then(res => res.json())
            .then(lightcones => dispatch({ type: "GET_LIGHTCONES", lightcones }))
            .catch((error) => {
                console.error(error);
            });
    }
}