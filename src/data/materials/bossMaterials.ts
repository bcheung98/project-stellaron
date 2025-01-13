import { objectKeys } from "helpers/utils";
import { BossMaterial } from "types/materials";

export const bossMaterials = <const>{
    "Broken Teeth of Iron Wolf": {
        displayName: "Broken Teeth of Iron Wolf",
        source: "",
    },
    "Endotherm Chitin": {
        displayName: "Endotherm Chitin",
        source: "",
    },
    "Enigmatic Ectostella": {
        displayName: "Enigmatic Ectostella",
        source: "",
    },
    "Gelid Chitin": {
        displayName: "Gelid Chitin",
        source: "",
    },
    "Golden Crown of the Past Shadow": {
        displayName: "Golden Crown of the Past Shadow",
        source: "",
    },
    "Horn of Snow": {
        displayName: "Horn of Snow",
        source: "",
    },
    "Lightning Crown of the Past Shadow": {
        displayName: "Lightning Crown of the Past Shadow",
        source: "",
    },
    "Shape Shifter's Lightning Staff": {
        displayName: "Shape Shifter's Lightning Staff",
        source: "",
    },
    "Storm Eye": {
        displayName: "Storm Eye",
        source: "",
    },
    "Void Cast Iron": {
        displayName: "Void Cast Iron",
        source: "",
    },
    "Ascendant Debris": {
        displayName: "Ascendant Debris",
        source: "",
    },
    "Nail of the Ape": {
        displayName: "Nail of the Ape",
        source: "",
    },
    "Suppressing Edict": {
        displayName: "Suppressing Edict",
        source: "",
    },
    "Searing Steel Blade": {
        displayName: "Searing Steel Blade",
        source: "",
    },
    "Netherworld Pass": { displayName: "Netherworld Pass", source: "" },
    "Dream Fridge": { displayName: "Dream Fridge", source: "" },
    "Dream Flamer": { displayName: "Dream Flamer", source: "" },
    "Raging Heart": { displayName: "Raging Heart", source: "" },
    "IPC Work Permit": { displayName: "IPC Work Permit", source: "" },
    "A Glass of the Besotted Era": {
        displayName: "A Glass of the Besotted Era",
        source: "",
    },
    "Nail of the Beast Coffin": {
        displayName: "Nail of the Beast Coffin",
        source: "",
    },
    "Chordal Mirage": { displayName: "Chordal Mirage", source: "" },
    "Darkveil Moonlight": {
        unreleased: true,
        displayName: "Darkveil Moonlight",
        source: "",
    },
    "Harbinger of Strife": {
        unreleased: true,
        displayName: "Harbinger of Strife",
        source: "",
    },
};

export const bossMatNames = objectKeys(bossMaterials);

export const filteredBossMaterials = (showUnreleased = false) => {
    if (showUnreleased) {
        return bossMatNames;
    } else {
        return bossMatNames.filter(
            (material) =>
                !Object.keys(bossMaterials[material]).includes("unreleased")
        );
    }
};

export const formatBossMaterials = (material: BossMaterial) => {
    const mat = bossMaterials[material] || { displayName: "", source: "?" };
    return `${mat.displayName} (${mat.source})`;
};
