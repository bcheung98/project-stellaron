import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, CardHeader } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomTooltip } from "../../helpers/CustomTooltip";
import { Accordion, AccordionDetails, AccordionSummary } from "../../helpers/CustomAccordion";
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage";
import CharacterAscensionCardMaterials from "./CharacterAscensionCardMaterials";
import CharacterAscensionLevel from "./CharacterAscensionLevel";
import CharacterAscensionBasicATK from "./CharacterAscensionBasicATK";
import CharacterAscensionSkill from "./CharacterAscensionSkill";
import CharacterAscensionUltimate from "./CharacterAscensionUltimate";
import CharacterAscensionTalent from "./CharacterAscensionTalent";
import CharacterAscensionTraces from "./CharacterAscensionTraces";

const CharacterAscensionCard = (props) => {

    const theme = useTheme();

    let { name, rarity, element, path, materials } = props.character;

    const smallIcon = {
        width: "24px",
        height: "24px",
        backgroundColor: `${theme.materialImage.backgroundColor}`,
        border: `1px solid ${theme.border.color}`,
        borderRadius: "24px",
        marginBottom: "10px",
    };

    return (
        <Box
            sx={{
                width: "750px",
                border: `1px solid ${theme.border.color}`,
                borderRadius: "5px",
                backgroundColor: `${theme.paper.backgroundColor}`,
                mr: "30px",
                mb: "30px",
                p: 1,
            }}
        >
            <CardHeader
                avatar={
                    <Box sx={{ position: "relative" }}>
                        <img alt={name} src={(`${process.env.REACT_APP_URL}/characters/icons/Icon_${name.split(" ").join("_")}.png`)} style={{ width: "64px", border: `2px solid ${theme.border.color}`, borderRadius: "64px" }} onError={ErrorLoadingImage} />
                        <Box sx={{ position: "absolute", top: "50px", left: "-5px" }}>
                            <CustomTooltip title={element} arrow placement="top">
                                <img style={smallIcon} src={(`${process.env.REACT_APP_URL}/elements/Element_${element}.png`)} alt={element} onError={ErrorLoadingImage} />
                            </CustomTooltip>
                        </Box>
                        <Box sx={{ position: "absolute", top: "50px", left: "45px" }}>
                            <CustomTooltip title={path} arrow placement="top">
                                <img style={smallIcon} src={(`${process.env.REACT_APP_URL}/paths/Path_The_${path}.png`)} alt={path} onError={ErrorLoadingImage} />
                            </CustomTooltip>
                        </Box>
                    </Box>
                }
                title={
                    <React.Fragment>
                        <Typography variant="h6" sx={{ color: `${theme.text.color}` }}>
                            {name}
                        </Typography>
                        <Typography sx={{ color: "rgb(255, 208, 112)", textShadow: "#e3721b 1px 1px 10px" }} variant="h6">
                            {[...Array(rarity).keys()].map(() => "✦")}
                        </Typography>
                    </React.Fragment>
                }
            />
            <hr style={{ border: `.5px solid ${theme.border.color}`, marginTop: "15px", marginBottom: "15px" }} />
            <Box sx={{ ml: "15px" }}>
                <Typography variant="body1" sx={{ color: `${theme.text.color}` }}>
                    Materials Required
                </Typography>
                <CharacterAscensionCardMaterials character={props.character} />
            </Box>
            <hr style={{ border: `.5px solid ${theme.border.color}`, marginTop: "15px", marginBottom: "15px" }} />
            <Accordion>
                <AccordionSummary>
                    <Typography variant="body1" sx={{ color: `${theme.text.color}` }}>
                        Edit
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <CharacterAscensionLevel character={props.character} />
                    <Grid container spacing={2}>
                        <Grid xs={6}>
                            <CharacterAscensionBasicATK character={props.character} />
                        </Grid>
                        <Grid xs={6}>
                            <CharacterAscensionSkill character={props.character} />
                        </Grid>
                        <Grid xs={6}>
                            <CharacterAscensionUltimate character={props.character} />
                        </Grid>
                        <Grid xs={6}>
                            <CharacterAscensionTalent character={props.character} />
                        </Grid>
                    </Grid>
                    <hr style={{ border: `.5px solid ${theme.border.color}`, marginTop: "15px", marginBottom: "15px" }} />
                    <CharacterAscensionTraces character={props.character} />
                </AccordionDetails>
            </Accordion>
        </Box>
    )

}

export default CharacterAscensionCard;