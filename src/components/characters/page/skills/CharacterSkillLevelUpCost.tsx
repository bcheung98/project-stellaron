// Component imports
import Dropdown from "custom/Dropdown";
import LevelUpCosts from "custom/LevelUpCosts";

// Type imports
import { CharacterSkillLevelUpProps } from "./CharacterSkillTab";
import { getElementColor } from "helpers/elementColors";

function CharacterSkillLevelUpCost({
    skillKey,
    name,
    rarity,
    element,
    path,
    materials,
}: CharacterSkillLevelUpProps) {
    return (
        <Dropdown
            title="Level Up Cost"
            iconColor={getElementColor({ element })}
            contentPadding="16px 24px"
        >
            <LevelUpCosts
                type="character"
                skillKey={skillKey}
                name={name}
                element={element}
                rarity={rarity}
                path={path}
                mats={materials}
                threshold="@250"
            />
        </Dropdown>
    );
}

export default CharacterSkillLevelUpCost;
