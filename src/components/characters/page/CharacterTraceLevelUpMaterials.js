import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { CustomTooltip } from "../../../helpers/CustomTooltip";
import { formatCommonMats, formatCalyxMats, formatWeeklyBossMats } from "../../../helpers/TooltipText";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const CharacterTraceLevelUpMaterials = (props) => {

    const theme = useTheme();

    let { rarity, unlock } = props;
    let { calyxMat, commonMat, weeklyBossMat } = props.materials;

    let materialArray = [];

    const MaterialStyle = {
        mx: "15px",
        my: "10px",
        display: "flex",
    }

    const MaterialImageRoot = {
        width: "48px",
        height: "68px",
        mr: "5px",
        backgroundColor: "rgb(34, 35, 36)",
        border: `1px solid ${theme.border.color}`,
        borderRadius: "5px",
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
        mt: "-3.5px",
    }

    const MaterialText = {
        color: "rgb(208, 208, 208)",
        fontWeight: "450",
    }


    if (props.total) {
        materialArray = TotalCosts[rarity];
        return (
            <Box sx={MaterialStyle}>
                {/* Credits */}
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title="Credits" arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/Credit.png`} style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} alt="Credit" className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {materialArray[0]}
                        </Typography>
                    </Box>
                </Box>
                {/* T2 Calyx Material */}
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCalyxMats(`${calyxMat}1`)} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/calyx_mats/${calyxMat.split(" ").join("_")}1.png`} style={{ backgroundImage: "url(" + Backgrounds["2"] + ")" }} alt={calyxMat} className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {materialArray[1][0]}
                        </Typography>
                    </Box>
                </Box>
                {/* T3 Calyx Material */}
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCalyxMats(`${calyxMat}2`)} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/calyx_mats/${calyxMat.split(" ").join("_")}2.png`} style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} alt={calyxMat} className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {materialArray[1][1]}
                        </Typography>
                    </Box>
                </Box>
                {/* T4 Calyx Material */}
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCalyxMats(`${calyxMat}3`)} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/calyx_mats/${calyxMat.split(" ").join("_")}3.png`} style={{ backgroundImage: "url(" + Backgrounds["4"] + ")" }} alt={calyxMat} className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {materialArray[1][2]}
                        </Typography>
                    </Box>
                </Box>
                {/* T2 Common Material */}
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCommonMats(`${commonMat}1`)} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}1.png`} style={{ backgroundImage: "url(" + Backgrounds["2"] + ")" }} alt={commonMat} className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {materialArray[2][0]}
                        </Typography>
                    </Box>
                </Box>
                {/* T3 Common Material */}
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCommonMats(`${commonMat}2`)} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}2.png`} style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} alt={commonMat} className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {materialArray[2][1]}
                        </Typography>
                    </Box>
                </Box>
                {/* T4 Common Material */}
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCommonMats(`${commonMat}3`)} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}3.png`} style={{ backgroundImage: "url(" + Backgrounds["4"] + ")" }} alt={commonMat} className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {materialArray[2][2]}
                        </Typography>
                    </Box>
                </Box>
                {/* Weekly Boss Material  */}
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatWeeklyBossMats(weeklyBossMat)} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/weekly_boss_mats/${weeklyBossMat.split(" ").join("_")}.png`} style={{ backgroundImage: "url(" + Backgrounds["4"] + ")" }} alt={weeklyBossMat} className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {materialArray[3]}
                        </Typography>
                    </Box>
                </Box>
                {/* Tracks of Destiny  */}
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title="Tracks of Destiny" arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/Tracks_of_Destiny.png`} style={{ backgroundImage: "url(" + Backgrounds["5"] + ")" }} alt="Tracks of Destiny" className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {materialArray[4]}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        )
    }
    else if (props.main) {
        materialArray = TraceLevelUpMaterialsMain[rarity][unlock];
        return (
            <Box sx={MaterialStyle}>
                {/* Credits  */}
                <Box sx={MaterialImageRoot}>
                    <CustomTooltip title="Credits" arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/Credit.png`} style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} alt="Credit" className="material-image" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {materialArray[0]}
                        </Typography>
                    </Box>
                </Box>
                {/* Calyx Material  */}
                <Box sx={MaterialImageRoot}>
                    <CustomTooltip title={formatCalyxMats(`${calyxMat}${materialArray[1][1] - 1}`)} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/calyx_mats/${calyxMat.split(" ").join("_")}${materialArray[1][1] - 1}.png`} style={{ backgroundImage: "url(" + Backgrounds[materialArray[1][1]] + ")" }} alt={calyxMat} className="material-image" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {materialArray[1][0]}
                        </Typography>
                    </Box>
                </Box>
                {/* Weekly Boss Material  */}
                <Box sx={MaterialImageRoot}>
                    <CustomTooltip title={formatWeeklyBossMats(weeklyBossMat)} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/weekly_boss_mats/${weeklyBossMat.split(" ").join("_")}.png`} style={{ backgroundImage: "url(" + Backgrounds["4"] + ")" }} alt={weeklyBossMat} className="material-image" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {materialArray[2]}
                        </Typography>
                    </Box>
                </Box>
                {/* Tracks of Destiny  */}
                {
                    materialArray[3] !== 0 &&
                    <Box sx={MaterialImageRoot}>
                        <CustomTooltip title="Tracks of Destiny" arrow placement="top">
                            <img src={`${process.env.REACT_APP_URL}/materials/Tracks_of_Destiny.png`} style={{ backgroundImage: "url(" + Backgrounds["5"] + ")" }} alt="Tracks of Destiny" className="material-image" onError={ErrorLoadingImage} />
                        </CustomTooltip>
                        <Box sx={MaterialTextContainer}>
                            <Typography variant="subtitle2" sx={MaterialText}>
                                {materialArray[3]}
                            </Typography>
                        </Box>
                    </Box>
                }
            </Box>
        )
    }
    else {
        materialArray = TraceLevelUpMaterials[rarity][unlock];
        return (
            <Box sx={MaterialStyle}>
                {/* Credits  */}
                <Box sx={MaterialImageRoot}>
                    <CustomTooltip title="Credits" arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/Credit.png`} style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} alt="Credit" className="material-image" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {materialArray[0]}
                        </Typography>
                    </Box>
                </Box>
                {/* Calyx Material */}
                {
                    materialArray[1][1] !== 0 &&
                    <Box sx={MaterialImageRoot}>
                        <CustomTooltip title={formatCalyxMats(`${calyxMat}${materialArray[1][1] - 1}`)} arrow placement="top">
                            <img src={`${process.env.REACT_APP_URL}/materials/calyx_mats/${calyxMat.split(" ").join("_")}${materialArray[1][1] - 1}.png`} style={{ backgroundImage: "url(" + Backgrounds[materialArray[1][1]] + ")" }} alt={calyxMat} className="material-image" onError={ErrorLoadingImage} />
                        </CustomTooltip>
                        <Box sx={MaterialTextContainer}>
                            <Typography variant="subtitle2" sx={MaterialText}>
                                {materialArray[1][0]}
                            </Typography>
                        </Box>
                    </Box>
                }
                {/* Common Material */}
                <Box sx={MaterialImageRoot}>
                    <CustomTooltip title={formatCommonMats(`${commonMat}${materialArray[2][1] - 1}`)} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}${materialArray[2][1] - 1}.png`} style={{ backgroundImage: "url(" + Backgrounds[materialArray[2][1]] + ")" }} alt={commonMat} className="material-image" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {materialArray[2][0]}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        )
    }

}

