// Component imports
import LevelUpCosts from "custom/LevelUpCosts";
import MainContentBox from "custom/MainContentBox";

// MUI imports
import { useTheme, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// Type imports
import { Character, CharacterUnlockKeys } from "types/character";

interface CharacterTraceCostProps {
    onClose: () => void;
    type: "main" | "small";
    character: Character;
    unlock: CharacterUnlockKeys;
}

function CharacterTraceCost({
    onClose,
    type,
    character,
    unlock,
}: CharacterTraceCostProps) {
    const theme = useTheme();

    return (
        <Box sx={{ overflowY: "auto", scrollbarWidth: "thin" }}>
            <MainContentBox
                title="Unlock Cost"
                actions={
                    <IconButton
                        disableRipple
                        onClick={onClose}
                        sx={{ color: theme.appbar.color, p: 0 }}
                    >
                        <CloseIcon />
                    </IconButton>
                }
                contentProps={{ padding: "16px" }}
            >
                <LevelUpCosts
                    type="character"
                    skillKey={type === "main" ? "traceMain" : "traceSmall"}
                    name={character.name}
                    element={character.element}
                    rarity={character.rarity}
                    mats={character.materials}
                    unlock={unlock}
                />
            </MainContentBox>
        </Box>
    );
}

export default CharacterTraceCost;
