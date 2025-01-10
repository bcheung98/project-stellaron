import { BaseSyntheticEvent, useState } from "react";

// Component imports
import CharacterSkillLevelUpCost from "./CharacterSkillLevelUpCost";
import CharacterSkillScaling from "./CharacterSkillScaling";
import CharacterSkillKeywordPopup from "./CharacterSkillKeywordPopup";
import { Text, TextStyled } from "styled/StyledTypography";

// MUI imports
import { useTheme, Box, Stack, Dialog } from "@mui/material";

// Helper imports
import { parseSkillDescription } from "helpers/parseSkillDescription";

// Type imports
import { Element, Rarity } from "types/_common";
import {
    CharacterSkill,
    CharacterSkillKey,
    CharacterTalent,
    CharacterTechnique,
} from "types/character";
import { CharacterMaterials } from "types/materials";
import { LevelUpCostSkillKeys } from "custom/LevelUpCosts";
import { SkillKeywords } from "types/skill";
import CharacterSkillAdvancedStats from "./CharacterSkillAdvancedStats";

interface CharacterSkillTabProps {
    name: string;
    skillKey: CharacterSkillKey;
    skillData: CharacterSkill[] | CharacterTalent[] | CharacterTechnique[];
    rarity: Rarity;
    element: Element;
    materials: CharacterMaterials;
    keywords?: SkillKeywords;
}

export interface CharacterSkillScalingProps {
    skillKey: CharacterSkillKey;
    skillData: CharacterSkill[] | CharacterTalent[] | CharacterTechnique[];
    element: Element;
}

export interface CharacterSkillLevelUpProps {
    skillKey: LevelUpCostSkillKeys;
    rarity: Rarity;
    element: Element;
    materials: CharacterMaterials;
}

function CharacterSkillTab({
    skillData,
    skillKey,
    rarity,
    element,
    materials,
    keywords,
}: CharacterSkillTabProps) {
    const theme = useTheme();

    const [open, setOpen] = useState(false);
    const [tag, setTag] = useState("");
    const handleClickOpen = (event: BaseSyntheticEvent) => {
        setTag(event.target.className.split("-")[1]);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Box>
                <TextStyled sx={{ mb: "8px", fontStyle: "italic" }}>
                    {formatSkillKey(skillKey)}
                </TextStyled>
                <Stack spacing={2}>
                    {skillData.map((skill, index) => (
                        <Box key={`${skillKey}-${index}`}>
                            <Box sx={{ mb: "8px" }}>
                                <TextStyled
                                    variant="h5-styled"
                                    sx={{ mb: "4px" }}
                                >
                                    {skill.name}
                                </TextStyled>
                                {skill.tag && (
                                    <TextStyled
                                        sx={{ color: theme.text.header }}
                                    >
                                        [{skill.tag}]
                                    </TextStyled>
                                )}
                            </Box>
                            <CharacterSkillAdvancedStats skill={skill} />
                            <Text sx={{ color: theme.text.description }}>
                                {parseSkillDescription({
                                    description: skill.description,
                                    newClassName: "character-skill-value",
                                    onClick: handleClickOpen,
                                })}
                            </Text>
                        </Box>
                    ))}
                </Stack>
                <Box sx={{ pt: "16px" }}>
                    {skillKey !== "technique" && (
                        <CharacterSkillScaling
                            skillKey={skillKey}
                            skillData={skillData}
                            element={element}
                        />
                    )}
                </Box>
                {skillKey !== "technique" && (
                    <CharacterSkillLevelUpCost
                        skillKey={skillKey}
                        rarity={rarity}
                        element={element}
                        materials={materials}
                    />
                )}
            </Box>
            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                <CharacterSkillKeywordPopup
                    onClose={handleClose}
                    tag={tag}
                    keywords={keywords}
                />
            </Dialog>
        </>
    );
}

export default CharacterSkillTab;

function formatSkillKey(skill: CharacterSkillKey) {
    switch (skill) {
        case "attack":
            return "Basic ATK";
        case "skill":
            return "Skill";
        case "ultimate":
            return "Ultimate";
        case "talent":
            return "Talent";
        case "technique":
            return "Technique";
    }
}
