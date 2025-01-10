// Component imports
import Image from "custom/Image";
import { TextStyled } from "styled/StyledTypography";
import { FlexBox } from "styled/StyledBox";

// MUI imports
import { useTheme, useMediaQuery } from "@mui/material";

// Helper imports
import { objectKeys } from "helpers/utils";
import { characterBonusStats } from "data/characterBonusStats";
import { formatCharacterBonusStats } from "helpers/formatCharacterBonusStats";
import { parseSkillDescription } from "helpers/parseSkillDescription";
import { getElementColor } from "helpers/elementColors";

// Type imports
import { Element } from "types/_common";
import {
    BonusStat,
    CharacterTraceNodeMain,
    CharacterTraceNodeSmall,
} from "types/character";

function CharacterTraceTotalStat({
    element,
    traces,
}: {
    element: Element;
    traces: (CharacterTraceNodeMain | CharacterTraceNodeSmall)[];
}) {
    const theme = useTheme();
    const matches_sm_dn = useMediaQuery(theme.breakpoints.down("sm"));

    const traceStats = {} as Record<BonusStat, number>;

    function calculateTraceStats(
        traces: (CharacterTraceNodeMain | CharacterTraceNodeSmall)[]
    ) {
        traces.forEach((trace) => {
            if ("stat" in trace) {
                const stat = trace.stat;
                let value = characterBonusStats[trace.stat][trace.unlock];
                if (stat !== "SPD") {
                    value = value.slice(0, -1);
                }
                if (!traceStats[stat]) {
                    traceStats[stat] = 0;
                }
                traceStats[stat] += parseFloat(value);
            }
            if (trace.subTraces) {
                calculateTraceStats(trace.subTraces);
            }
        });
    }

    calculateTraceStats(traces);

    return (
        <>
            <TextStyled variant="h6-styled" sx={{ mb: "8px" }}>
                Total Stat Bonus From Traces
            </TextStyled>
            {objectKeys(traceStats).map((stat) => (
                <FlexBox key={stat} columnGap="8px">
                    <Image
                        src={`stat_icons/${stat}`}
                        alt={stat}
                        style={{
                            width: matches_sm_dn ? "32px" : "40px",
                            height: matches_sm_dn ? "32px" : "40px",
                            padding: "4px",
                            border: `2px solid ${getElementColor({ element })}`,
                            borderRadius: "64px",
                            backgroundColor: theme.appbar.backgroundColor,
                        }}
                    />
                    <TextStyled>
                        {parseSkillDescription({
                            description: `${formatCharacterBonusStats(
                                stat
                            )} +${parseFloat(traceStats[stat].toFixed(1))}${
                                stat !== "SPD" ? "%" : ""
                            }`,
                        })}
                    </TextStyled>
                </FlexBox>
            ))}
        </>
    );
}

export default CharacterTraceTotalStat;
