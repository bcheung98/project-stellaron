// Component imports
import LevelSlider from "./LevelSlider";
import StatNode from "./StatNode";

// MUI imports
import { Divider, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";

// Helper imports
import { range } from "helpers/utils";
import { getElementColor } from "helpers/elementColors";
import {
    getCharacterLevelCost,
    getCharacterSkillCost,
} from "helpers/getLevelUpCosts";
import { useAppSelector } from "helpers/hooks";
import { selectCharacters } from "reducers/character";

// Type imports
import { CharacterCostObject, UpdateCostsPayload } from "types/costs";
import { CardMode } from "./PlannerCard";
import { Character } from "types/character";

function CharacterSliders({
    character,
    mode,
}: {
    character: CharacterCostObject;
    mode: CardMode;
}) {
    const name = character.name.toLowerCase();
    const char = useAppSelector(selectCharacters).find(
        (c) => c.name === character.name
    ) as Character;

    const sliders: {
        title: string;
        icon?: string;
        levels: (string | number)[];
        type: UpdateCostsPayload["type"];
        fn: Function;
    }[] = [
        {
            title: "Level",
            levels: charLevel,
            type: "level",
            fn: getCharacterLevelCost,
        },
        {
            title: "Basic ATK",
            icon: `characters/skills/${name}_attack`,
            levels: skillLevel.slice(0, 6),
            type: "attack",
            fn: getCharacterSkillCost,
        },
        {
            title: "Skill",
            icon: `characters/skills/${name}_skill`,
            levels: skillLevel,
            type: "skill",
            fn: getCharacterSkillCost,
        },
        {
            title: "Ultimate",
            icon: `characters/skills/${name}_ultimate`,
            levels: skillLevel,
            type: "ultimate",
            fn: getCharacterSkillCost,
        },
        {
            title: "Talent",
            icon: `characters/skills/${name}_talent`,
            levels: skillLevel,
            type: "talent",
            fn: getCharacterSkillCost,
        },
    ];

    const [Level, Attack, Skill, Ultimate, Talent] = sliders.map((slider) => (
        <LevelSlider
            key={slider.type}
            mode={mode}
            name={character.name}
            variant="character"
            title={slider.title}
            icon={slider.icon}
            rarity={character.rarity}
            levels={slider.levels}
            color={getElementColor({ element: character.element })}
            dispatchProps={{
                type: slider.type,
                getCost: slider.fn,
            }}
        />
    ));

    return (
        <Stack spacing={2}>
            <Grid
                container
                rowSpacing={1}
                columnSpacing={mode === "view" ? 2 : 6}
            >
                <Grid size={12}>{Level}</Grid>
                {[Attack, Skill, Ultimate, Talent].map((slider, index) => (
                    <Grid
                        key={index}
                        size={
                            mode === "view"
                                ? { xs: 12, sm: 4 }
                                : { xs: 12, md: 6 }
                        }
                    >
                        {slider}
                    </Grid>
                ))}
            </Grid>
            <Stack spacing={2}>
                <Stack spacing={2} divider={<Divider />} sx={{ px: "8px" }}>
                    {char.traces.map((trace, index) => (
                        <StatNode
                            key={index}
                            mode={mode}
                            id={`${String.fromCharCode(index + 65)}-1`}
                            name={character.name}
                            rarity={character.rarity}
                            trace={trace}
                        />
                    ))}
                </Stack>
            </Stack>
        </Stack>
    );
}

export default CharacterSliders;

const charLevel = [
    "1",
    "20",
    "20+",
    "30",
    "30+",
    "40",
    "40+",
    "50",
    "50+",
    "60",
    "60+",
    "70",
    "70+",
    "80",
];

const skillLevel = range(1, 10);
