export interface RelicData {
    name: string,
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