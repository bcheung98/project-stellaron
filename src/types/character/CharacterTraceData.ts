export interface CharacterTraceData {
    name?: string,
    type?: string,
    description: string,
    unlock: string,
    subTraces?: CharacterTraceData[]
}