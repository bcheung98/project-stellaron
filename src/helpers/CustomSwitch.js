import { alpha, styled } from "@mui/material/styles";
import { Switch } from "@mui/material";

export const CustomSwitch = styled(Switch)(({ element }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
        color: `${SwitchColor(element)}`,
        "&:hover": {
            backgroundColor: alpha(`${SwitchColor(element)}`, 0),
        },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
        backgroundColor: `${SwitchColor(element)}`,
    },
}));

const SwitchColor = (element) => {
    switch (element) {
        case "Physical":
            return "#a8a8a8"
        case "Fire":
            return "#e62a29"
        case "Ice":
            return "#07a0ff"
        case "Lightning":
            return "#b54bd3"
        case "Wind":
            return "#42c38c"
        case "Quantum":
            return "#6778fd"
        case "Imaginary":
            return "#e5b909"
        default:
            return "#1976d2"
    }
}