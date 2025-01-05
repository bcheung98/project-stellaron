import { Path, Rarity } from "./_common";
import { WeaponMaterials } from "./materials";
import { SkillWithScaling } from "./skill";
import { Stats } from "./stats";
import { Version } from "./version";

export interface Weapon {
    id: number;
    name: string;
    displayName: string;
    rarity: Rarity;
    path: Path;
    stats: Stats;
    passive: SkillWithScaling;
    materials: WeaponMaterials;
    description: string;
    release: Version;
}
