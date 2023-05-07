import React from "react";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/material";

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

                    <img src={`${process.env.REACT_APP_URL}/materials/calyx_mats/${calyxMat.split(" ").join("_")}3.png`} alt={calyxMat} style={imageStyle} />

                </Grid>
                <Grid>

                    <img src={`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}3.png`} alt={commonMat} style={imageStyle} />

                </Grid>
                <Grid>

                    <img src={`${process.env.REACT_APP_URL}/materials/boss_mats/${bossMat.split(" ").join("_")}.png`} alt={bossMat} style={imageStyle} />

                </Grid>
                <Grid >

                    <img src={`${process.env.REACT_APP_URL}/materials/weekly_boss_mats/${weeklyBossMat.split(" ").join("_")}.png`} alt={weeklyBossMat} style={imageStyle} />

                </Grid>
            </Grid>
        </Box>
    )

}

export default MaterialGrid;