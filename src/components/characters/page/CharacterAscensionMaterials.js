import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { CustomTooltip } from "../../../helpers/CustomTooltip";
import { formatCommonMats } from "../../../helpers/TooltipText";
import { Backgrounds } from "../../../helpers/Backgrounds";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const CharacterAscensionMaterials = (props) => {

    const theme = useTheme();

    let { rarity, values } = props;
    let { bossMat, commonMat } = props.materials;
    let start = values[0];
    let stop = values[1];

    const MaterialStyle = {
        mx: "15px",
        my: "10px",
        display: "flex",
    }

    const MaterialImageRootBig = {
        width: "72px",
        mr: "15px",
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

    let materialArray = AscensionMaterials[rarity.toString()];

    let costs = materialArray.map((material, index) => (materialArray[index].slice(start, stop).reduce((a, c) => a + c).toLocaleString()));

    return (
        <Box sx={MaterialStyle}>
            {/* Credits */}
            <Box sx={MaterialImageRootBig}>
                <CustomTooltip title="Credits" arrow placement="top">
                    <img src={`${process.env.REACT_APP_URL}/materials/Credit.png`} style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} alt="Credit" className="material-image-big" onError={ErrorLoadingImage} />
                </CustomTooltip>
                <Box sx={MaterialTextContainer}>
                    <Typography variant="subtitle2" sx={MaterialText}>
                        {costs[0]}
                    </Typography>
                </Box>
            </Box>
            {
                /* Boss Material */
                costs[1] !== "0" &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCommonMats(bossMat)} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/boss_mats/${bossMat.split(" ").join("_")}.png`} style={{ backgroundImage: "url(" + Backgrounds["4"] + ")" }} alt={commonMat} className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[1]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T2 Common Material */
                costs[2] !== "0" &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCommonMats(`${commonMat}1`)} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}1.png`} style={{ backgroundImage: "url(" + Backgrounds["2"] + ")" }} alt={commonMat} className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[2]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T3 Common Material */
                costs[3] !== "0" &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCommonMats(`${commonMat}2`)} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}2.png`} style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} alt={commonMat} className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[3]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T4 Common Material */
                costs[4] !== "0" &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCommonMats(`${commonMat}3`)} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}3.png`} style={{ backgroundImage: "url(" + Backgrounds["4"] + ")" }} alt={commonMat} className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[4]}
                        </Typography>
                    </Box>
                </Box>
            }
        </Box>
    )
}

export default CharacterAscensionMaterials;

const AscensionMaterials = {
    "5": [
        [0, 4000, 8000, 16000, 40000, 80000, 160000],
        [0, 0, 0, 3, 7, 20, 35],
        [0, 5, 10, 0, 0, 0, 0],
        [0, 0, 0, 6, 9, 0, 0],
        [0, 0, 0, 0, 0, 6, 9]
    ],
    "4": [
        [0, 3200, 6400, 12800, 32000, 64000, 128000],
        [0, 0, 0, 2, 5, 15, 28],
        [0, 4, 8, 0, 0, 0, 0],
        [0, 0, 0, 5, 8, 0, 0],
        [0, 0, 0, 0, 0, 5, 7]
    ]
}