export interface CharacterCosts {
    name: string,
    costs: {
        credits: number[][],
        xp1: number[][],
        xp2: number[][],
        xp3: number[][],
        bossMat: number[][],
        calyx1: number[][],
        calyx2: number[][],
        calyx3: number[][],
        common1: number[][],
        common2: number[][],
        common3: number[][],
        weeklyBossMat: number[][],
        tracksOfDestiny: number[][]
    }
    traceIDs: string[]
}