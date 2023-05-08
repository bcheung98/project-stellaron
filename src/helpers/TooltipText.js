export const formatCommonMats = (material) => {
    switch (material) {
        case "Antimatter":
            material = "Reaver Antimatter";
            break;
        case "Artifex":
            material = "Ingenia Artifex";
            break;
        case "Core":
            material = "Flamespawn Core";
            break;
        case "Engine":
            material = "Automaton Engine";
            break;
        case "Immortal":
            material = "Mara-Struck Flower";
            break;
        case "Silvermane":
            material = "Silvermane Insignia";
            break;
        default:
            material += "";
    }
    return material;
}

export const formatWeeklyBossMats = (material) => {
    switch (material) {
        case "Destroyer's Final Road":
            material += " (Doomsday Beast)";
            break;
        case "Guardian's Lament":
            material += " (Cocolia)";
            break;
        default:
            material += "";
    }
    return material;
}