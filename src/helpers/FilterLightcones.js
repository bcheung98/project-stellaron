export const FilterLightcones = (lightcones, filters, searchValue) => {
    let lc = [...lightcones];
    if (filters.path.length > 0) {
        lc = lc.filter(lightcone => filters.path.includes(lightcone.path));
    }
    if (filters.rarity.length > 0) {
        lc = lc.filter(lightcone => filters.rarity.includes(lightcone.rarity));
    }
    if (filters.commonMat.length > 0) {
        lc = lc.filter(lightcone => filters.commonMat.includes(lightcone.materials.commonMat));
    }
    if (searchValue !== "") {
        lc = lc.filter(lightcone => lightcone.name.toLowerCase().includes(searchValue.toLowerCase()));
    }
    return lc;
}