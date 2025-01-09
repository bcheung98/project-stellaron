import { Element } from "types/_common";
import { BonusStat } from "types/character";

export function formatCharacterBonusStats(stat: BonusStat) {
    if (stat.endsWith("DMG Boost")) {
        const element = stat.split(" ")[0] as Element;
        return `<span class="text-${element.toLowerCase()}">${element} DMG</span>`;
    } else {
        return stat;
    }
}
