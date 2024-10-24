export interface RelicData {
    cavernRelics: Relic[],
    planarOrnaments: Relic[]
}

export interface Relic {
    name: string,
    displayName?: string,
    rarity: number,
    setEffect: {
        twoPiece?: string,
        fourPiece?: string
    },
    pieces: {
        type: "head" | "hand" | "body" | "feet" | "orb" | "rope",
        name: string,
        description: string
    }[],
    release: {
        version: string
    }
}