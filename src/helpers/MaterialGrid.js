import React from "react";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/material";
import { CustomTooltip } from "./CustomTooltip";
import { formatCommonMats, formatWeeklyBossMats } from "./TooltipText";
import ErrorLoadingImage from "./ErrorLoadingImage";

const MaterialGrid = (props) => {

    const theme = useTheme();

    let { calyxMat, commonMat, bossMat, weeklyBossMat } = props.character.materials;

    const imageStyle = {
        height: "36px",
        border: `1px solid ${theme.border.color}`,
        borderRadius: "5px",
        backgroundColor: `${theme.materialImage.backgroundColor}`,
    }

    return (
        <Box>
            <Grid container spacing={1}>
                <Grid>
                    <CustomTooltip title={calyxMat} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/calyx_mats/${calyxMat.split(" ").join("_")}3.png`} alt={calyxMat} style={imageStyle} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                </Grid>
                <Grid>
                    <CustomTooltip title={formatCommonMats(commonMat)} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}3.png`} alt={commonMat} style={imageStyle} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                </Grid>
                <Grid>
                    <CustomTooltip title={bossMat} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/boss_mats/${bossMat.split(" ").join("_")}.png`} alt={bossMat} style={imageStyle} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                </Grid>
                <Grid >
                    <CustomTooltip title={formatWeeklyBossMats(weeklyBossMat)} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/weekly_boss_mats/${weeklyBossMat.split(" ").join("_")}.png`} alt={weeklyBossMat} style={imageStyle} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                </Grid>
            </Grid>
        </Box>
    )

}

export default MaterialGrid;