export default CharacterTraceLevelUpMaterials;

const Backgrounds = {
    "5": `${process.env.REACT_APP_URL}/backgrounds/Background_5_Star.webp`,
    "4": `${process.env.REACT_APP_URL}/backgrounds/Background_4_Star.webp`,
    "3": `${process.env.REACT_APP_URL}/backgrounds/Background_3_Star.webp`,
    "2": `${process.env.REACT_APP_URL}/backgrounds/Background_2_Star.webp`,
    "1": `${process.env.REACT_APP_URL}/backgrounds/Background_1_Star.webp`,
}

const TotalCosts = {
    // [Number of Credits, [Number of T2 Calyx Mat, Number of T3 Calyx Mat, Number of T4 Calyx Mat], [Number of T2 Common Mat, Number of T3 Common Mat, Number of T4 Common Mat], Weekly Boss Material, Tracks of Destiny]
    "5": ["802,500", [6, 16, 38], [8, 10, 30], 2, 2],
    "4": ["642,000", [4, 12, 28], [6, 7, 22], 2, 2]
}

const TraceLevelUpMaterialsMain = {
    // [Number of Credits, [Number of Calyx Mats, Tier of Calyx Mat], Weekly Boss Material (0 or 1), Tracks of Destiny (0 or 1)]
    "5": {
        "A2": ["5,000", [3, 2], 1, 0],
        "A4": ["20,000", [5, 3], 1, 1],
        "A6": ["160K", [8, 4], 1, 1]
    },
    "4": {
        "A2": ["4,000", [2, 2], 1, 0],
        "A4": ["16,000", [4, 3], 1, 1],
        "A6": ["128K", [6, 4], 1, 1]
    }
}

const TraceLevelUpMaterials = {
    // [Number of Credits, [Number of Calyx Mats, Tier of Calyx Mat], [Number of Common Mats, Tier of Common Mat]]
    "5": {
        "A2": ["5,000", [3, 2], [6, 2]],
        "A3": ["10,000", [3, 3], [3, 3]],
        "A4": ["20,000", [5, 3], [4, 3]],
        "A5": ["45,000", [3, 4], [3, 4]],
        "A6": ["160K", [8, 4], [8, 4]],
        "Lv. 1": ["2,500", [0, 0], [2, 2]],
        "Lv. 75": ["160K", [8, 4], [8, 4]],
        "Lv. 80": ["160K", [8, 4], [8, 4]]
    },
    "4": {
        "A2": ["4,000", [2, 2], [4, 2]],
        "A3": ["8,000", [2, 3], [2, 3]],
        "A4": ["16,000", [4, 3], [3, 3]],
        "A5": ["36,000", [2, 4], [2, 4]],
        "A6": ["128K", [6, 4], [6, 4]],
        "Lv. 1": ["2,000", [0, 0], [2, 2]],
        "Lv. 75": ["128K", [6, 4], [6, 4]],
        "Lv. 80": ["128K", [6, 4], [6, 4]]
    }
}