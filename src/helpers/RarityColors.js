export const GetRarityColor = (rarity) => {
    if (rarity === 5) {
        return "rgb(255, 208, 112)";
    }
    if (rarity === 4) {
        return "rgb(175, 134, 255)";
    }
    if (rarity === 3) {
        return "rgb(105, 157, 237)";
    }
}

export const GetBackgroundColor = (rarity, opacity = 0.45) => {
    if (rarity === 5) {
        return `rgba(255, 199, 129, ${opacity})`;
    }
    if (rarity === 4) {
        return `rgba(193, 153, 253, ${opacity})`;
    }
    if (rarity === 3) {
        return `rgba(115, 176, 244, ${opacity})`;
    }
}