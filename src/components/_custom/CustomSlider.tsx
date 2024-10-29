import { styled } from "@mui/material/styles"
import { Slider } from "@mui/material"
import { elementalColors } from "../../helpers/elementalColors"

interface CustomSliderProps {
    element?: string | undefined
}

export const CustomSlider = styled(Slider)<CustomSliderProps>(({ element }) => ({
    color: `${elementalColors(element)}`,
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
}))