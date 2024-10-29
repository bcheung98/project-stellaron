import * as React from "react"
import { useDispatch } from "react-redux"
import parse from "html-react-parser"

// Component imports
import { CustomTooltip } from "../../_custom/CustomTooltip"

// MUI imports
import { useTheme, Typography } from "@mui/material"

// Helper imports
import { updateCharacterCosts, updateTotalCosts } from "../../../redux/reducers/AscensionPlannerReducer"
import { traceSmall } from "../../../data/levelUpCosts"
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage"

// Type imports
import { AscensionTraceNodeProps } from "./CharacterAscensionTrace"
import { PayloadCostObject, TraceNode, TraceNodeUnlock } from "../../../types/costs"

function CharacterAscensionTraceNodeSmall({ character, traces, id }: AscensionTraceNodeProps) {

    const theme = useTheme()

    const dispatch = useDispatch()

    const [selected, setSelected] = React.useState(true)
    const handleSelect = () => {
        setSelected(!selected)
    }

    const GetCost = () => {
        let materialCosts = traceSmall[character.rarity.toString() as keyof TraceNode][traces.unlock as keyof TraceNodeUnlock]
        if (selected && materialCosts) {
            return {
                credits: materialCosts.credits,
                weeklyBossMat: {
                    weeklyBossMat: materialCosts.weeklyBossMat
                },
                tracksOfDestiny: materialCosts.tracksOfDestiny,
                calyxMat: {
                    calyxMat1: materialCosts.calyxMat1,
                    calyxMat2: materialCosts.calyxMat2,
                    calyxMat3: materialCosts.calyxMat3,
                },
                commonMat: {
                    commonMat1: materialCosts.commonMat1,
                    commonMat2: materialCosts.commonMat2,
                    commonMat3: materialCosts.commonMat3
                },
            } as PayloadCostObject
        }
        else {
            return {
                credits: 0,
                weeklyBossMat: {
                    weeklyBossMat: 0
                },
                tracksOfDestiny: 0,
                calyxMat: {
                    calyxMat1: 0,
                    calyxMat2: 0,
                    calyxMat3: 0
                },
                commonMat: {
                    commonMat1: 0,
                    commonMat2: 0,
                    commonMat3: 0
                }
            } as PayloadCostObject
        }
    }

    React.useEffect(() => {
        dispatch(updateCharacterCosts({ name: character.name, type: "trace", costs: GetCost(), traceID: id }))
        dispatch(updateTotalCosts())
    })

    const tooltipText =
        <Typography sx={{ fontSize: "13px" }}>
            {parse(traces.description)} ({traces.unlock})
        </Typography>

    return (
        <CustomTooltip arrow placement="top" title={tooltipText}>
            <img
                src={`${process.env.REACT_APP_URL}/stat_icons/${traces.type?.split(" ").join("_")}.png`}
                alt={traces.name}
                id={id}
                style={{
                    display: "flex",
                    width: "32px",
                    height: "32px",
                    border: `2px solid ${theme.border.color}`,
                    borderRadius: "64px",
                    margin: "5px 30px 5px 0px",
                    cursor: "pointer",
                    opacity: selected ? 1 : 0.35
                }}
                onClick={handleSelect}
                onError={ErrorLoadingImage}
            />
        </CustomTooltip>
    )

}

export default CharacterAscensionTraceNodeSmall