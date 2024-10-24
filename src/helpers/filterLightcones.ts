import { LightconeFilterState } from "../redux/reducers/LightconeFilterReducer"
import { LightconeData } from "../types/lightcone/LightconeData"

export const filterLightcones = (lightcones: LightconeData[], filters: LightconeFilterState, searchValue: string) => {
    let lc = [...lightcones]
    if (filters.path.length > 0) {
        lc = lc.filter(lightcone => filters.path.includes(lightcone.path))
    }
    if (filters.rarity.length > 0) {
        lc = lc.filter(lightcone => filters.rarity.includes(lightcone.rarity))
    }
    if (filters.calyxMat.length > 0) {
        lc = lc.filter(lightcone => filters.calyxMat.includes(lightcone.materials.calyxMat as string))
    }
    if (filters.commonMat.length > 0) {
        lc = lc.filter(lightcone => filters.commonMat.includes(lightcone.materials.commonMat as string))
    }
    if (searchValue !== "") {
        lc = lc.filter(lightcone => lightcone.name.toLowerCase().includes(searchValue.toLowerCase()))
    }
    return lc
}