import { objectKeys } from "helpers/utils";
import { WeeklyBossMaterial } from "types/materials";

export const weeklyBossMaterials = <const>{
    "Destroyer's Final Road": {
        displayName: "Destroyer's Final Road",
        source: "Doomsday Beast",
    },
    "Guardian's Lament": {
        displayName: "Guardian's Lament",
        source: "Cocolia",
    },
    "Regret of Infinite Ochema": {
        displayName: "Regret of Infinite Ochema",
        source: "Phantylia",
    },
    "Past Evils of the Borehole Planet Disaster": {
        displayName: "Past Evils of the Borehole Planet Disaster",
        source: "Starcrusher Swarm King",
    },
    "Lost Echo of the Shared Wish": {
        displayName: "Lost Echo of the Shared Wish",
        source: "The Great Septimus",
    },
    "Auspice Sliver": {
        displayName: "Auspice Sliver",
        source: 'Shadow of "Feixiao"',
    },
};

export const weeklyBossMatNames = objectKeys(weeklyBossMaterials);

export const filteredWeeklyBossMaterials = (showUnreleased = false) => {
    if (showUnreleased) {
        return weeklyBossMatNames;
    } else {
        return weeklyBossMatNames.filter(
            (material) =>
                !Object.keys(weeklyBossMaterials[material]).includes(
                    "unreleased"
                )
        );
    }
};

export const formatWeeklyBossMaterials = (material: WeeklyBossMaterial) => {
    const mat = weeklyBossMaterials[material] || {
        displayName: "",
        source: "?",
    };
    return `${mat.displayName} (${mat.source})`;
};
