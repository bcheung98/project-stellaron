import { Path, Rarity } from "./_common";
import { WeaponMaterials } from "./materials";
import { SkillWithScaling } from "./skill";
import { Version } from "./version";

export interface WeaponProps {
    weapon: Weapon;
}

export interface Weapon {
    id: number;
    name: string;
    displayName: string;
    rarity: Rarity;
    path: Path;
    stats: WeaponStats;
    passive: SkillWithScaling;
    materials: WeaponMaterials;
    description: string;
    release: Version;
}

export interface WeaponStats {
    hp: number;
    atk: number;
    def: number;
}
