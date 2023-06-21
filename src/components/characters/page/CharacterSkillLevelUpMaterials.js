import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { CustomTooltip } from "../../../helpers/CustomTooltip";
import { formatCommonMats, formatCalyxMats, formatWeeklyBossMats } from "../../../helpers/TooltipText";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const CharacterSkillLevelUpMaterials = (props) => {

    let { rarity, values } = props;
    let { calyxMat, commonMat, weeklyBossMat } = props.materials;
    let start = values[0];
    let stop = values[1];

    const theme = useTheme();

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

    let materialArray = [];
    if (props.skillKey === "attack") {
        materialArray = SkillLevelUpMaterials[rarity.toString()]["BasicATK"];
    }
    else {
        materialArray = SkillLevelUpMaterials[rarity.toString()]["Skills"];
    }

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
                /* T2 Calyx Material */
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
            {
                /* Weekly Boss Material  */
                costs[7] !== "0" &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatWeeklyBossMats(weeklyBossMat)} arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/weekly_boss_mats/${weeklyBossMat.split(" ").join("_")}.png`} style={{ backgroundImage: "url(" + Backgrounds["4"] + ")" }} alt={weeklyBossMat} className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[7]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* Tracks of Destiny  */
                costs[8] !== "0" &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title="Tracks of Destiny" arrow placement="top">
                        <img src={`${process.env.REACT_APP_URL}/materials/Tracks_of_Destiny.png`} style={{ backgroundImage: "url(" + Backgrounds["5"] + ")" }} alt="Tracks of Destiny" className="material-image-big" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[8]}
                        </Typography>
                    </Box>
                </Box>
            }
        </Box>
    )

}

export default CharacterSkillLevelUpMaterials;

const SkillLevelUpMaterials = {
    "5": {
        "BasicATK": [
            [0, 5000, 10000, 20000, 45000, 160000],
            [0, 3, 0, 0, 0, 0],
            [0, 0, 3, 5, 0, 0],
            [0, 0, 0, 0, 3, 8],
            [0, 6, 0, 0, 0, 0],
            [0, 0, 3, 4, 0, 0],
            [0, 0, 0, 0, 3, 4],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ],
        "Skills": [
            [0, 2500, 5000, 10000, 20000, 30000, 45000, 80000, 160000, 300000],
            [0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 3, 5, 7, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 3, 5, 8, 14],
            [0, 3, 6, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 3, 4, 6, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 3, 4, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        ]
    },
    "4": {
        "BasicATK": [
            [0, 4000, 8000, 16000, 36000, 128000],
            [0, 2, 0, 0, 0, 0],
            [0, 0, 2, 4, 0, 0],
            [0, 0, 0, 0, 2, 6],
            [0, 4, 0, 0, 0, 0],
            [0, 0, 2, 3, 0, 0],
            [0, 0, 0, 0, 2, 3],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ],
        "Skills": [
            [0, 2000, 4000, 8000, 16000, 24000, 36000, 64000, 128000, 240000],
            [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 2, 4, 6, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 2, 4, 6, 11],
            [0, 2, 4, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 2, 3, 5, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 2, 3, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        ]
    }
}

const Backgrounds = {
    "5": `${process.env.REACT_APP_URL}/backgrounds/Background_5_Star.webp`,
    "4": `${process.env.REACT_APP_URL}/backgrounds/Background_4_Star.webp`,
    "3": `${process.env.REACT_APP_URL}/backgrounds/Background_3_Star.webp`,
    "2": `${process.env.REACT_APP_URL}/backgrounds/Background_2_Star.webp`,
    "1": `${process.env.REACT_APP_URL}/backgrounds/Background_1_Star.webp`,
}