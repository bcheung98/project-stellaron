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

export type CharacterSkillsKeys = keyof CharacterSkills

export interface CharacterSkills {
    attack: CharacterSkill[],
    skill: CharacterSkill[],
    ultimate: CharacterSkill[],
    talent: CharacterTalent[],
    technique: CharacterTechnique[]
}

export interface CharacterSkill extends SkillWithScaling {
    tag?: string,
    cost: {
        value: number,
        type: string
    },
    regen?: number,
    break?: {
        [key: string]: number
    }
}

export type CharacterTalent = Omit<CharacterSkill, "resource">
export type CharacterTechnique = Omit<CharacterSkill, "resource" | "scaling">

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