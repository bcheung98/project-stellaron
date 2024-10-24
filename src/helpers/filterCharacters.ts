import { CharacterFilterState } from "../redux/reducers/CharacterFilterReducer"
import { CharacterData } from "../types/character/CharacterData"

export function filterCharacters(characters: CharacterData[], filters: CharacterFilterState, searchValue: string) {
    let chars = [...characters]
    if (filters.element.length > 0) {
        chars = chars.filter(char => filters.element.includes(char.element))
    }
    if (filters.path.length > 0) {
        chars = chars.filter(char => filters.path.includes(char.path))
    }
    if (filters.rarity.length > 0) {
        chars = chars.filter(char => filters.rarity.includes(char.rarity))
    }
    if (filters.calyxMat.length > 0) {
        chars = chars.filter(char => filters.calyxMat.includes(char.materials.calyxMat as string))
    }
    if (filters.commonMat.length > 0) {
        chars = chars.filter(char => filters.commonMat.includes(char.materials.commonMat as string))
    }
    if (filters.bossMat.length > 0) {
        chars = chars.filter(char => filters.bossMat.includes(char.materials.bossMat as string))
    }
    if (filters.weeklyBossMat.length > 0) {
        chars = chars.filter(char => filters.weeklyBossMat.includes(char.materials.weeklyBossMat as string))
    }
    if (filters.world.length > 0) {
        chars = chars.filter(char => filters.world.includes(char.world))
    }
    if (searchValue !== "") {
        chars = chars.filter(char => char.name.toLowerCase().includes(searchValue.toLowerCase()))
    }
    return chars
}