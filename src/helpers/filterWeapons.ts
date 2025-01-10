import { WeaponFilterState } from "reducers/weaponFilters";
import { Weapon } from "types/weapon";

export function filterWeapons(
    weapons: Weapon[],
    filters: WeaponFilterState,
    searchValue: string
) {
    let weps = [...weapons];
    if (filters.path.length > 0) {
        weps = weps.filter((wep) => filters.path.includes(wep.path));
    }
    if (filters.rarity.length > 0) {
        weps = weps.filter((wep) => filters.rarity.includes(wep.rarity));
    }
    if (filters.calyxMat.length > 0) {
        weps = weps.filter((wep) =>
            filters.calyxMat.includes(wep.materials.calyxMat)
        );
    }
    if (filters.commonMat.length > 0) {
        weps = weps.filter((wep) =>
            filters.commonMat.includes(wep.materials.commonMat)
        );
    }
    if (searchValue !== "") {
        weps = weps.filter(
            (wep) =>
                wep.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                wep.displayName
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
        );
    }
    return weps;
}
