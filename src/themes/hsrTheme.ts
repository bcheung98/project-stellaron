import { createTheme } from "@mui/material";
import { getThemeBackgroundColors } from "helpers/utils";
import { Shade } from "types/theme";

const appbarColors = ["rgb(15, 15, 15)", "rgb(30, 30, 30)", "rgb(26, 22, 24)"];

const border = {
    color: "rgb(168, 147, 105)",
    highlight: `rgb(233, 194, 39)`,
};

const backgroundColors = [
    {
        main: "rgb(26, 22, 24)",
        light: "rgb(36, 32, 34)",
        dark: "rgb(16, 12, 14)",
    },
    {
        main: "rgb(30, 30, 30)",
        light: "rgb(40, 40, 40)",
        dark: "rgb(20, 20, 20)",
    },
    {
        main: "rgb(15, 15, 15)",
        light: "rgb(25, 25, 25)",
        dark: "rgb(5, 5, 5)",
    },
];

export const hsrThemeData = {
    name: "HSR",
    background: (index: number, shade?: Shade) =>
        getThemeBackgroundColors({ colors: backgroundColors, index, shade }),
    palette: {
        primary: {
            main: "rgb(15, 15, 15)",
        },
        secondary: {
            main: "rgb(30, 30, 30)",
        },
        tertiary: {
            main: "rgb(15, 15, 15)",
            light: "rgb(25, 25, 25)",
            dark: "rgb(5, 5, 5)",
        },
        info: {
            main: "rgb(146, 124, 76)",
        },
        divider: border.color,
    },
    font: {
        main: {
            family: "DIN, Roboto, sans-serif",
            weight: 400,
        },
        styled: {
            family: "DIN, Roboto, sans-serif",
            weight: 400,
        },
        element: {
            weight: 400,
        },
        highlight: {
            weight: 400,
        },
        sizes: {
            "h4-styled": {
                xs: 26,
                sm: 28,
            },
            "h5-styled": {
                xs: 22,
                sm: 24,
            },
            "h6-styled": {
                xs: 18,
                sm: 20,
            },
            "body1-styled": {
                xs: 14,
                sm: 16,
            },
            "subtitle1-styled": {
                xs: 13,
                sm: 15,
            },
            "body2-styled": {
                xs: 12,
                sm: 14,
            },
            "subtitle2-styled": {
                xs: 11,
                sm: 13,
            },
            h4: {
                xs: 26,
                sm: 28,
            },
            h5: {
                xs: 22,
                sm: 24,
            },
            h6: {
                xs: 18,
                sm: 20,
            },
            body1: {
                xs: 14,
                sm: 16,
            },
            subtitle1: {
                xs: 13,
                sm: 15,
            },
            body2: {
                xs: 12,
                sm: 14,
            },
            subtitle2: {
                xs: 11,
                sm: 13,
            },
        },
    },
    text: {
        primary: "rgb(255, 255, 255)",
        contrast: "rgb(0, 0, 0)",
        selected: "rgb(30, 175, 255)",
        description: "rgb(205, 205, 205)",
        highlight: "#F7CA2F",
        highlight2: "#E0BB00",
        star: "rgb(255, 238, 157)",
        header: "#EEC477",
        refinement: "#F7CA2F",
        aero: "#55FFB5",
        electro: "#AC70F1",
        fusion: "#F0744E",
        glacio: "#49ABF7",
        havoc: "#C989B1",
        spectro: "#FAE56C",
        value: "#F7CA2F",
    },
    appbar: {
        backgroundColor: appbarColors[0],
        hover: appbarColors[1],
        selectedHover: appbarColors[2],
        color: "rgb(255, 255, 255)",
    },
    border: {
        color: {
            primary: border.color,
            highlight: border.highlight,
        },
    },
    displayCard: {
        borderWidth: 0,
        border: `0px solid ${border.color}`,
        borderRadius: "4px",
        backgroundColor: backgroundColors[2].main,
    },
    icon: {
        backgroundColor: appbarColors[1],
    },
    mainContentBox: {
        borderWidth: 0,
        border: `0px solid ${border.color}`,
        borderRadius: "4px",
        backgroundColor: backgroundColors[1].main,
    },
    menu: {
        primary: backgroundColors[0].dark,
        hover: backgroundColors[0].light,
        selected: backgroundColors[1].dark,
        selectedHover: backgroundColors[1].light,
    },
    table: {
        body: {
            primary: backgroundColors[0].dark,
            hover: backgroundColors[0].light,
        },
    },
};

export const hsrTheme = createTheme(hsrThemeData);
