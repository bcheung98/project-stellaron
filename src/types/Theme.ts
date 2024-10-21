import { defaultTheme } from "../themes/defaultTheme"

export type CustomTheme = {
    [Key in keyof typeof defaultTheme]: typeof defaultTheme[Key]
}

declare module "@mui/material/styles" {
    interface Theme extends CustomTheme { }
    interface ThemeOptions extends CustomTheme { }
}