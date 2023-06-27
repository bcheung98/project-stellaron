import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, CardHeader } from "@mui/material";
import { CustomTooltip } from "../../helpers/CustomTooltip";
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage";

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
                width: "300px",
                height: "150px",
                border: `1px solid ${theme.border.color}`,
                borderRadius: "5px",
                mr: "30px",
            }}
        >
            <CardHeader
                avatar={
                    <Box sx={{ position: "relative" }}>
                        <img alt={name} src={(`${process.env.REACT_APP_URL}/lightcones/icon/${name}.webp`)} style={{ width: "64px", border: `2px solid ${theme.border.color}`, borderRadius: "64px" }} onError={ErrorLoadingImage} />
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
        </Box>
    )

}

export default LightconeAscensionCard;