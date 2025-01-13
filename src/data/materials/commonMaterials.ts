import { objectKeys } from "helpers/utils";
import { CommonMaterialKeys } from "types/materials";

export const commonMaterials = {
    Antimatter: {
        Antimatter0: "Reaver Antimatter",
        Antimatter1: "Thief's Instinct",
        Antimatter2: "Usurper's Scheme",
        Antimatter3: "Conqueror's Will",
    },
    Artifex: {
        Artifex0: "Ingenia Artifex",
        Artifex1: "Artifex's Module",
        Artifex2: "Artifex's Cogwheel",
        Artifex3: "Artifex's Gyreheart",
    },
    Core: {
        Core0: "Flamespawn Core",
        Core1: "Extinguished Core",
        Core2: "Glimmering Core",
        Core3: "Squirming Core",
    },
    Engine: {
        Engine0: "Automaton Engine",
        Engine1: "Ancient Part",
        Engine2: "Ancient Spindle",
        Engine3: "Ancient Engine",
    },
    Immortal: {
        Immortal0: "Mara-Struck Flower",
        Immortal1: "Immortal Scionette",
        Immortal2: "Immortal Aeroblossom",
        Immortal3: "Immortal Lumintwig",
    },
    Silvermane: {
        Silvermane0: "Silvermane Insignia",
        Silvermane1: "Silvermane Badge",
        Silvermane2: "Silvermane Insignia",
        Silvermane3: "Silvermane Medal",
    },
    Dreamjolt: {
        Dreamjolt0: "Dreamjolt Troupe Core",
        Dreamjolt1: "Dream Collection Component",
        Dreamjolt2: "Dream Flow Valve",
        Dreamjolt3: "Dream Making Engine",
    },
    Memoria: {
        Memoria0: "Memory Zone Meme Fragment",
        Memoria1: "Tatters of Thought",
        Memoria2: "Fragments of Impression",
        Memoria3: "Shards of Desires",
    },
    Titankin: {
        Titankin0: "Titankin Fragment",
        Titankin1: "Fear-Stomped Flesh",
        Titankin2: "Courage-Torn Chest",
        Titankin3: "Glory-Aspersed Torso",
    },
    "Black Tide": {
        unreleased: true,
        "Black Tide0": "Black Tide Fragment",
        "Black Tide1": "Ethereal Omen",
        "Black Tide2": "Echoing Wail",
        "Black Tide3": "Eternal Lament",
    },
};

export const filteredCommonMaterials = (showUnreleased = false) => {
    if (showUnreleased) {
        return objectKeys(commonMaterials);
    } else {
        return objectKeys(commonMaterials).filter(
            (material) =>
                !Object.keys(commonMaterials[material]).includes("unreleased")
        );
    }
};

export const formatCommonMaterials = (material: CommonMaterialKeys): string => {
    const mat = commonMaterials[material];
    return mat[`${material}0` as keyof typeof mat] || material;
};
