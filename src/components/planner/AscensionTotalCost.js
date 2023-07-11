import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux"
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomTooltip } from "../../helpers/CustomTooltip";
import { formatCalyxMats, formatCommonMats, formatWeeklyBossMats, formatXPMats } from "../../helpers/TooltipText";
import { Backgrounds } from "../../helpers/Backgrounds";
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage";

const AscensionTotalCost = (props) => {

    const theme = useTheme();

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

    // MAKE SURE TO UPDATE THESE WHEN NEW DROPS/ENEMIES ARE ADDED!!!
    let calyxMats = ["Arrow1", "Arrow2", "Arrow3", "Blade1", "Blade2", "Blade3", "Flower1", "Flower2", "Flower3", "Key1", "Key2", "Key3", "Music Box1", "Music Box2", "Music Box3", "Obsidian1", "Obsidian2", "Obsidian3", "Shield1", "Shield2", "Shield3"];
    let commonMats = ["Antimatter1", "Antimatter2", "Antimatter3", "Artifex1", "Artifex2", "Artifex3", "Core1", "Core2", "Core3", "Engine1", "Engine2", "Engine3", "Immortal1", "Immortal2", "Immortal3", "Silvermane1", "Silvermane2", "Silvermane3"];
    let bossMats = ["Broken Teeth of Iron Wolf", "Endotherm Chitin", "Enigmatic Ectostella", "Gelid Chitin", "Golden Crown of the Past Shadow", "Horn of Snow", "Lightning Crown of the Past Shadow", "Shape Shifter's Lightning Staff", "Storm Eye", "Void Cast Iron"];
    let weeklyBossMats = ["Destroyer's Final Road", "Guardian's Lament"];
    let charXPMats = ["xp1", "xp2", "xp3"];
    let lcXPMats = ["lc_xp1", "lc_xp2", "lc_xp3"];

    return (
        <React.Fragment>
            {
                Object.keys(totalCost).length > 0 &&
                <Box
                    sx={{
                        border: `1px solid ${theme.border.color}`,
                        borderRadius: "5px",
                        backgroundColor: `${theme.paper.backgroundColor}`,
                        mx: "20px",
                        mb: "30px",
                        p: 1,
                    }}
                >
                    <Typography variant="h6" sx={{ color: `${theme.text.color}`, ml: "15px", my: "15px" }}>
                        Total Materials Required
                    </Typography>
                    <Grid container sx={{ mx: "15px", mt: "10px" }}>
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
                                            charXPMats.includes(material) && totalCost[material] !== 0 &&
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
                                            lcXPMats.includes(material) && totalCost[material] !== 0 &&
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
                                            bossMats.includes(material) && totalCost[material] !== 0 &&
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
                                            commonMats.includes(material) && totalCost[material] !== 0 &&
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
                                            calyxMats.includes(material) && totalCost[material] !== 0 &&
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
                                            weeklyBossMats.includes(material) && totalCost[material] !== 0 &&
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