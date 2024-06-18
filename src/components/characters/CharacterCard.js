import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, Card, CardMedia, CardContent, ButtonBase, Box } from "@mui/material";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { CustomTooltip } from "../../helpers/CustomTooltip";
import MaterialGrid from "../../helpers/MaterialGrid";
import { GetBackgroundColor, GetRarityColor } from "../../helpers/RarityColors";
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage";

const CharacterCard = (props) => {

    const theme = useTheme();

    let { name, rarity, element, path } = props.character;

    const smallIcon = {
        width: "32px",
        height: "32px",
        backgroundColor: `${theme.materialImage.backgroundColor}`,
        border: `1px solid ${theme.border.color}`,
        borderRadius: "32px",
        marginBottom: "10px",
    };

    return (
        <Card
            sx={{
                mr: "18px",
                mb: "20px",
                backgroundColor: `${theme.card.backgroundColor}`,
                border: `1px solid ${theme.border.color}`,
                borderRadius: "5px 25px 5px 5px",
            }}
        >
            <ButtonBase disableRipple href={`/project-stellaron/character/${props.character.name.split(" ").join("_").toLowerCase()}`} target="_blank">
                <Box>
                    <Box
                        sx={{
                            display: "grid",
                            position: "absolute",
                            top: "10px",
                            left: "10px",
                        }}
                    >
                        <CustomTooltip title={element} arrow placement="top">
                            <img style={smallIcon} src={(`${process.env.REACT_APP_URL}/elements/Element_${element}.png`)} alt={element} onError={ErrorLoadingImage} />
                        </CustomTooltip>
                        <CustomTooltip title={path} arrow placement="top">
                            <img style={smallIcon} src={(`${process.env.REACT_APP_URL}/paths/Path_The_${path}.png`)} alt={path} onError={ErrorLoadingImage} />
                        </CustomTooltip>
                    </Box>
                    <CardMedia
                        image={`${process.env.REACT_APP_URL}/characters/avatars/Avatar_${name.split(" ").join("_")}.png`}
                        alt={name}
                        sx={{ width: "192px", height: "236px" }}
                    />
                    <Box
                        sx={{
                            mt: "-60px",
                            textAlign: "center",
                            background: `linear-gradient(transparent, ${GetBackgroundColor(rarity)})`,
                            borderBottom: `7px solid ${GetRarityColor(rarity)}`,
                        }}
                    >
                        <Box sx={{ textAlign: "center", display: "inline-block", width: "180px" }}>
                            <Typography variant="h6" noWrap sx={{ color: "white", textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000", fontWeight: "bold" }} >
                                {props.character.displayName ? props.character.displayName : name}
                            </Typography>
                            <Typography sx={{ color: "rgb(255, 208, 112)", textShadow: "#e3721b 1px 1px 10px" }} variant="h6">
                                {[...Array(rarity).keys()].map(() => "✦")}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </ButtonBase>
            {
                props.showMaterials &&
                <CardContent sx={{ backgroundColor: `${theme.table.header.backgroundColor}`, mb: "-12px" }}>
                    <MaterialGrid character={props.character} size="32px" />
                </CardContent>
            }
        </Card>
    )

}

export default CharacterCard;