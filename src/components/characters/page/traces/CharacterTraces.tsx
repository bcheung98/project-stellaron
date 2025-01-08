// Component imports
import CharacterTraceNode from "./CharacterTraceNode";
import CharacterTraceTotalStat from "./CharacterTraceTotalStat";
import MainContentBox from "custom/MainContentBox";

// MUI imports
import { Stack, Divider } from "@mui/material";

// Type imports
import { CharacterProps } from "types/character";

function CharacterTraces({ character }: CharacterProps) {
    return (
        <MainContentBox title="Traces">
            <Stack spacing={2} divider={<Divider />}>
                {character.traces.map((trace, index) => (
                    <CharacterTraceNode
                        key={index}
                        id={`${String.fromCharCode(index + 65)}-1`}
                        character={character}
                        trace={trace}
                    />
                ))}
                <CharacterTraceTotalStat
                    element={character.element}
                    traces={character.traces}
                />
            </Stack>
        </MainContentBox>
    );
}

export default CharacterTraces;
