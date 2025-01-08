// Component imports
import Dropdown from "custom/Dropdown";
import LevelUpCosts from "custom/LevelUpCosts";

// MUI imports
import { useTheme } from "@mui/material";

// Type imports
import { CharacterSkillLevelUpProps } from "./CharacterSkillTab";
import { getElementColor } from "helpers/elementColors";

function CharacterSkillLevelUpCost({
    skillKey,
    rarity,
    element,
    materials,
}: CharacterSkillLevelUpProps) {
    const theme = useTheme();

    return (
        <Dropdown
            title="Level Up Cost"
            iconColor={getElementColor(theme, element)}
            contentPadding="16px 24px"
        >
            <LevelUpCosts
                type="character"
                skillKey={skillKey}
                rarity={rarity}
                element={element}
                mats={materials}
                threshold="@250"
            />
        </Dropdown>
    );
}

export default CharacterSkillLevelUpCost;
