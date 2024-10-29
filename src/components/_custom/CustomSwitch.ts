import { alpha, styled } from "@mui/material/styles"
import { Switch } from "@mui/material"
import { elementalColors } from "../../helpers/elementalColors"

interface CustomSwitchProps {
    element?: string | undefined
}

export const CustomSwitch = styled(Switch)<CustomSwitchProps>(({ element }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
        color: `${elementalColors(element)}`,
        "&:hover": {
            backgroundColor: alpha(`${elementalColors(element)}`, 0),
        },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
        backgroundColor: `${elementalColors(element)}`,
    },
}))