import { LightconeMaterials } from "./materials";
import { SkillWithScaling } from "./skill";
import { Stats } from "./stats";
import { Version } from "./version";

export interface Lightcone {
    id: number,
    name: string,
    displayName: string,
    rarity: number,
    path: string,
    stats: Stats,
    passive: SkillWithScaling,
    materials: LightconeMaterials,
    description: string,
    release: Version
}