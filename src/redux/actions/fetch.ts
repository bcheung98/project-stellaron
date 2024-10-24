import { createAsyncThunk } from "@reduxjs/toolkit"
import { CharacterData } from "../../types/character/CharacterData"
import { LightconeData } from "../../types/lightcone/LightconeData"
import { RelicData } from "../../types/relic/relic"
import { BannerData } from "../../types/banner/BannerData"

// https://api.irminsul.gg/hsr/characters.json
const charactersURL = "https://api.irminsul.gg/hsr/characters.json"

// https://api.irminsul.gg/hsr/lightcones.json
const lightconesURL = "https://api.irminsul.gg/hsr/lightcones.json"

// https://api.irminsul.gg/hsr/relics.json
const relicsURL = "https://api.irminsul.gg/hsr/relics-v2.json"

const characterBannerURL = "https://api.irminsul.gg/hsr/character-banners.json"
const lightconeBannerURL = "https://api.irminsul.gg/hsr/lightcone-banners.json"

export const fetchCharacters = createAsyncThunk("GET/characters", async (): Promise<CharacterData[]> => {
    const response = await fetch(charactersURL)
    return await response.json()
})

export const fetchLightcones = createAsyncThunk("GET/weapons", async (): Promise<LightconeData[]> => {
    const response = await fetch(lightconesURL)
    return await response.json()
})

export const fetchRelics = createAsyncThunk("GET/relics", async (): Promise<RelicData> => {
    const response = await fetch(relicsURL)
    return await response.json()
})

export const fetchCharacterBanners = createAsyncThunk("GET/characterBanners", async (): Promise<BannerData[]> => {
    const response = await fetch(characterBannerURL)
    return await response.json()
})

export const fetchLightconeBanners = createAsyncThunk("GET/lightconeBanners", async (): Promise<BannerData[]> => {
    const response = await fetch(lightconeBannerURL)
    return await response.json()
})