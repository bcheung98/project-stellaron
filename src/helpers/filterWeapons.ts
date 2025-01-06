import { Weapon } from "types/weapon";

export function filterLightcones(
    weapons: Weapon[],
    filters: WeaponFilterState,
    searchValue: string
) {
    let lc = [...weapons];
    if (filters.path.length > 0) {
        lc = lc.filter((weapon) => filters.path.includes(weapon.path));
    }
    if (filters.rarity.length > 0) {
        lc = lc.filter((weapon) => filters.rarity.includes(weapon.rarity));
    }
    if (filters.calyxMat.length > 0) {
        lc = lc.filter((weapon) =>
            filters.calyxMat.includes(weapon.materials.calyxMat as string)
        );
    }
    if (filters.commonMat.length > 0) {
        lc = lc.filter((weapon) =>
            filters.commonMat.includes(weapon.materials.commonMat as string)
        );
    }
    if (searchValue !== "") {
        lc = lc.filter((weapon) =>
            weapon.name.toLowerCase().includes(searchValue.toLowerCase())
        );
    }
    return lc;
}
