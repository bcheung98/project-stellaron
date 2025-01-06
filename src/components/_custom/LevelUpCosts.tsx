import { useState } from "react";

// Component imports
import MaterialImage from "custom/MaterialImage";
import LevelUpSliderContainer from "custom/LevelUpSliderContainer";
import { TextStyled } from "styled/StyledTypography";
import { StyledSlider } from "styled/StyledSlider";

// MUI imports
import { useTheme, useMediaQuery, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

// Helper imports
import { range } from "helpers/utils";
import { getElementColor } from "helpers/elementalColors";
import {
    getCharacterLevelCost,
    getCharacterSkillCost,
    getWeaponLevelCost,
} from "helpers/getLevelUpCosts";
import { createMaterialCostData } from "helpers/createMaterialCostData";

// Type imports
import { Element, Rarity } from "types/_common";
import { TotalCostObject } from "types/costs";
import { CostObjectSourceIndex } from "types/costs";
import {
    BossMaterial,
    CalyxMaterial,
    CommonMaterial,
    Materials,
    WeeklyBossMaterial,
} from "types/materials";

export type LevelUpCostSkillKeys = keyof typeof CostObjectSourceIndex;

interface LevelUpCostsProps {
    type: "character" | "weapon";
    skillKey: LevelUpCostSkillKeys;
    name: string;
    rarity?: Rarity;
    element?: Element;
    mats: Materials;
    threshold?: string;
}

function LevelUpCosts({
    type,
    skillKey,
    name,
    rarity = 3,
    element,
    mats,
    threshold = "@100",
}: LevelUpCostsProps) {
    const theme = useTheme();
    const matches_sm_dn = useMediaQuery(theme.breakpoints.down("sm"));

    const levels = getLevels(skillKey, type, rarity);
    const minDistance = 1;
    const maxValue = levels.length;
    const [values, setValues] = useState([1, maxValue]);
    const handleSliderChange = (
        _: Event,
        newValue: number | number[],
        activeThumb: number
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], maxValue - minDistance);
                setValues([clamped, clamped + minDistance]);
            } else {
                const clamped = Math.max(newValue[1], minDistance + 1);
                setValues([clamped - minDistance, clamped]);
            }
        } else {
            setValues(newValue);
        }
    };

    const marks = levels.map((level, index) => ({
        value: index + 1,
        label: (
            <TextStyled
                variant={
                    values.includes(index + 1) ? "body1-styled" : "body2-styled"
                }
                sx={{
                    userSelect: "none",
                    opacity: values.includes(index + 1)
                        ? { "@": 0, [threshold]: 1 }
                        : { "@": 0, [threshold]: 0.25 },
                }}
            >
                {level}
            </TextStyled>
        ),
    }));

    const costs = getCosts({
        type,
        skillKey,
        name,
        rarity,
        values,
        mats,
    });

    return (
        <Box sx={{ containerType: "inline-size" }}>
            <Grid container spacing={2} sx={{ mb: "16px" }}>
                {createMaterialCostData(costs).map((material, index) => (
                    <MaterialImage
                        key={index}
                        name={material.name}
                        rarity={material.rarity}
                        cost={material.cost}
                        imgSrc={material.img}
                        size="64px"
                    />
                ))}
            </Grid>
            {levels.length > 0 && (
                <LevelUpSliderContainer
                    values={[levels[values[0] - 1], levels[values[1] - 1]]}
                    threshold={threshold}
                >
                    <StyledSlider
                        value={values}
                        marks={marks}
                        min={1}
                        max={maxValue}
                        onChange={handleSliderChange}
                        disableSwap
                        size={matches_sm_dn ? "small" : "medium"}
                        sx={{
                            color: getElementColor(theme, element),
                        }}
                    />
                </LevelUpSliderContainer>
            )}
        </Box>
    );
}

export default LevelUpCosts;

function getLevels(
    skillKey: LevelUpCostsProps["skillKey"],
    type: "character" | "weapon",
    rarity: Rarity
) {
    switch (skillKey) {
        case "level":
            if (type === "weapon" && rarity < 3) {
                return ["20", "40", "50", "60", "70"];
            } else {
                return ["20", "40", "50", "60", "70", "80", "90"];
            }
        case "basic":
        case "skill":
        case "ultimate":
        case "talent":
        case "trace":
            return range(1, 10);
        default:
            return [];
    }
}

