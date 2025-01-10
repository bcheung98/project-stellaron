import { BaseSyntheticEvent, useEffect, useState } from "react";

// Component imports
import MainContentBox from "custom/MainContentBox";
import StatsTable from "custom/StatsTable";
import ToggleButtons from "custom/ToggleButtons";

// Helper imports
import { WeaponATK, WeaponDEF, WeaponHP, weaponStats } from "data/weaponStats";
import { skillDisplayButtons } from "components/Settings";

// Type imports
import { WeaponProps } from "types/weapon";
import { selectSkillDisplay, SkillDisplay } from "reducers/settings";
import { useAppSelector } from "helpers/hooks";

function WeaponStats({ weapon }: WeaponProps) {
    const { stats } = weapon;
    const hp = stats.hp.toString() as WeaponHP;
    const atk = stats.atk.toString() as WeaponATK;
    const def = stats.def.toString() as WeaponDEF;

    const currentSkillDisplay = useAppSelector(selectSkillDisplay);
    const [mode, setMode] = useState<SkillDisplay>(currentSkillDisplay);
    const handleMode = (_: BaseSyntheticEvent, newView: SkillDisplay) => {
        if (newView !== null) {
            setMode(newView);
        }
    };

    let levels = [
        "1",
        "20",
        "20+",
        "30",
        "30+",
        "40",
        "40+",
        "50",
        "50+",
        "60",
        "60+",
        "70",
        "70+",
        "80",
    ];

    const data = [
        ["Level", ...levels],
        [
            "HP",
            ...levels.map((_, index) =>
                (weaponStats.hp[hp][index] || 0).toLocaleString()
            ),
        ],
        [
            "ATK",
            ...levels.map((_, index) =>
                (weaponStats.atk[atk][index] || 0).toLocaleString()
            ),
        ],
        [
            "DEF",
            ...levels.map((_, index) =>
                (weaponStats.def[def][index] || 0).toLocaleString()
            ),
        ],
    ];

    useEffect(() => {
        setMode(currentSkillDisplay);
    }, [currentSkillDisplay]);

    return (
        <MainContentBox
            title="Stats"
            actions={
                <ToggleButtons
                    color="secondary"
                    buttons={skillDisplayButtons}
                    value={mode}
                    exclusive
                    onChange={handleMode}
                    spacing={0}
                    padding={10}
                    highlightOnHover={false}
                />
            }
        >
            <StatsTable
                mode={mode}
                levels={levels}
                data={data}
                orientation="column"
                sliderProps={{
                    sx: {
                        minWidth: "100px",
                        maxWidth: "75%",
                        ml: "8px",
                    },
                }}
                tableProps={{
                    sx: {
                        width:
                            mode === "slider"
                                ? { xs: "100%", sm: "75%" }
                                : "100%",
                    },
                }}
            />
        </MainContentBox>
    );
}

export default WeaponStats;
