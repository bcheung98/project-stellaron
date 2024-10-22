import * as React from "react";
import { exportComponentAsJPEG } from 'react-component-export-image';
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux"
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { CustomTooltip } from "../_custom/CustomTooltip";
import { formatCalyxMats, formatCommonMats, formatWeeklyBossMats, formatXPMats } from "../../helpers/TooltipText";
import * as Materials from "../../data/MaterialList";
import { Backgrounds } from "../../helpers/Backgrounds";
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage";

const AscensionTotalCost = (props) => {

    const theme = useTheme();

    const componentRef = React.useRef();

    let { totalCost } = props;

    const MaterialImageRootBig = {
        width: "72px",
        mr: "15px",
        mb: "15px",
        backgroundColor: "rgb(34, 35, 36)",
        border: `1px solid ${theme.border.color}`,
        borderRadius: "5px",
    }

    const MaterialTextContainer = {
        textAlign: "center",
        mt: "-5px",
    }

    const MaterialText = {
        color: "rgb(208, 208, 208)",
        fontWeight: "bold",
    }

    return (
        <React.Fragment>
            {
                Object.keys(totalCost).length > 0 &&
                <React.Fragment>
                    <Button
                        variant="contained"
                        sx={{
                            my: "20px",
                            p: 1,
                        }}
                        onClick={() => exportComponentAsJPEG(componentRef, { fileName: "Materials" })}
                    >
                        Download as Image
                    </Button>
                    <Box
                        sx={{
                            border: `1px solid ${theme.border.color}`,
                            borderRadius: "5px",
                            backgroundColor: `${theme.paper.backgroundColor}`,
                            mb: "30px",
                            p: 2
                        }}
                        ref={componentRef}
                    >
                        <Typography variant="h6" sx={{ color: `${theme.text.color}` }}>
                            Total Materials Required
                        </Typography>
                        <Grid container rowSpacing={1} columnSpacing={0} sx={{ mt: "15px" }}>
                            {
                                Object.keys(totalCost).map((material, index) => {
                                    return (
                                        <Box key={index}>
                                            {
                                                /* Credits */
                                                material === "credits" && totalCost[material] !== 0 &&
                                                <Box sx={MaterialImageRootBig}>
                                                    <CustomTooltip title="Credits" arrow placement="top">
                                                        <img src={`${process.env.REACT_APP_URL}/materials/Credit.png`} style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} alt="Credit" className="material-image-big" onError={ErrorLoadingImage} />
                                                    </CustomTooltip>
                                                    <Box sx={MaterialTextContainer}>
                                                        <Typography variant="subtitle2" sx={MaterialText}>
                                                            {totalCost[material].toLocaleString()}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            }
                                            {
                                                /* Character XP Materials */
                                                Materials.CharEXPMats.includes(material) && totalCost[material] !== 0 &&
                                                <Box sx={MaterialImageRootBig}>
                                                    <CustomTooltip title={formatXPMats(material)} arrow placement="top">
                                                        <img src={`${process.env.REACT_APP_URL}/items/Item_${formatXPMats(material).split(" ").join("_")}.png`} style={{ backgroundImage: "url(" + Backgrounds[Number(material[2]) + 1] + ")" }} alt={formatXPMats(material)} className="material-image-big" onError={ErrorLoadingImage} />
                                                    </CustomTooltip>
                                                    <Box sx={MaterialTextContainer}>
                                                        <Typography variant="subtitle2" sx={MaterialText}>
                                                            {totalCost[material]}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            }
                                            {
                                                /* Lightcone XP Materials */
                                                Materials.LightconeEXPMats.includes(material) && totalCost[material] !== 0 &&
                                                <Box sx={MaterialImageRootBig}>
                                                    <CustomTooltip title={formatXPMats(material)} arrow placement="top">
                                                        <img src={`${process.env.REACT_APP_URL}/items/Item_${formatXPMats(material).split(" ").join("_")}.png`} style={{ backgroundImage: "url(" + Backgrounds[Number(material[5]) + 1] + ")" }} alt={formatXPMats(material)} className="material-image-big" onError={ErrorLoadingImage} />
                                                    </CustomTooltip>
                                                    <Box sx={MaterialTextContainer}>
                                                        <Typography variant="subtitle2" sx={MaterialText}>
                                                            {totalCost[material]}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            }
                                            {
                                                /* Boss Material */
                                                Materials.BossMats.includes(material) && totalCost[material] !== 0 &&
                                                <Box sx={MaterialImageRootBig}>
                                                    <CustomTooltip title={formatCommonMats(material)} arrow placement="top">
                                                        <img src={`${process.env.REACT_APP_URL}/materials/boss_mats/${material.split(" ").join("_")}.png`} style={{ backgroundImage: "url(" + Backgrounds["4"] + ")" }} alt={material} className="material-image-big" onError={ErrorLoadingImage} />
                                                    </CustomTooltip>
                                                    <Box sx={MaterialTextContainer}>
                                                        <Typography variant="subtitle2" sx={MaterialText}>
                                                            {totalCost[material]}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            }
                                            {
                                                /* Common Materials */
                                                ExpandMaterialArray(Materials.CommonMats, 3).includes(material) && totalCost[material] !== 0 &&
                                                <Box sx={MaterialImageRootBig}>
                                                    <CustomTooltip title={formatCommonMats(material)} arrow placement="top">
                                                        <img src={`${process.env.REACT_APP_URL}/materials/common_mats/${material.split(" ").join("_")}.png`} style={{ backgroundImage: "url(" + Backgrounds[Number(material[material.length - 1]) + 1] + ")" }} alt={material} className="material-image-big" onError={ErrorLoadingImage} />
                                                    </CustomTooltip>
                                                    <Box sx={MaterialTextContainer}>
                                                        <Typography variant="subtitle2" sx={MaterialText}>
                                                            {totalCost[material]}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            }
                                            {
                                                /* Calyx Materials */
                                                ExpandMaterialArray(Materials.CalyxMats, 3).includes(material) && totalCost[material] !== 0 &&
                                                <Box sx={MaterialImageRootBig}>
                                                    <CustomTooltip title={formatCalyxMats(material)} arrow placement="top">
                                                        <img src={`${process.env.REACT_APP_URL}/materials/calyx_mats/${material.split(" ").join("_")}.png`} style={{ backgroundImage: "url(" + Backgrounds[Number(material[material.length - 1]) + 1] + ")" }} alt={material} className="material-image-big" onError={ErrorLoadingImage} />
                                                    </CustomTooltip>
                                                    <Box sx={MaterialTextContainer}>
                                                        <Typography variant="subtitle2" sx={MaterialText}>
                                                            {totalCost[material]}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            }
                                            {
                                                /* Weekly Boss Materials */
                                                Materials.WeeklyBossMats.includes(material) && totalCost[material] !== 0 &&
                                                <Box sx={MaterialImageRootBig}>
                                                    <CustomTooltip title={formatWeeklyBossMats(material)} arrow placement="top">
                                                        <img src={`${process.env.REACT_APP_URL}/materials/weekly_boss_mats/${material.split(" ").join("_")}.png`} style={{ backgroundImage: "url(" + Backgrounds[4] + ")" }} alt={material} className="material-image-big" onError={ErrorLoadingImage} />
                                                    </CustomTooltip>
                                                    <Box sx={MaterialTextContainer}>
                                                        <Typography variant="subtitle2" sx={MaterialText}>
                                                            {totalCost[material]}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            }
                                            {
                                                /* Tracks of Destiny */
                                                material === "tracksOfDestiny" && totalCost[material] !== 0 &&
                                                <Box sx={MaterialImageRootBig}>
                                                    <CustomTooltip title="Tracks of Destiny" arrow placement="top">
                                                        <img src={`${process.env.REACT_APP_URL}/materials/Tracks_of_Destiny.png`} style={{ backgroundImage: "url(" + Backgrounds["5"] + ")" }} alt="Tracks of Destiny" className="material-image-big" onError={ErrorLoadingImage} />
                                                    </CustomTooltip>
                                                    <Box sx={MaterialTextContainer}>
                                                        <Typography variant="subtitle2" sx={MaterialText}>
                                                            {totalCost[material]}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            }
                                        </Box>
                                    )
                                })
                            }
                        </Grid>
                    </Box>
                </React.Fragment>
            }
        </React.Fragment>
    )

}

const mapStateToProps = (state) => {
    return {
        totalCost: state.ascensionPlanner.totalCost
    }
}

export default connect(mapStateToProps)(AscensionTotalCost);

const ExpandMaterialArray = (arr, n) => {
    let output = [];
    for (const material in arr) {
        for (let i = 1; i <= n; i++) {
            output.push(`${arr[material]}${i}`)
        }
    }
    return output;
}