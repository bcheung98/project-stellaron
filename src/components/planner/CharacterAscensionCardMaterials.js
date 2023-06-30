import * as React from "react";
import { connect } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomTooltip } from "../../helpers/CustomTooltip";
import { formatCalyxMats, formatCommonMats, formatWeeklyBossMats } from "../../helpers/TooltipText";
import { Backgrounds } from "../../helpers/Backgrounds";
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage";

const CharacterAscensionCardMaterials = (props) => {

    const theme = useTheme();

    let { name } = props.character;
    let { bossMat, calyxMat, commonMat, weeklyBossMat } = props.character.materials;
    let costs = props.costs.find(char => char.name === name).costs;

    const MaterialStyle = {
        mx: "15px",
        my: "10px",
        display: "flex",  
    }

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

    let credits = costs.credits.reduce((a, c) => Number(a) + Number(c));
    let bossMats = costs.bossMat.reduce((a, c) => Number(a) + Number(c));
    let xp1 = costs.xp1.reduce((a, c) => Number(a) + Number(c));
    let xp2 = costs.xp2.reduce((a, c) => Number(a) + Number(c));
    let xp3 = costs.xp3.reduce((a, c) => Number(a) + Number(c));
    let common1 = costs.common1.reduce((a, c) => Number(a) + Number(c));
    let common2 = costs.common2.reduce((a, c) => Number(a) + Number(c));
    let common3 = costs.common3.reduce((a, c) => Number(a) + Number(c));
    let calyx1 = costs.calyx1.reduce((a, c) => Number(a) + Number(c));
    let calyx2 = costs.calyx2.reduce((a, c) => Number(a) + Number(c));
    let calyx3 = costs.calyx3.reduce((a, c) => Number(a) + Number(c));
    let weeklyBossMats = costs.weeklyBossMat.reduce((a, c) => Number(a) + Number(c));
    let tracksOfDestiny = costs.tracksOfDestiny.reduce((a, c) => Number(a) + Number(c));

    return (
        <Grid container sx={MaterialStyle}>
            {/* Credits */
                credits !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title="Credits" arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/Credit.png`} style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} alt="Credit" className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {credits.toLocaleString()}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* Boss Material */
                bossMats !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCommonMats(bossMat)} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/boss_mats/${bossMat.split(" ").join("_")}.png`} style={{ backgroundImage: "url(" + Backgrounds["4"] + ")" }} alt={commonMat} className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {bossMats}
                        </Typography>
                    </Box>
                </Box>
            }
            {/* T2 Character EXP Material */
                xp1 !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title="Travel Encounters" arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/items/Item_Travel_Encounters.png`} style={{ backgroundImage: "url(" + Backgrounds["2"] + ")" }} alt="Travel Encounters" className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {xp1}
                        </Typography>
                    </Box>
                </Box>
            }
            {/* T3 Character EXP Material */
                xp2 !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title="Adventure Log" arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/items/Item_Adventure_Log.png`} style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} alt="Adventure Log" className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {xp2}
                        </Typography>
                    </Box>
                </Box>
            }
            {/* T4 Character EXP Material */
                xp3 !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title="Travel's Guide" arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/items/Item_Travelers_Guide.png`} style={{ backgroundImage: "url(" + Backgrounds["4"] + ")" }} alt="Traveler's Guide" className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {xp3}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T2 Common Material */
                common1 !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCommonMats(`${commonMat}1`)} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}1.png`} style={{ backgroundImage: "url(" + Backgrounds["2"] + ")" }} alt={commonMat} className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {common1}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T3 Common Material */
                common2 !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCommonMats(`${commonMat}2`)} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}2.png`} style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} alt={commonMat} className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {common2}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T4 Common Material */
                common3 !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCommonMats(`${commonMat}3`)} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}3.png`} style={{ backgroundImage: "url(" + Backgrounds["4"] + ")" }} alt={commonMat} className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {common3}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T2 Calyx Material */
                calyx1 !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCalyxMats(`${calyxMat}1`)} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/calyx_mats/${calyxMat.split(" ").join("_")}1.png`} style={{ backgroundImage: "url(" + Backgrounds["2"] + ")" }} alt={calyxMat} className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {calyx1}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T3 Calyx Material */
                calyx2 !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCalyxMats(`${calyxMat}2`)} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/calyx_mats/${calyxMat.split(" ").join("_")}2.png`} style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} alt={calyxMat} className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {calyx2}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T4 Calyx Material */
                calyx3 !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCalyxMats(`${calyxMat}3`)} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/calyx_mats/${calyxMat.split(" ").join("_")}3.png`} style={{ backgroundImage: "url(" + Backgrounds["4"] + ")" }} alt={calyxMat} className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {calyx3}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* Weekly Boss Material  */
                weeklyBossMats !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatWeeklyBossMats(weeklyBossMat)} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/weekly_boss_mats/${weeklyBossMat.split(" ").join("_")}.png`} style={{ backgroundImage: "url(" + Backgrounds["4"] + ")" }} alt={weeklyBossMat} className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {weeklyBossMats}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* Tracks of Destiny  */
                tracksOfDestiny !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title="Tracks of Destiny" arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/Tracks_of_Destiny.png`} style={{ backgroundImage: "url(" + Backgrounds["5"] + ")" }} alt="Tracks of Destiny" className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {tracksOfDestiny}
                        </Typography>
                    </Box>
                </Box>
            }
        </Grid>
    )

}

const mapStateToProps = (state) => {
    return {
        costs: state.ascensionPlanner.characterCosts
    }
}

export default connect(mapStateToProps)(CharacterAscensionCardMaterials);