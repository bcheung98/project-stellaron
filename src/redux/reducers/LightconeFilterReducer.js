const initialState = {
    lc_path: [],
    lc_rarity: [],
    lc_commonMat: [],
}

const LightconeFilterReducer = (state = initialState, action) => {
    let { target, type } = action;
    if (target !== undefined && type.startsWith("SET_LC")) {
        let targetButton;
        if (target === "4" || target === "5") {
            targetButton = document.getElementById(`lc-${target}-button`);
        }
        else {
            targetButton = document.getElementById(`lc-${target.toLowerCase()}-button`);
        }
        targetButton.className === "filter-off" ? targetButton.className = "filter-on" : targetButton.className = "filter-off";
    }
    console.log(type)
    switch (type) {
        case "SET_LC_PATH_FILTERS":
            let tempPath = [...state.lc_path];
            !state.lc_path.includes(target) ? tempPath.push(target) : tempPath.splice(tempPath.indexOf(target), 1);
            let pathText = document.getElementById(`lc-${type.split("_")[2].toLowerCase()}-filter-text`);
            pathText.className === "filter-text-on" && tempPath.length === 0 ? pathText.className = "filter-text-off" : pathText.className = "filter-text-on";
            return {
                ...state,
                lc_path: tempPath
            }
        case "SET_LC_RARITY_FILTERS":
            let tempRarity = [...state.lc_rarity];
            !state.lc_rarity.includes(parseInt(target)) ? tempRarity.push(parseInt(target)) : tempRarity.splice(tempRarity.indexOf(parseInt(target)), 1);
            let rarityText = document.getElementById(`lc-${type.split("_")[2].toLowerCase()}-filter-text`);
            rarityText.className === "filter-text-on" && tempRarity.length === 0 ? rarityText.className = "filter-text-off" : rarityText.className = "filter-text-on";
            return {
                ...state,
                lc_rarity: tempRarity
            }
        case "SET_LC_COMMON_MAT_FILTERS":
            let tempCommonMat = [...state.lc_commonMat];
            !state.lc_commonMat.includes(target) ? tempCommonMat.push(target) : tempCommonMat.splice(tempCommonMat.indexOf(target), 1);
            let commonMatText = document.getElementById(`lc-${type.split("_")[2].toLowerCase()}-filter-text`);
            commonMatText.className === "filter-text-on" && tempCommonMat.length === 0 ? commonMatText.className = "filter-text-off" : commonMatText.className = "filter-text-on";
            return {
                ...state,
                lc_commonMat: tempCommonMat
            }
        default:
            return state;
    }
}

export default LightconeFilterReducer;