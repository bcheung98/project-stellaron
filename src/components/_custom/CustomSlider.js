import { styled } from "@mui/material/styles";
import { Slider } from "@mui/material";

export const CustomSlider = styled(Slider)(({ element }) => ({
    color: `${SliderColor(element)}`,
    height: 5,
    "& .MuiSlider-track": {
        border: "none",
    },
    "& .MuiSlider-thumb": {
        "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
            boxShadow: "inherit",
        },
        "&:before": {
            display: "none",
        },
    }
}));

const SliderColor = (element) => {
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