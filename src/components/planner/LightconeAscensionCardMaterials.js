import * as React from "react";
import { connect } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { CustomTooltip } from "../_custom/CustomTooltip";
import { formatCalyxMats, formatCommonMats } from "../../helpers/TooltipText";
import { Backgrounds } from "../../helpers/Backgrounds";
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage";

const LightconeAscensionCardMaterials = (props) => {

    const theme = useTheme();

    let { name } = props.lightcone;
    let { calyxMat, commonMat } = props.lightcone.materials;
    let costs = props.costs.find(lc => lc.name === name).costs;

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

    return (
        <Grid container sx={MaterialStyle}>
            {/* Credits */
                costs["credits"] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title="Credits" arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/Credit.png`} style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} alt="Credit" className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs["credits"].toLocaleString()}
                        </Typography>
                    </Box>
                </Box>
            }
            {/* T2 Lightcone EXP Material */
                costs["lc_xp1"] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title="Sparse Aether" arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/items/Item_Sparse_Aether.png`} style={{ backgroundImage: "url(" + Backgrounds["2"] + ")" }} alt="Sparse Aether" className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs["lc_xp1"]}
                        </Typography>
                    </Box>
                </Box>
            }
            {/* T3 Lightcone EXP Material */
                costs["lc_xp2"] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title="Condensed Aether" arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/items/Item_Condensed_Aether.png`} style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} alt="Condensed Aether" className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs["lc_xp2"]}
                        </Typography>
                    </Box>
                </Box>
            }
            {/* T4 Lightcone EXP Material */
                costs["lc_xp3"] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title="Refined Aether" arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/items/Item_Refined_Aether.png`} style={{ backgroundImage: "url(" + Backgrounds["4"] + ")" }} alt="Refined Aether" className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs["lc_xp3"]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T2 Common Material */
                costs["common1"] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCommonMats(`${commonMat}1`)} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}1.png`} style={{ backgroundImage: "url(" + Backgrounds["2"] + ")" }} alt={commonMat} className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs["common1"]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T3 Common Material */
                costs["common2"] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCommonMats(`${commonMat}2`)} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}2.png`} style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} alt={commonMat} className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs["common2"]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T4 Common Material */
                costs["common3"] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCommonMats(`${commonMat}3`)} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}3.png`} style={{ backgroundImage: "url(" + Backgrounds["4"] + ")" }} alt={commonMat} className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs["common3"]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T2 Calyx Material */
                costs["calyx1"] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCalyxMats(`${calyxMat}1`)} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/calyx_mats/${calyxMat.split(" ").join("_")}1.png`} style={{ backgroundImage: "url(" + Backgrounds["2"] + ")" }} alt={calyxMat} className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs["calyx1"]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T3 Calyx Material */
                costs["calyx2"] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCalyxMats(`${calyxMat}2`)} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/calyx_mats/${calyxMat.split(" ").join("_")}2.png`} style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} alt={calyxMat} className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs["calyx2"]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T4 Calyx Material */
                costs["calyx3"] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCalyxMats(`${calyxMat}3`)} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/calyx_mats/${calyxMat.split(" ").join("_")}3.png`} style={{ backgroundImage: "url(" + Backgrounds["4"] + ")" }} alt={calyxMat} className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs["calyx3"]}
                        </Typography>
                    </Box>
                </Box>
            }
        </Grid>
    )

}

const mapStateToProps = (state) => {
    return {
        costs: state.ascensionPlanner.lightconeCosts
    }
}

export default connect(mapStateToProps)(LightconeAscensionCardMaterials);