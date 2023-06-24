import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, Card, CardMedia, CardContent, ButtonBase, Box } from "@mui/material";
import { CustomTooltip } from "../../helpers/CustomTooltip";
import { formatCalyxMats, formatCommonMats } from "../../helpers/TooltipText";
import { GetBackgroundColor, GetRarityColor } from "../../helpers/RarityColors";
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage";

const LightconeCard = (props) => {

    const theme = useTheme();

    let { name, path, rarity } = props.lightcone;
    let { calyxMat, commonMat } = props.lightcone.materials;

    const MaterialImage = {
        height: "40px",
        marginRight: "5px",
        border: `1px solid ${theme.border.color}`,
        borderRadius: "5px",
        backgroundColor: `${theme.materialImage.backgroundColor}`,
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
                mb: "20px",
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
                <Box sx={{ display: "flex", width: "50%", mx: "auto" }}>
                    <CustomTooltip title={formatCalyxMats(`${calyxMat}`)} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/calyx_mats/${calyxMat.split(" ").join("_")}3.png`} style={MaterialImage} alt={calyxMat} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <CustomTooltip title={formatCommonMats(`${commonMat}`)} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}3.png`} style={MaterialImage} alt={commonMat} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                </Box>
            </CardContent>
        </Card>
    )

}

export default LightconeCard;