import { MaterialsData } from "../MaterialsData"
import { SkillData } from "../SkillData"
import { StatsData } from "../StatsData"
import { VersionData } from "../VersionData"

export interface LightconeData {
    id: number,
    name: string,
    displayName?: string,
    rarity: number,
    path: string,
    stats: StatsData,
    passive: SkillData,
    materials: MaterialsData,
    description: string,
    release: VersionData
}