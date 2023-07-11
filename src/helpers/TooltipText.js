export const formatCommonMats = (material) => {
    switch (material) {
        case "Antimatter":
            material = "Reaver Antimatter";
            break;
        case "Antimatter1":
            material = "Thief's Instinct";
            break;
        case "Antimatter2":
            material = "Usurper's Scheme";
            break;
        case "Antimatter3":
            material = "Conqueror's Will";
            break;
        case "Artifex":
            material = "Ingenia Artifex";
            break;
        case "Artifex1":
            material = "Artifex's Module";
            break;
        case "Artifex2":
            material = "Artifex's Cogwheel";
            break;
        case "Artifex3":
            material = "Artifex's Gyreheart";
            break;
        case "Core":
            material = "Flamespawn Core";
            break;
        case "Core1":
            material = "Extinguished Core";
            break;
        case "Core2":
            material = "Glimmering Core";
            break;
        case "Core3":
            material = "Squirming Core";
            break;
        case "Engine":
            material = "Automaton Engine";
            break;
        case "Engine1":
            material = "Ancient Part";
            break;
        case "Engine2":
            material = "Ancient Spindle";
            break;
        case "Engine3":
            material = "Ancient Engine";
            break;
        case "Immortal":
            material = "Mara-Struck Flower";
            break;
        case "Immortal1":
            material = "Immortal Scionette";
            break;
        case "Immortal2":
            material = "Immortal Aeroblossom";
            break;
        case "Immortal3":
            material = "Immortal Lumintwig";
            break;
        case "Silvermane":
        case "Silvermane2":
            material = "Silvermane Insignia";
            break;
        case "Silvermane1":
            material = "Silvermane Badge";
            break;
        case "Silvermane3":
            material = "Silvermane Medal";
            break;
        default:
            material += "";
    }
    return material;
}

export const formatCalyxMats = (material) => {
    switch (material) {
        case "Blade1":
            material = "Shattered Blade";
            break;
        case "Blade2":
            material = "Lifeless Blade";
            break;
        case "Blade3":
            material = "Worldbreaker Blade";
            break;
        case "Arrow1":
            material = "Arrow of the Beast Hunter";
            break;
        case "Arrow2":
            material = "Arrow of the Demon Slayer";
            break;
        case "Arrow3":
            material = "Arrow of the Starchaser";
            break;
        case "Key1":
            material = "Key of Inspiration";
            break;
        case "Key2":
            material = "Key of Knowledge";
            break;
        case "Key3":
            material = "Key of Wisdom";
            break;
        case "Shield1":
            material = "Endurance of Bronze";
            break;
        case "Shield2":
            material = "Oath of Steel";
            break;
        case "Shield3":
            material = "Safeguard of Amber";
            break;
        case "Obsidian1":
            material = "Obsidian of Dread";
            break;
        case "Obsidian2":
            material = "Obsidian of Desolation";
            break;
        case "Obsidian3":
            material = "Obsidian of Obsession";
            break;
        case "Music Box1":
            material = "Harmonic Tune";
            break;
        case "Music Box2":
            material = "Ancestral Hymn";
            break;
        case "Music Box3":
            material = "Stellaris Symphony";
            break;
        case "Flower1":
            material = "Seed of Abundance";
            break;
        case "Flower2":
            material = "Sprout of Life";
            break;
        case "Flower3":
            material = "Flower of Eternity";
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

export const formatXPMats = (material) => {
    switch (material) {
        case "xp1":
            material = "Travel Encounters";
            break;
        case "xp2":
            material = "Adventure Log";
            break;
        case "xp3":
            material = "Travelers Guide";
            break;
        case "lc_xp1":
            material = "Sparse Aether";
            break;
        case "lc_xp2":
            material = "Condensed Aether";
            break;
        case "lc_xp3":
            material = "Refined Aether";
            break;
        default:
            break;
    }
    return material;
}