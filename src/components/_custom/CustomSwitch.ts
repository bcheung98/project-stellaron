import { alpha, styled } from "@mui/material/styles"
import { Switch } from "@mui/material"

interface CustomSwitchProps {
    element?: string | undefined
}

export const CustomSwitch = styled(Switch)<CustomSwitchProps>(({ element }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
        color: `rgb(169, 142, 84)`,
        "&:hover": {
            backgroundColor: alpha(`rgb(169, 142, 84)`, 0),
        },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
        backgroundColor: `rgb(169, 142, 84)`,
    },
}))