// Old trace viewer layout

import { BaseSyntheticEvent, useState } from "react";

// Component imports
import CharacterSkillKeywordPopup from "../skills/CharacterSkillKeywordPopup";
import CharacterTraceCost from "./CharacterTraceCost";
import Image from "custom/Image";
import { Text, TextStyled } from "styled/StyledTypography";

// MUI imports
import { useTheme, Box, Card, Stack, Dialog, Divider } from "@mui/material";

// Helper imports
import { characterBonusStats } from "data/characterBonusStats";
import { getElementColor } from "helpers/elementColors";
import { parseSkillDescription } from "helpers/parseSkillDescription";
import { formatCharacterBonusStats } from "helpers/formatCharacterBonusStats";

// Type imports
import {
    Character,
    CharacterTraceNodeMain,
    CharacterTraceNodeSmall,
} from "types/character";

interface CharacterTraceNodeProps {
    id: string;
    character: Character;
    trace: CharacterTraceNodeMain | CharacterTraceNodeSmall;
}

function CharacterTraceNode({ id, character, trace }: CharacterTraceNodeProps) {
    const theme = useTheme();

    const [keywordDialogOpen, setKeywordDialogOpen] = useState(false);
    const [tag, setTag] = useState("");
    const handleKeywordDialogClickOpen = (event: BaseSyntheticEvent) => {
        setTag(event.target.className.split("-")[1]);
        setKeywordDialogOpen(true);
    };
    const handleKeywordDialogClose = () => {
        setKeywordDialogOpen(false);
    };

    const [costDialogOpen, setCostDialogOpen] = useState(false);
    const handleCostDialogClickOpen = () => {
        setCostDialogOpen(true);
    };
    const handleCostDialogClose = () => {
        setCostDialogOpen(false);
    };

    let type: "main" | "small";
    let title = "";
    let description = "";
    let unlock = trace.unlock;
    let imgSrc = "";
    let imgSize = "";

    if ("name" in trace) {
        type = "main";
        title = trace.name;
        description = trace.description;
        imgSrc = `characters/skills/${character.name.toLowerCase()}_${unlock.toLowerCase()}`;
        imgSize = "48px";
    } else {
        type = "small";
        title = `${formatCharacterBonusStats(trace.stat)} +${
            characterBonusStats[trace.stat][unlock]
        }`;
        imgSrc = `stat_icons/${trace.stat}`;
        imgSize = "40px";
    }

    function NodeContent() {
        return (
            <>
                <Card
                    id={id}
                    sx={{
                        position: "relative",
                        zIndex: 2,
                        p: 2,
                        backgroundColor: theme.background(1, "light"),
                        minWidth: "160px",
                        width:
                            type === "main"
                                ? { xs: "100%", xl: "40%" }
                                : "auto",
                        maxWidth: "540px",
                    }}
                >
                    <Stack spacing={1}>
                        <Stack spacing={2} direction="row" alignItems="center">
                            <Image
                                id={`${id}-icon`}
                                src={imgSrc}
                                alt={id}
                                style={{
                                    width: imgSize,
                                    height: imgSize,
                                    padding: "4px",
                                    border: `2px solid ${getElementColor({
                                        element: character.element,
                                    })}`,
                                    borderRadius: "64px",
                                    backgroundColor:
                                        theme.appbar.backgroundColor,
                                    cursor: "pointer",
                                }}
                                onClick={handleCostDialogClickOpen}
                            />
                            <Box>
                                <TextStyled
                                    variant={
                                        type === "main"
                                            ? "h6-styled"
                                            : "body1-styled"
                                    }
                                >
                                    {parseSkillDescription({
                                        description: title,
                                    })}
                                </TextStyled>
                                <TextStyled
                                    variant={
                                        type === "main"
                                            ? "body1-styled"
                                            : "body2-styled"
                                    }
                                    sx={{ fontStyle: "italic" }}
                                >
                                    {unlock}
                                </TextStyled>
                            </Box>
                        </Stack>
                        {description && (
                            <Text
                                component="span"
                                sx={{ color: theme.text.description }}
                            >
                                {parseSkillDescription({
                                    description: description,
                                    onClick: handleKeywordDialogClickOpen,
                                })}
                            </Text>
                        )}
                    </Stack>
                </Card>
                <Dialog
                    open={costDialogOpen}
                    onClose={handleCostDialogClose}
                    maxWidth="xs"
                    fullWidth
                >
                    <CharacterTraceCost
                        onClose={handleCostDialogClose}
                        type={type}
                        character={character}
                        unlock={unlock}
                    />
                </Dialog>
            </>
        );
    }

    return (
        <>
            <Stack
                direction={{ xs: "column", xl: "row" }}
                alignItems={{ xs: "flex-start", xl: "center" }}
                spacing={{ xs: 2, xl: 5 }}
            >
                <NodeContent />
                {trace.subTraces && (
                    <Stack
                        spacing={2}
                        sx={{ pl: { xs: 2, sm: 8, xl: 0 } }}
                        divider={<Divider />}
                    >
                        {trace.subTraces.map((subTrace, index) => {
                            let nextID = incrementTraceNodeID(id);
                            // If there is more than one child node, add an extra identifier to the ID
                            if (trace.subTraces && trace.subTraces.length > 1) {
                                nextID = nextID + `-${index}`;
                            }
                            return (
                                <Box key={index}>
                                    <CharacterTraceNode
                                        id={nextID}
                                        character={character}
                                        trace={subTrace}
                                    />
                                </Box>
                            );
                        })}
                    </Stack>
                )}
            </Stack>
            <Dialog
                open={keywordDialogOpen}
                onClose={handleKeywordDialogClose}
                maxWidth="sm"
                fullWidth
            >
                <CharacterSkillKeywordPopup
                    onClose={handleKeywordDialogClose}
                    tag={tag}
                    keywords={character.keywords}
                />
            </Dialog>
        </>
    );
}

export default CharacterTraceNode;

const incrementTraceNodeID = (id: string) => {
    let splitID = id.split("-");
    splitID[1] = (parseInt(splitID[1]) + 1).toString();
    return splitID.join("-");
};
