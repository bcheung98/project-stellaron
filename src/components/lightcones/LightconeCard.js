import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, Avatar, Card, CardHeader, CardMedia, CardContent, ButtonBase, Box } from "@mui/material";
import { CustomTooltip } from "../../helpers/CustomTooltip";
import { LightconeStats } from "../../helpers/LightconeStats";
import { GetBackgroundColor, GetRarityColor } from "../../helpers/RarityColors";
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage";

const LightconeCard = (props) => {

    const theme = useTheme();

    let { name, path, rarity, stats } = props.lightcone;

    const StatIcon = {
        width: "30px",
        height: "30px",
        mr: "-17px",
    };

    const Stats = {
        p: 0,
        mr: "5px",
    }

    const SmallIcon = {
        width: "48px",
        height: "48px",
        backgroundColor: `${theme.materialImage.backgroundColor}`,
        border: `1px solid ${theme.border.color}`,
        borderRadius: "48px",
    };

    const width = "220px";

    return (
        <Card
            sx={{
                width: width,
                mr: "40px",
                my: "15px",
                backgroundColor: `${theme.table.header.backgroundColor}`,
                border: `1px solid ${theme.border.color}`,
                borderRadius: "5px 25px 5px 5px",
            }}
        >
            <ButtonBase disableRipple href={`/project-stellaron/lightcone/${props.lightcone.name.split(" ").join("_").toLowerCase()}`} target="_blank">
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
                            <img style={SmallIcon} src={(`${process.env.REACT_APP_URL}/paths/Path_The_${path}.png`)} alt={path} onError={ErrorLoadingImage} />
                        </CustomTooltip>
                    </Box>
                    <CardMedia
                        image={`${process.env.REACT_APP_URL}/lightcones/artwork/${name}.webp`}
                        alt={name}
                        sx={{ width: width, height: "350px" }}
                    />
                    <Box
                        sx={{
                            mt: "-50px",
                            mb: "-10px",
                            textAlign: "center",
                            background: `linear-gradient(transparent, ${GetBackgroundColor(rarity)})`,
                            borderBottom: `7px solid ${GetRarityColor(rarity)}`,
                        }}
                    >
                        <Box sx={{ height: "50px" }} />
                    </Box>
                </Box>
            </ButtonBase>
            <CardContent sx={{ backgroundColor: `${theme.table.header.backgroundColor}` }}>
                <Box sx={{ textAlign: "center", mb: "5px", minHeight: "100px" }}>
                    <Typography sx={{ color: "rgb(255, 208, 112)", textShadow: "#e3721b 1px 1px 10px" }} variant="h5">
                        {[...Array(rarity).keys()].map(() => "✦")}
                    </Typography>
                    <ButtonBase disableRipple href={`/project-stellaron/lightcone/${props.lightcone.name.split(" ").join("_").toLowerCase()}`} target="_blank">
                        <Typography variant="h6" sx={{ color: "white", textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000", fontWeight: "bold", mx: "1px" }}>
                            {name}
                        </Typography>
                    </ButtonBase>
                </Box>
                <hr style={{ border: `.5px solid ${theme.border.color}`, marginTop: "5px", marginBottom: "15px" }} />
                <Box sx={{ display: "flex" }}>
                    <CardHeader
                        avatar={
                            <Avatar src={(`${process.env.REACT_APP_URL}/icons/Icon_HP.png`)} alt={path} sx={StatIcon}>
                                <img src={`${process.env.REACT_APP_URL}/images/Unknown.png`} alt="Unknown" style={{ width: "30px" }} />
                            </Avatar>
                        }
                        title={
                            <Typography sx={{ color: `${theme.text.color}`, fontWeight: "bold" }} variant="body1">
                                {Number(LightconeStats["hp"][stats.hp.toString()][13]).toLocaleString()}
                            </Typography>
                        }
                        sx={Stats}
                    />
                    <CardHeader
                        avatar={
                            <Avatar src={(`${process.env.REACT_APP_URL}/icons/Icon_ATK.png`)} alt={path} sx={StatIcon}>
                                <img src={`${process.env.REACT_APP_URL}/images/Unknown.png`} alt="Unknown" style={{ width: "30px" }} />
                            </Avatar>
                        }
                        title={
                            <Typography sx={{ color: `${theme.text.color}`, fontWeight: "bold" }} variant="body1">
                                {LightconeStats["atk"][stats.atk.toString()][13]}
                            </Typography>
                        }
                        sx={Stats}
                    />
                    <CardHeader
                        avatar={
                            <Avatar src={(`${process.env.REACT_APP_URL}/icons/Icon_DEF.png`)} alt={path} sx={StatIcon}>
                                <img src={`${process.env.REACT_APP_URL}/images/Unknown.png`} alt="Unknown" style={{ width: "30px" }} />
                            </Avatar>
                        }
                        title={
                            <Typography sx={{ color: `${theme.text.color}`, fontWeight: "bold" }} variant="body1">
                                {LightconeStats["def"][stats.def.toString()][13]}
                            </Typography>
                        }
                        sx={Stats}
                    />
                </Box>
            </CardContent>
        </Card >
    )

}

export default LightconeCard;