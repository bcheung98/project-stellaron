// import { Element, Path, Rarity } from "./_common"
import { CharacterMaterials } from "./materials"
import { Skill, SkillWithScaling } from "./skill"
import { Stats } from "./stats"
import { Version } from "./version"

export interface CharacterProps {
    character: Character
}

export interface Character {
    id: number,
    name: string,
    displayName?: string,
    rarity: number,
    element: string,
    path: string,
    skills: CharacterSkills,
    traces: CharacterTraces[],
    eidolon: CharacterEidolons,
    stats: CharacterStats,
    materials: CharacterMaterials,
    description: string,
    gender: string,
    faction: string,
    world: string,
    keywords: {
        tag: string,
        name: string,
        description: string
    },
    splashArt: {
        scale: number,
        translate: number[]
    },
    voiceActors: {
        en: string,
        jp: string
    },
    release: Version
}

export interface CharacterSkills {
    attack: CharacterSkill[],
    skill: CharacterSkill[],
    ultimate: CharacterSkill[],
    talent: CharacterSkill[],
    technique: CharacterSkill[]
}

export interface CharacterSkill extends SkillWithScaling {
    tag: string,
    cost: number,
    resource: string,
    energy?: {
        generation: number,
        cost?: number
    },
    break: {
        [key: string]: number
    }
}

export interface CharacterTraces {
    name?: string,
    type?: string,
    description: string,
    unlock: string,
    subTraces?: CharacterTraces[]
}

export interface CharacterEidolons {
    e1: Skill,
    e2: Skill,
    e3: Skill,
    e4: Skill,
    e5: Skill,
    e6: Skill
}

export interface CharacterStats extends Stats {
    speed: number[],
    taunt: number[]
}