function getCosts({
    type,
    skillKey,
    name,
    rarity,
    values,
    mats,
}: {
    type: "character" | "weapon";
    skillKey: LevelUpCostSkillKeys;
    name: string;
    rarity: Rarity;
    values: number[];
    mats: Materials;
}) {
    let costs, levelUpCost;
    switch (skillKey) {
        case "level":
            if (type === "character") {
                levelUpCost = getCharacterLevelCost(
                    values,
                    true,
                    false,
                    rarity
                );
                costs = {
                    credits: {
                        Credit: levelUpCost.credits.Credit,
                    },
                    bossMat: {
                        [`${mats.bossMat}` as BossMaterial]:
                            levelUpCost.bossMat.bossMat,
                    },
                    calyxMat: {
                        [`${mats.calyxMat}1` as CalyxMaterial]:
                            levelUpCost.calyxMat.calyxMat1,
                        [`${mats.calyxMat}2` as CalyxMaterial]:
                            levelUpCost.calyxMat.calyxMat2,
                        [`${mats.calyxMat}3` as CalyxMaterial]:
                            levelUpCost.calyxMat.calyxMat3,
                    },
                    commonMat: {
                        [`${mats.commonMat}1` as CommonMaterial]:
                            levelUpCost.commonMat.commonMat1,
                        [`${mats.commonMat}2` as CommonMaterial]:
                            levelUpCost.commonMat.commonMat2,
                        [`${mats.commonMat}3` as CommonMaterial]:
                            levelUpCost.commonMat.commonMat3,
                    },
                } as TotalCostObject;
            } else {
                levelUpCost = getWeaponLevelCost(values, true, false, rarity);
                costs = {
                    credits: {
                        Credit: levelUpCost.credits.Credit,
                    },
                    calyxMat: {
                        [`${mats.calyxMat}1` as CalyxMaterial]:
                            levelUpCost.calyxMat.calyxMat1,
                        [`${mats.calyxMat}2` as CalyxMaterial]:
                            levelUpCost.calyxMat.calyxMat2,
                        [`${mats.calyxMat}3` as CalyxMaterial]:
                            levelUpCost.calyxMat.calyxMat3,
                    },
                    commonMat: {
                        [`${mats.commonMat}1` as CommonMaterial]:
                            levelUpCost.commonMat.commonMat1,
                        [`${mats.commonMat}2` as CommonMaterial]:
                            levelUpCost.commonMat.commonMat2,
                        [`${mats.commonMat}3` as CommonMaterial]:
                            levelUpCost.commonMat.commonMat3,
                    },
                } as TotalCostObject;
            }
            break;
        case "basic":
        case "skill":
        case "ultimate":
        case "talent":
            levelUpCost = getCharacterSkillCost(values, true, rarity, skillKey);
            costs = {
                credits: {
                    Credit: levelUpCost.credits.Credit,
                },
                weeklyBossMat: {
                    [`${mats.weeklyBossMat}` as WeeklyBossMaterial]:
                        levelUpCost.weeklyBossMat.weeklyBossMat,
                },
                calyxMat: {
                    [`${mats.calyxMat}1` as CalyxMaterial]:
                        levelUpCost.calyxMat.calyxMat1,
                    [`${mats.calyxMat}2` as CalyxMaterial]:
                        levelUpCost.calyxMat.calyxMat2,
                    [`${mats.calyxMat}3` as CalyxMaterial]:
                        levelUpCost.calyxMat.calyxMat3,
                },
                commonMat: {
                    [`${mats.commonMat}1` as CommonMaterial]:
                        levelUpCost.commonMat.commonMat1,
                    [`${mats.commonMat}2` as CommonMaterial]:
                        levelUpCost.commonMat.commonMat2,
                    [`${mats.commonMat}3` as CommonMaterial]:
                        levelUpCost.commonMat.commonMat3,
                },
            } as TotalCostObject;
            break;
        case "trace":
            levelUpCost = getCharacterSkillCost(values, true, rarity, skillKey);
            costs = {
                credits: {
                    Credit: levelUpCost.credits.Credit,
                },
            } as TotalCostObject;
            break;
    }
    return costs;
}
