import { Rarity } from "./_common";
import { Version } from "./version";

export interface RelicData {
    cavernRelics: Relic[];
    planarOrnaments: Relic[];
}

export interface RelicProps {
    relic: Relic;
}

export interface Relic {
    name: string;
    displayName: string;
    rarity: Rarity;
    setEffect: {
        twoPiece?: string;
        fourPiece?: string;
    };
    pieces: {
        type: RelicPiece;
        name: string;
        description: string;
    }[];
    release: Version;
}

export type RelicPiece = "head" | "hand" | "body" | "feet" | "orb" | "rope";
