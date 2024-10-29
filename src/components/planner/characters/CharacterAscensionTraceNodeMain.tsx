import * as React from "react"
import { useDispatch } from "react-redux"
import parse from "html-react-parser"

// Component imports
import { CustomTooltip } from "../../_custom/CustomTooltip"

// MUI imports
import { useTheme, Typography, Avatar } from "@mui/material"

// Helper imports
import { updateCharacterCosts, updateTotalCosts } from "../../../redux/reducers/AscensionPlannerReducer"
import { traceMain } from "../../../data/levelUpCosts"

// Type imports
import { AscensionTraceNodeProps } from "./CharacterAscensionTrace"
import { PayloadCostObject, TraceNode, TraceNodeUnlock } from "../../../types/costs"

function CharacterAscensionTraceNodeMain({ character, traces, id }: AscensionTraceNodeProps) {

    const theme = useTheme()

    const dispatch = useDispatch()

    const [selected, setSelected] = React.useState(true)
    const handleSelect = () => {
        setSelected(!selected)
    }

    const GetCost = () => {
        let materialCosts = traceMain[character.rarity.toString() as keyof TraceNode][traces.unlock as keyof TraceNodeUnlock]
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
                }
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

    return (
        <CustomTooltip arrow placement="top" title={<Typography variant="body2" sx={{ color: `${theme.text.color}` }}>
            {traces.name && parse(traces.name)} ({traces.unlock})
        </Typography>}>
            <Avatar alt={traces.name} src={(`${process.env.REACT_APP_URL}/characters/skills/${character.name.split(" ").join("_").toLowerCase()}_${traces.unlock.toLowerCase()}.png`)}
                id={id}
                sx={{
                    width: "40px",
                    height: "40px",
                    border: `2px solid ${theme.border.color}`,
                    mx: "20px",
                    my: "5px",
                    cursor: "pointer",
                }}
                style={selected ? { opacity: "1" } : { opacity: "0.35" }}
                onClick={handleSelect}
            >
                <img src={`${process.env.REACT_APP_URL}/images/Unknown.png`} alt="Unknown" style={{ width: "56px", backgroundColor: `${theme.paper.backgroundColor}` }} />
            </Avatar>
        </CustomTooltip>
    )

}

export default CharacterAscensionTraceNodeMain