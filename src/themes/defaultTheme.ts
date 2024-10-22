const fontNormal = "DIN, Roboto, Segoe UI"
const fontNormalWeight = "bold"

const fontStyled = "DIN, Roboto, Segoe UI"
const fontStyledWeight = "bold"

export const defaultTheme = {
    palette: {
        background: {
            default: "rgb(26, 22, 24)"
        }
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: fontNormal,
                    fontWeight: fontNormalWeight
                }
            }
        },
        MuiAutocomplete: {
            styleOverrides: {
                noOptions: {
                    color: "white",
                    fontFamily: fontStyled,
                    fontWeight: fontStyledWeight,
                    backgroundColor: "rgb(30, 30, 30)",
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: "rgb(169, 142, 84)"
                }
            }
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    backgroundColor: "rgb(30, 30, 30)"
                }
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: "rgb(168, 147, 105)"
                }
            }
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    backgroundColor: "rgb(30, 30, 30)"
                },
                list: {
                    backgroundColor: "rgb(30, 30, 30)",
                    color: "white",
                }
            }
        }
    },
    font: {
        default: {
            family: fontNormal,
            weight: fontNormalWeight
        },
        styled: {
            family: fontStyled,
            weight: fontStyledWeight
        }
    },
    appbar: {
        backgroundColor: "rgb(15, 15, 15)",
    },
    border: {
        color: "rgb(168, 147, 105)",
        colorAlt: "rgb(30, 73, 118)"
    },
    paper: {
        backgroundColor: "rgb(30, 30, 30)",
    },
    card: {
        backgroundColor: "rgb(30, 30, 30)",
    },
    table: {
        header: {
            backgroundColor: "rgb(15, 15, 15)",
        },
        body: {
            backgroundColor: "rgb(26, 22, 24)",
            hover: "rgb(50, 50, 50)",
            selected: "rgb(90, 85, 80)",
        },
    },
    toolbar: {
        backgroundColor: "rgb(15, 15, 15)",
    },
    materialImage: {
        backgroundColor: "rgb(20, 20, 20)",
    },
    text: {
        color: "white",
        colorAlt: "rgb(218, 219, 222)",
        selected: "rgb(202, 166, 112)",
        appbar: "white"
    },
    button: {
        selected: "rgb(169, 142, 84)",
        hover: "rgb(125, 105, 62)",
    },
    menu: {
        backgroundColor: "rgb(32, 32, 32)",
        hover: "rgb(64, 64, 64)",
        selected: "rgb(80, 80, 80)",
        selectedHover: "rgb(96, 96, 96)"
    }
}