import { CharacterEidolonData } from "./CharacterEidolonData"
import { CharacterSkillData } from "./CharacterSkillData"
import { CharacterTraceData } from "./CharacterTraceData"
import { StatsData } from "../StatsData"
import { MaterialsData } from "../MaterialsData"
import { VersionData } from "../VersionData"

export interface CharacterData {
    id: number,
    name: string,
    displayName?: string,
    rarity: number,
    element: string,
    path: string,
    skills: CharacterSkillData,
    traces: CharacterTraceData[],
    eidolon: CharacterEidolonData,
    stats: StatsData,
    materials: MaterialsData,
    description: string,
    gender: string,
    faction: string,
    world: string,
    splashArt: {
        scale: number,
        translate: number[]
    },
    voiceActors: {
        en: string,
        jp: string
    },
    release: VersionData
}