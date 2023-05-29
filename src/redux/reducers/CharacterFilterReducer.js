const initialState = {
    element: [],
    path: [],
}

const CharacterFilterReducer = (state = initialState, action) => {
    let { target, type } = action;
    if (target !== undefined && type.startsWith("SET_CHAR")) {
        let targetButton;
        if (target === "4" || target === "5") {
            targetButton = document.getElementById(`${target}-button`);
        }
        else {
            targetButton = document.getElementById(`${target.toLowerCase()}-button`);
        }
        targetButton.className === "filter-off" ? targetButton.className = "filter-on" : targetButton.className = "filter-off";
    }
    switch (type) {
        case "SET_CHAR_ELEMENT_FILTERS":
            let tempElement = [...state.element];
            !state.element.includes(target) ? tempElement.push(target) : tempElement.splice(tempElement.indexOf(target), 1);
            let elementText = document.getElementById(`${type.split("_")[2].toLowerCase()}-filter-text`);
            elementText.className === "filter-text-on" && tempElement.length === 0 ? elementText.className = "filter-text-off" : elementText.className = "filter-text-on";
            return {
                ...state,
                element: tempElement
            }
        case "SET_CHAR_PATH_FILTERS":
            let tempPath = [...state.path];
            !state.path.includes(target) ? tempPath.push(target) : tempPath.splice(tempPath.indexOf(target), 1);
            let pathText = document.getElementById(`${type.split("_")[2].toLowerCase()}-filter-text`);
            pathText.className === "filter-text-on" && tempPath.length === 0 ? pathText.className = "filter-text-off" : pathText.className = "filter-text-on";
            return {
                ...state,
                path: tempPath
            }
        default:
            return state;
    }
}

export default CharacterFilterReducer;