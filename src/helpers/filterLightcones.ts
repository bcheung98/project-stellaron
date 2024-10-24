export const filterLightcones = (lightcones, filters, searchValue) => {
    let lc = [...lightcones];
    if (filters.lc_path.length > 0) {
        lc = lc.filter(lightcone => filters.lc_path.includes(lightcone.path));
    }
    if (filters.lc_rarity.length > 0) {
        lc = lc.filter(lightcone => filters.lc_rarity.includes(lightcone.rarity));
    }
    if (filters.lc_calyxMat.length > 0) {
        lc = lc.filter(lightcone => filters.lc_calyxMat.includes(lightcone.materials.calyxMat));
    }
    if (filters.lc_commonMat.length > 0) {
        lc = lc.filter(lightcone => filters.lc_commonMat.includes(lightcone.materials.commonMat));
    }
    if (searchValue !== "") {
        lc = lc.filter(lightcone => lightcone.name.toLowerCase().includes(searchValue.toLowerCase()));
    }
    return lc;
}