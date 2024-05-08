const initialState = {
    element: [],
    path: [],
    rarity: [],
    calyxMat: [],
    commonMat: [],
    bossMat: [],
    weeklyBossMat: [],
    world: [],
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
        case "SET_CHAR_RARITY_FILTERS":
            let tempRarity = [...state.rarity];
            !state.rarity.includes(parseInt(target)) ? tempRarity.push(parseInt(target)) : tempRarity.splice(tempRarity.indexOf(parseInt(target)), 1);
            let rarityText = document.getElementById(`${type.split("_")[2].toLowerCase()}-filter-text`);
            rarityText.className === "filter-text-on" && tempRarity.length === 0 ? rarityText.className = "filter-text-off" : rarityText.className = "filter-text-on";
            return {
                ...state,
                rarity: tempRarity
            }
        case "SET_CHAR_CALYX_MAT_FILTERS":
            let tempCalyxMat = [...state.calyxMat];
            !state.calyxMat.includes(target) ? tempCalyxMat.push(target) : tempCalyxMat.splice(tempCalyxMat.indexOf(target), 1);
            let calyxMatText = document.getElementById(`${type.split("_")[2].toLowerCase()}-filter-text`);
            calyxMatText.className === "filter-text-on" && tempCalyxMat.length === 0 ? calyxMatText.className = "filter-text-off" : calyxMatText.className = "filter-text-on";
            return {
                ...state,
                calyxMat: tempCalyxMat
            }
        case "SET_CHAR_COMMON_MAT_FILTERS":
            let tempCommonMat = [...state.commonMat];
            !state.commonMat.includes(target) ? tempCommonMat.push(target) : tempCommonMat.splice(tempCommonMat.indexOf(target), 1);
            let commonMatText = document.getElementById(`${type.split("_")[2].toLowerCase()}-filter-text`);
            commonMatText.className === "filter-text-on" && tempCommonMat.length === 0 ? commonMatText.className = "filter-text-off" : commonMatText.className = "filter-text-on";
            return {
                ...state,
                commonMat: tempCommonMat
            }
        case "SET_CHAR_BOSS_MAT_FILTERS":
            let tempBossMat = [...state.bossMat];
            !state.bossMat.includes(target) ? tempBossMat.push(target) : tempBossMat.splice(tempBossMat.indexOf(target), 1);
            let bossMatText = document.getElementById(`${type.split("_")[2].toLowerCase()}-filter-text`);
            bossMatText.className === "filter-text-on" && tempBossMat.length === 0 ? bossMatText.className = "filter-text-off" : bossMatText.className = "filter-text-on";
            return {
                ...state,
                bossMat: tempBossMat
            }
        case "SET_CHAR_WEEKLYBOSS_MAT_FILTERS":
            let tempWeeklyBossMat = [...state.weeklyBossMat];
            !state.weeklyBossMat.includes(target) ? tempWeeklyBossMat.push(target) : tempWeeklyBossMat.splice(tempWeeklyBossMat.indexOf(target), 1);
            let weeklyBossText = document.getElementById(`${type.split("_")[2].toLowerCase()}-filter-text`);
            weeklyBossText.className === "filter-text-on" && tempWeeklyBossMat.length === 0 ? weeklyBossText.className = "filter-text-off" : weeklyBossText.className = "filter-text-on";
            return {
                ...state,
                weeklyBossMat: tempWeeklyBossMat
            }
        case "SET_CHAR_WORLD_FILTERS":
            let tempWorld = [...state.world];
            !state.world.includes(target) ? tempWorld.push(target) : tempWorld.splice(tempWorld.indexOf(target), 1);
            let worldText = document.getElementById(`${type.split("_")[2].toLowerCase()}-filter-text`);
            worldText.className === "filter-text-on" && tempWorld.length === 0 ? worldText.className = "filter-text-off" : worldText.className = "filter-text-on";
            return {
                ...state,
                world: tempWorld
            }
        default:
            return state;
    }
}

export default CharacterFilterReducer;