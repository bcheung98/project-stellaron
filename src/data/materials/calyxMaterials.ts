import { objectKeys } from "helpers/utils";
import { CalyxMaterialKeys } from "types/materials";

export const calyxMaterials = {
    Blade: {
        Blade0: "Blade (Destruction)",
        Blade1: "Shattered Blade",
        Blade2: "Lifeless Blade",
        Blade3: "Worldbreaker Blade",
    },
    Arrow: {
        Arrow0: "Arrow (Hunt)",
        Arrow1: "Arrow of the Beast Hunter",
        Arrow2: "Arrow of the Demon Slayer",
        Arrow3: "Arrow of the Starchaser",
    },
    Key: {
        Key0: "Key (Erudition)",
        Key1: "Key of Inspiration",
        Key2: "Key of Knowledge",
        Key3: "Key of Wisdom",
    },
    Shield: {
        Shield0: "Shield (Preservation)",
        Shield1: "Endurance of Bronze",
        Shield2: "Oath of Steel",
        Shield3: "Safeguard of Amber",
    },
    Obsidian: {
        Obsidian0: "Obsidian (Nihility)",
        Obsidian1: "Obsidian of Dread",
        Obsidian2: "Obsidian of Desolation",
        Obsidian3: "Obsidian of Obsession",
    },
    "Music Box": {
        "Music Box0": "Music Box (Harmony)",
        "Music Box1": "Harmonic Tune",
        "Music Box2": "Ancestral Hymn",
        "Music Box3": "Stellaris Symphony",
    },
    Flower: {
        Flower0: "Flower (Abundance)",
        Flower1: "Seed of Abundance",
        Flower2: "Sprout of Life",
        Flower3: "Flower of Eternity",
    },
    Fang: {
        Fang0: "Fang (Destruction)",
        Fang1: "Borisin Teeth",
        Fang2: "Lupitoxin Sawteeth",
        Fang3: "Moon Madness Fang",
    },
    Bullet: {
        Bullet0: "Bullet (Hunt)",
        Bullet1: "Meteoric Bullet",
        Bullet2: "Destined Expiration",
        Bullet3: "Countertemporal Shot",
    },
    Draft: {
        Draft0: "Draft (Erudition)",
        Draft1: "Rough Sketch",
        Draft2: "Dynamic Outlining",
        Draft3: "Exquisite Colored Draft",
    },
    Melody: {
        Melody0: "Melody (Harmony)",
        Melody1: "Firmament Note",
        Melody2: "Celestial Section",
        Melody3: "Heavenly Melody",
    },
    Heliobus: {
        Heliobus0: "Heliobus (Nihility)",
        Heliobus1: "Fiery Spirit",
        Heliobus2: "Starfire Essence",
        Heliobus3: "Heaven Incinerator",
    },
    Amber: {
        Amber0: "Amber (Preservation)",
        Amber1: "Scattered Stardust",
        Amber2: "Crystal Meteorites",
        Amber3: "Divine Amber",
    },
    "Alien Tree": {
        "Alien Tree0": "Alien Tree (Abundance)",
        "Alien Tree1": "Alien Tree Seed",
        "Alien Tree2": "Nourishing Honey",
        "Alien Tree3": "Myriad Fruit",
    },
    "Memory Cell": {
        "Memory Cell0": "Memory Cell (Remembrance)",
        "Memory Cell1": "Bīja of Consciousness",
        "Memory Cell2": "Seedling of Manas",
        "Memory Cell3": "Flower of Ālaya",
    },
};

export const filteredCalyxMaterials = (showUnreleased = false) => {
    if (showUnreleased) {
        return objectKeys(calyxMaterials);
    } else {
        return objectKeys(calyxMaterials).filter(
            (material) =>
                !Object.keys(calyxMaterials[material]).includes("unreleased")
        );
    }
};

export const formatCalyxMaterials = (material: CalyxMaterialKeys): string => {
    const mat = calyxMaterials[material];
    return mat[`${material}0` as keyof typeof mat] || material;
};
