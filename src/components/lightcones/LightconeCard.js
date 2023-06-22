import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, Avatar, Card, CardHeader, CardMedia, CardContent, ButtonBase, Box } from "@mui/material";
import { CustomTooltip } from "../../helpers/CustomTooltip";
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage";

const LightconeCard = (props) => {

    const theme = useTheme();

    let { name, path, rarity, stats } = props.lightcone;

    const StatIcon = {
        width: "30px",
        height: "30px",
        mr: "-10px",
    };

    return (
        <React.Fragment>
            <Card variant="outlined"
                sx={{
                    width: "370px",
                    height: "340px",
                    mx: "auto",
                    my: "10px",
                    backgroundColor: `${theme.card.backgroundColor}`,
                    border: `1px solid ${theme.border.color}`,
                    borderRadius: "5px",
                }}
            >
                <Box>
                    <ButtonBase disableRipple href={`/project-stellaron/lightcone/${props.lightcone.name.split(" ").join("_").toLowerCase()}`} target="_blank">
                        <CardHeader
                            avatar={
                                <CustomTooltip title={path} arrow placement="top">
                                    <Avatar src={(`${process.env.REACT_APP_URL}/paths/Path_The_${path}.png`)} alt={path}
                                        sx={{
                                            width: "30px",
                                            height: "30px",
                                            backgroundColor: `${theme.card.backgroundColor}`,
                                            border: `1px solid ${theme.border.color}`,
                                            borderRadius: "15px",
                                        }}
                                    >
                                        <img src={`${process.env.REACT_APP_URL}/images/Unknown.png`} alt="Unknown" style={{ width: "30px" }} />
                                    </Avatar>
                                </CustomTooltip>
                            }
                            title={
                                <Typography sx={{ color: `${theme.text.color}`, fontWeight: "bold", textAlign: "left" }} variant="h6">
                                    {name}
                                </Typography>
                            }
                            sx={{ height: "50px" }}
                        />
                    </ButtonBase>
                </Box>
                <Box>
                    <ButtonBase disableRipple href={`/project-stellaron/lightcone/${props.lightcone.name.split(" ").join("_").toLowerCase()}`} target="_blank">
                        <CardMedia
                            component="img"
                            image={`${process.env.REACT_APP_URL}/lightcones/artwork/${name}.webp`}
                            alt={name}
                            sx={{ height: "210px", width: "370px", objectFit: "cover", objectPosition: "100% 15%" }}
                            onError={ErrorLoadingImage}
                        />
                    </ButtonBase>
                </Box>
                <CardContent>
                    <Box sx={{ display: "flex", mt: "-12px" }}>
                        <Typography sx={{ color: "rgb(255, 208, 112)", fontWeight: "bolder" }} variant="h5">
                            {[...Array(rarity).keys()].map(() => "✦")}
                        </Typography>
                        <Box sx={{ display: "flex", mt: "-16px", ml: "15px" }}>
                            <CardHeader
                                avatar={
                                    <Avatar src={(`${process.env.REACT_APP_URL}/icons/Icon_HP.png`)} alt={path} sx={StatIcon}>
                                        <img src={`${process.env.REACT_APP_URL}/images/Unknown.png`} alt="Unknown" style={{ width: "30px" }} />
                                    </Avatar>
                                }
                                title={
                                    <Typography sx={{ color: `${theme.text.color}`, fontWeight: "bold" }} variant="h6">
                                        {stats.hp}
                                    </Typography>
                                }
                                sx={{ mr: "-15px" }}
                            />
                            <CardHeader
                                avatar={
                                    <Avatar src={(`${process.env.REACT_APP_URL}/icons/Icon_ATK.png`)} alt={path} sx={StatIcon}>
                                        <img src={`${process.env.REACT_APP_URL}/images/Unknown.png`} alt="Unknown" style={{ width: "30px" }} />
                                    </Avatar>
                                }
                                title={
                                    <Typography sx={{ color: `${theme.text.color}`, fontWeight: "bold" }} variant="h6">
                                        {stats.atk}
                                    </Typography>
                                }
                                sx={{ mr: "-15px" }}
                            />
                            <CardHeader
                                avatar={
                                    <Avatar src={(`${process.env.REACT_APP_URL}/icons/Icon_DEF.png`)} alt={path} sx={StatIcon}>
                                        <img src={`${process.env.REACT_APP_URL}/images/Unknown.png`} alt="Unknown" style={{ width: "30px" }} />
                                    </Avatar>
                                }
                                title={
                                    <Typography sx={{ color: `${theme.text.color}`, fontWeight: "bold" }} variant="h6">
                                        {stats.def}
                                    </Typography>
                                }
                                sx={{ mr: "-15px" }}
                            />
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </React.Fragment>
    )

}

export default LightconeCard;