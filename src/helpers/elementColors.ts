import { useTheme } from "@mui/material";
import { Element } from "types/_common";

export function getElementColor({ element }: { element?: Element }) {
    const theme = useTheme();
    return element
        ? theme.text[element.toLowerCase() as keyof typeof theme.text]
        : "";
}
