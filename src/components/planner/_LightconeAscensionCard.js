import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, CardHeader, ButtonBase } from "@mui/material";
import { CustomTooltip } from "../_custom/CustomTooltip";
import { Accordion, AccordionDetails, AccordionSummary } from "../_custom/CustomAccordion";
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage";
import LightconeAscensionCardMaterials from "./LightconeAscensionCardMaterials";
import LightconeAscensionLevel from "./LightconeAscensionLevel";

const LightconeAscensionCard = (props) => {

    const theme = useTheme();

    let { name, rarity, path } = props.lightcone;

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
                p: 1,
            }}
        >
            <CardHeader
                avatar={
                    <Box sx={{ position: "relative" }}>
                        <ButtonBase disableRipple href={`${process.env.REACT_APP_BASENAME}/lightcones/${props.lightcone.name.split(" ").join("_").toLowerCase()}`} target="_blank">
                            <img alt={name} src={(`${process.env.REACT_APP_URL}/lightcones/small/${name.split(" ").join("_")}.png`)} style={{ width: "64px", height: "64px", border: `2px solid ${theme.border.color}`, borderRadius: "64px" }} onError={ErrorLoadingImage} />
                        </ButtonBase>
                        <Box sx={{ position: "absolute", top: "50px", left: "45px" }}>
                            <CustomTooltip title={path} arrow placement="top">
                                <img style={smallIcon} src={(`${process.env.REACT_APP_URL}/paths/The_${path}.png`)} alt={path} onError={ErrorLoadingImage} />
                            </CustomTooltip>
                        </Box>
                    </Box>
                }
                title={
                    <React.Fragment>
                        <ButtonBase disableRipple href={`${process.env.REACT_APP_BASENAME}/lightcones/${props.lightcone.name.split(" ").join("_").toLowerCase()}`} target="_blank">
                            <Typography variant="h6" sx={{ color: `${theme.text.color}` }}>
                                {name}
                            </Typography>
                        </ButtonBase>
                        <Typography sx={{ color: "rgb(255, 208, 112)", textShadow: "#e3721b 1px 1px 10px", userSelect: "none" }} variant="h6">
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
                <LightconeAscensionCardMaterials lightcone={props.lightcone} />
            </Box>
            <hr style={{ border: `.5px solid ${theme.border.color}`, marginTop: "15px", marginBottom: "15px" }} />
            <Accordion>
                <AccordionSummary>
                    <Typography variant="body1" sx={{ color: `${theme.text.color}` }}>
                        Edit
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <LightconeAscensionLevel lightcone={props.lightcone} />
                </AccordionDetails>
            </Accordion>
        </Box>
    )

}

export default LightconeAscensionCard;