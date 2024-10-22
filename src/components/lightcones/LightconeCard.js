import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, Card, CardMedia, CardContent, ButtonBase, Box } from "@mui/material";
import { CustomTooltip } from "../_custom/CustomTooltip";
import { GetBackgroundColor, GetRarityColor } from "../../helpers/RarityColors";
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage";

const LightconeCard = (props) => {

    const theme = useTheme();

    let { name, path, rarity } = props.lightcone;

    return (
        <Card
            sx={{
                width: "192px",
                backgroundColor: `${theme.card.backgroundColor}`,
                border: `1px solid ${theme.border.color}`,
                borderRadius: "5px 25px 5px 5px",
            }}
        >
            <ButtonBase disableRipple href={`${process.env.REACT_APP_BASENAME}/lightcones/${props.lightcone.name.split(" ").join("_").toLowerCase()}`} target="_blank">
                <Box>
                    <Box
                        sx={{
                            display: "grid",
                            position: "absolute",
                            top: "10px",
                            left: "10px",
                        }}
                    >
                        <CustomTooltip title={path} arrow placement="top">
                            <img src={(`${process.env.REACT_APP_URL}/paths/The_${path}.png`)} alt={path}
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    backgroundColor: `${theme.materialImage.backgroundColor}`,
                                    border: `1px solid ${theme.border.color}`,
                                    borderRadius: "40px",
                                }}
                                onError={ErrorLoadingImage}
                            />
                        </CustomTooltip>
                    </Box>
                    <CardMedia
                        image={`${process.env.REACT_APP_URL}/lightcones/medium/${name.split(" ").join("_")}.png`}
                        alt={name}
                        sx={{ width: "192px", height: "225px" }}
                    />
                    <Box
                        sx={{
                            mt: "-50px",
                            textAlign: "center",
                            background: `linear-gradient(transparent, ${GetBackgroundColor(rarity)})`,
                            borderBottom: `7px solid ${GetRarityColor(rarity)}`,
                        }}
                    >
                        <Box sx={{ height: "50px" }} />
                    </Box>
                </Box>
            </ButtonBase>
            <CardContent
                sx={{
                    textAlign: "center",
                    backgroundColor: `${theme.table.header.backgroundColor}`,
                    height: "100%"
                }}
            >
                <Box sx={{ textAlign: "center", mt: "-10px" }}>
                    <Typography sx={{ color: "rgb(255, 208, 112)", textShadow: "#e3721b 1px 1px 10px", fontSize: "16pt", userSelect: "none" }} variant="h6">
                        {[...Array(rarity).keys()].map(() => "✦")}
                    </Typography>
                    <ButtonBase disableRipple href={`${process.env.REACT_APP_BASENAME}/lightcones/${props.lightcone.name.split(" ").join("_").toLowerCase()}`} target="_blank">
                        <Typography variant="body1" sx={{ color: "white", fontWeight: "bold" }}>
                            {props.lightcone.displayName ? props.lightcone.displayName : name}
                        </Typography>
                    </ButtonBase>
                </Box>
            </CardContent>
        </Card>
    )

}

export default LightconeCard;