const initialState = {
    element: []
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
        default:
            return state;
    }
}

export default CharacterFilterReducer;