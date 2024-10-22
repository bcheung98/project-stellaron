import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { CustomTooltip } from "../../_custom/CustomTooltip";
import { formatCalyxMats, formatCommonMats } from "../../../helpers/TooltipText";
import { Backgrounds } from "../../../helpers/Backgrounds";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const LightconeAscensionMaterials = (props) => {

    const theme = useTheme();

    let { rarity, values } = props;
    let { calyxMat, commonMat } = props.materials;
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
            {/* 
            T2 Calyx Material */
                costs[1] !== "0" &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCalyxMats(`${calyxMat}1`)} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/calyx_mats/${calyxMat.split(" ").join("_")}1.png`} style={{ backgroundImage: "url(" + Backgrounds["2"] + ")" }} alt={calyxMat} className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[1]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T3 Calyx Material */
                costs[2] !== "0" &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCalyxMats(`${calyxMat}2`)} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/calyx_mats/${calyxMat.split(" ").join("_")}2.png`} style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} alt={calyxMat} className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[2]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T4 Calyx Material */
                costs[3] !== "0" &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCalyxMats(`${calyxMat}3`)} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/calyx_mats/${calyxMat.split(" ").join("_")}3.png`} style={{ backgroundImage: "url(" + Backgrounds["4"] + ")" }} alt={calyxMat} className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[3]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T2 Common Material */
                costs[4] !== "0" &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCommonMats(`${commonMat}1`)} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}1.png`} style={{ backgroundImage: "url(" + Backgrounds["2"] + ")" }} alt={commonMat} className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[4]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T3 Common Material */
                costs[5] !== "0" &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCommonMats(`${commonMat}2`)} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}2.png`} style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} alt={commonMat} className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[5]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T4 Common Material */
                costs[6] !== "0" &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCommonMats(`${commonMat}3`)} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}3.png`} style={{ backgroundImage: "url(" + Backgrounds["4"] + ")" }} alt={commonMat} className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[6]}
                        </Typography>
                    </Box>
                </Box>
            }
        </Box>
    )

}

export default LightconeAscensionMaterials;

const AscensionMaterials = {
    "5": [
        [0, 5000, 10000, 20000, 50000, 100000, 200000],
        [0, 0, 4, 0, 0, 0, 0],
        [0, 0, 0, 4, 8, 0, 0],
        [0, 0, 0, 0, 0, 5, 10],
        [0, 8, 12, 0, 0, 0, 0],
        [0, 0, 0, 8, 12, 0, 0],
        [0, 0, 0, 0, 0, 6, 8]
    ],
    "4": [
        [0, 4000, 8000, 16000, 40000, 80000, 160000],
        [0, 0, 3, 0, 0, 0, 0],
        [0, 0, 0, 3, 6, 0, 0],
        [0, 0, 0, 0, 0, 4, 8],
        [0, 5, 10, 0, 0, 0, 0],
        [0, 0, 0, 6, 9, 0, 0],
        [0, 0, 0, 0, 0, 5, 7]
    ],
    "3": [
        [0, 3000, 6000, 12000, 30000, 60000, 120000],
        [0, 0, 2, 0, 0, 0, 0],
        [0, 0, 0, 2, 4, 0, 0],
        [0, 0, 0, 0, 0, 3, 6],
        [0, 4, 8, 0, 0, 0, 0],
        [0, 0, 0, 4, 6, 0, 0],
        [0, 0, 0, 0, 0, 3, 5]
    ]
}