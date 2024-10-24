import { styled } from "@mui/material/styles"
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip"

export const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow disableInteractive classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
        fontSize: theme.typography.pxToRem(12),
        fontFamily: "DIN, Roboto, Segoe UI",
        fontWeight: "bold",
        maxWidth: "none",
    },
}))

export const CustomTooltipLarge = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow disableInteractive classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
        fontSize: theme.typography.pxToRem(18),
        fontFamily: "DIN, Roboto, Segoe UI",
        fontWeight: "bold",
        maxWidth: "none",
    },
}))