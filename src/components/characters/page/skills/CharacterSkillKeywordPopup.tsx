// Component imports
import MainContentBox from "custom/MainContentBox";
import { Text, TextStyled } from "styled/StyledTypography";

// MUI imports
import { useTheme, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// Helper imports
import { objectKeys } from "helpers/utils";
import { skillKeywords } from "data/skillKeywords";
import { parseSkillDescription } from "helpers/parseSkillDescription";

// Type imports
import { Skill, SkillKeywords } from "types/skill";

interface CharacterSkillKeywordPopupProps {
    onClose: () => void;
    tag: string;
    keywords?: SkillKeywords;
}

function CharacterSkillKeywordPopup({
    onClose,
    tag,
    keywords = {
        "": {
            name: "",
            description: "",
        },
    },
}: CharacterSkillKeywordPopupProps) {
    const theme = useTheme();

    let keyword: Skill;
    if (objectKeys(skillKeywords).includes(tag)) {
        keyword = skillKeywords[tag];
    } else {
        keyword = keywords[tag];
    }
    return (
        <Box sx={{ overflowY: "auto", scrollbarWidth: "thin" }}>
            <MainContentBox
                title="Glossary"
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
                <TextStyled variant="h6-styled">{keyword?.name || ""}</TextStyled>
                <Text sx={{ color: theme.text.description }}>
                    {parseSkillDescription({
                        description: keyword?.description || "",
                    })}
                </Text>
            </MainContentBox>
        </Box>
    );
}

export default CharacterSkillKeywordPopup;
